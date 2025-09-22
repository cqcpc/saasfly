import { NextRequest, NextResponse } from 'next/server';
import { uploadFileToCoze, uploadImageUrlToCoze, runCozeWorkflow } from '~/lib/coze-api';

export async function POST(request: NextRequest) {
  console.log('=== Image to Prompt API Called ===');
  console.log('Environment variables check:');
  console.log('COZE_API_TOKEN:', process.env.COZE_API_TOKEN ? 'Present' : 'Missing');
  console.log('COZE_WORKFLOW_ID:', process.env.COZE_WORKFLOW_ID ? 'Present' : 'Missing');
  console.log('COZE_API_BASE_URL:', process.env.COZE_API_BASE_URL);
  
  try {
    let file: File | null = null;
    let imageUrl: string | null = null;
    let modelType = 'general';
    let language = 'en';

    // 检查Content-Type来决定如何解析请求体
    const contentType = request.headers.get('content-type') ?? '';
    
    if (contentType.includes('multipart/form-data')) {
      // 处理FormData（文件上传）
      const formData = await request.formData();
      file = formData.get('file') as File;
      imageUrl = formData.get('imageUrl') as string;
      modelType = (formData.get('modelType') as string) ?? 'general';
      language = (formData.get('language') as string) ?? 'en';
    } else {
      // 处理JSON数据（URL上传）
      const body = await request.json() as {
        imageUrl?: string;
        modelType?: string;
        language?: string;
      };
      imageUrl = body.imageUrl ?? null;
      modelType = body.modelType ?? 'general';
      language = body.language ?? 'en';
    }

    let fileId: string;

    // 根据输入类型处理图片
    if (file) {
      console.log('Processing file upload:', file.name, file.size, file.type);
      // 验证文件类型
      if (!file.type.startsWith('image/')) {
        return NextResponse.json(
          { error: 'Invalid file type. Please upload an image.' },
          { status: 400 }
        );
      }

      // 验证文件大小 (4MB)
      if (file.size > 4 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'File size too large. Maximum size is 4MB.' },
          { status: 400 }
        );
      }

      console.log('Uploading file to Coze...');
      fileId = await uploadFileToCoze(file);
    } else if (imageUrl) {
      console.log('Processing image URL:', imageUrl);
      fileId = await uploadImageUrlToCoze(imageUrl);
    } else {
      return NextResponse.json(
        { error: 'No file or image URL provided.' },
        { status: 400 }
      );
    }

    // 调用工作流生成提示词
    console.log('Running Coze workflow with fileId:', fileId, 'modelType:', modelType, 'language:', language);
    const prompt = await runCozeWorkflow(fileId, modelType, language);
    console.log('Workflow completed successfully');

    return NextResponse.json({
      success: true,
      prompt: prompt,
      fileId: fileId,
    });
  } catch (error) {
    console.error('Image to prompt API error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { 
        error: 'Failed to generate prompt',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}