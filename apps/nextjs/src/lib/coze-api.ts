// 移除未使用的import

// 类型定义
interface CozeFileUploadResponse {
  code: number;
  data: {
    id: string;
  };
}

interface CozeWorkflowResponse {
  code: number;
  data: {
    execute_id?: string;
    status?: string;
    result?: string;
    output?: string;
  } | string;
}

interface CozeWorkflowRetrieveResponse {
  code: number;
  data: {
    status: string;
    output?: string;
  };
}

// 扣子API配置
const COZE_API_TOKEN = process.env.COZE_API_TOKEN;
const COZE_WORKFLOW_ID = process.env.COZE_WORKFLOW_ID;
const COZE_API_BASE_URL = process.env.COZE_API_BASE_URL ?? 'https://api.coze.cn';

if (!COZE_API_TOKEN || !COZE_WORKFLOW_ID) {
  throw new Error('Missing COZE_API_TOKEN or COZE_WORKFLOW_ID in environment variables');
}

// 文件上传接口
export async function uploadFileToCoze(file: File): Promise<string> {
  console.log('Uploading file to Coze:', file.name, file.size, file.type);
  
  const formData = new FormData();
  formData.append('file', file);
  formData.append('purpose', 'file-extract');

  try {
    const response = await fetch(`${COZE_API_BASE_URL}/v1/files/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${COZE_API_TOKEN}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('File upload error:', response.status, errorText);
      throw new Error(`File upload failed: ${response.status} ${errorText}`);
    }

    const result = await response.json() as CozeFileUploadResponse;
    console.log('File upload successful:', result);
    return result.data.id; // 返回文件ID
  } catch (error) {
    console.error('File upload fetch error:', error);
    throw error;
  }
}

// 工作流运行接口
export async function runCozeWorkflow(fileId: string, modelType: string, language: string): Promise<string> {
  const requestBody = {
      workflow_id: COZE_WORKFLOW_ID,
      parameters: {
        userQuery: language === 'zh' ? `为这张图片生成详细的${modelType}提示词，请用中文回答` : `Generate a detailed ${modelType} prompt for this image in ${language} language`,
        img: {
          type: "file",
          file_id: fileId
        },
        promptType: modelType
      },
      is_async: false,
    };
  
  console.log('Sending request to Coze workflow:', JSON.stringify(requestBody, null, 2));

  let response;
  try {
    response = await fetch(`${COZE_API_BASE_URL}/v1/workflow/run`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${COZE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
  } catch (fetchError) {
    console.error('Fetch error:', fetchError);
    throw new Error(`Network error: ${fetchError instanceof Error ? fetchError.message : 'Unknown error'}`);
  }

  if (!response.ok) {
    const errorText = await response.text();
    console.error('API error response:', errorText);
    throw new Error(`Workflow API failed: ${response.status} ${errorText}`);
  }

  const result = await response.json() as CozeWorkflowResponse;
  
  console.log('Coze workflow response:', JSON.stringify(result, null, 2));
  
  // 检查响应格式
  if (result.code !== undefined && result.code !== 0) {
    throw new Error(`Invalid workflow response: ${JSON.stringify(result)}`);
  }
  
  // 如果直接返回了data字段（同步执行完成）
  if (typeof result.data === 'string') {
    return result.data;
  }
  
  // 检查是否是异步执行的响应格式
  if (typeof result.data === 'object' && result.data.execute_id) {
    return await pollWorkflowResult(result.data.execute_id);
  }
  
  // 检查是否是同步执行完成的响应格式
  if (typeof result.data === 'object' && result.data.status === 'completed' && result.data.result) {
    return result.data.result;
  }
  
  throw new Error(`Unexpected workflow response format: ${JSON.stringify(result)}`);
}

// 轮询工作流执行结果
async function pollWorkflowResult(executeId: string): Promise<string> {
  const maxAttempts = 30; // 最多轮询30次
  const pollInterval = 2000; // 每2秒轮询一次
  
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const response = await fetch(`${COZE_API_BASE_URL}/v1/workflow/run/retrieve?execute_id=${executeId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${COZE_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to retrieve workflow result: ${response.status}`);
    }

    const result = await response.json() as CozeWorkflowRetrieveResponse;
    
    if (result.data.status === 'completed') {
      return result.data.output ?? 'No prompt generated';
    } else if (result.data.status === 'failed') {
      throw new Error('Workflow execution failed');
    }
    
    // 等待后继续轮询
    await new Promise(resolve => setTimeout(resolve, pollInterval));
  }
  
  throw new Error('Workflow execution timeout');
}

// 从URL上传图片到扣子
export async function uploadImageUrlToCoze(imageUrl: string): Promise<string> {
  console.log('Downloading image from URL:', imageUrl);
  
  try {
    // 先下载图片
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      console.error('Failed to fetch image:', imageResponse.status, imageResponse.statusText);
      throw new Error(`Failed to fetch image from URL: ${imageResponse.status}`);
    }
    
    const imageBlob = await imageResponse.blob();
    console.log('Image downloaded:', imageBlob.size, imageBlob.type);
    
    const file = new File([imageBlob], 'image.jpg', { type: imageBlob.type });
    
    return await uploadFileToCoze(file);
  } catch (error) {
    console.error('Image URL upload error:', error);
    throw error;
  }
}