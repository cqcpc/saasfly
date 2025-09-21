// 简单的测试脚本来验证image-to-prompt API
const fs = require('fs');
const path = require('path');

async function testImageToPromptAPI() {
  try {
    const testData = {
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
      modelType: 'general',
      language: 'en'
    };
    
    console.log('Testing image-to-prompt API...');
    
    const response = await fetch('http://localhost:3002/api/image-to-prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('Raw response:', responseText.substring(0, 500));
    
    let result;
    try {
      result = JSON.parse(responseText);
      console.log('Response body:', JSON.stringify(result, null, 2));
    } catch (e) {
      console.log('Failed to parse JSON response:', e.message);
      return;
    }
    
    if (response.ok) {
      console.log('✅ API test successful!');
      console.log('Generated prompt:', result.prompt);
    } else {
      console.log('❌ API test failed:', result.error);
    }
    
  } catch (error) {
    console.error('❌ Test error:', error.message);
  }
}

// 运行测试
testImageToPromptAPI();