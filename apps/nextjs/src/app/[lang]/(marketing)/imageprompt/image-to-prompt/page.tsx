"use client";

import React, { useState, useRef, useCallback } from "react";
import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";
import { cn } from "@saasfly/ui";

// AI模型选项
const AI_MODELS = [
  {
    id: "general",
    name: "General Image Prompt",
    description: "Natural language description of the image"
  },
  {
    id: "flux",
    name: "Flux",
    description: "Optimized for state-of-the-art Flux AI models, concise natural language"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Tailored for Midjourney generation with Midjourney parameters"
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "Formatted for Stable Diffusion models"
  }
];

// 语言选项
const LANGUAGES = [
  { id: "en", name: "English" },
  { id: "zh", name: "中文" }
];

export default function ImageToPromptPage() {
  const [selectedModel, setSelectedModel] = useState("general");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [activeTab, setActiveTab] = useState("upload"); // 新增状态控制标签页
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  // 处理文件选择
  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError("请选择有效的图片文件");
      return;
    }
    
    if (file.size > 4 * 1024 * 1024) {
      setError("文件大小不能超过4MB");
      return;
    }
    
    setError("");
    setImageFile(file);
    setImageUrl("");
    
    // 创建预览
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  // 处理拖拽
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  }, [handleFileSelect]);

  // 处理URL加载
  const handleLoadImageUrl = useCallback(async () => {
    if (!imageUrl.trim()) {
      setError("请输入有效的图片URL");
      return;
    }
    
    setIsUploading(true);
    setError("");
    
    try {
      // 验证URL是否为有效图片
      const img = new Image();
      img.crossOrigin = "anonymous";
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });
      
      setImagePreview(imageUrl);
      setImageFile(null);
    } catch (error) {
      setError("无法加载图片，请检查URL是否正确");
    } finally {
      setIsUploading(false);
    }
  }, [imageUrl]);

  // 生成提示词
  const handleGeneratePrompt = useCallback(async () => {
    if (!imagePreview) {
      setError("请先上传图片");
      return;
    }
    
    setIsGenerating(true);
    setError("");
    
    try {
      // 这里应该调用实际的AI API
      // 暂时使用模拟数据
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockPrompts = {
        general: "A beautiful landscape with mountains in the background, clear blue sky, and green meadows in the foreground. The scene is peaceful and serene with natural lighting.",
        flux: "landscape, mountains, blue sky, meadows, natural lighting, peaceful, serene",
        midjourney: "beautiful landscape with mountains --ar 16:9 --v 6 --style raw --quality 2",
        "stable-diffusion": "(beautiful landscape:1.2), mountains, blue sky, green meadows, natural lighting, peaceful, serene, high quality, detailed, photorealistic"
      };
      
      setGeneratedPrompt(mockPrompts[selectedModel as keyof typeof mockPrompts] || mockPrompts.general);
    } catch (error) {
      setError("生成提示词时出错，请重试");
    } finally {
      setIsGenerating(false);
    }
  }, [imagePreview, selectedModel]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Image to Prompt</h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">Extract detailed prompts from any image</p>
            </div>
            <div className="flex items-center justify-end sm:justify-start space-x-3 sm:space-x-4">
              <button className="text-gray-500 hover:text-gray-700 p-1">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
            
            {/* Left Column - Function Area */}
            <div className="space-y-4 sm:space-y-6 min-h-full">
              {/* Upload Image Section */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Upload Image
                </h2>
                
                {/* Tabs for Upload Methods */}
                <div className="flex border-b border-gray-200 mb-3 sm:mb-4">
                  <button 
                    onClick={() => setActiveTab("upload")}
                    className={cn(
                      "px-3 sm:px-4 py-2 border-b-2 font-medium transition-colors text-sm sm:text-base",
                      activeTab === "upload" 
                        ? "border-purple-600 text-purple-600" 
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    )}
                  >
                    File Upload
                  </button>
                  <button 
                    onClick={() => setActiveTab("url")}
                    className={cn(
                      "px-3 sm:px-4 py-2 border-b-2 font-medium transition-colors text-sm sm:text-base",
                      activeTab === "url" 
                        ? "border-purple-600 text-purple-600" 
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    )}
                  >
                    URL
                  </button>
                </div>
                
                {/* Conditional Content Based on Active Tab */}
                {activeTab === "upload" && (
                  /* Drag & Drop Area */
                  <div
                      ref={dropRef}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      className={cn(
                        "border-2 border-dashed rounded-lg p-4 sm:p-6 text-center transition-colors aspect-video flex flex-col justify-center",
                        dragActive ? "border-purple-500 bg-purple-50" : "border-gray-300 hover:border-gray-400"
                      )}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                      />
                      
                      <Icons.Image className="mx-auto h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-400 mb-2 sm:mb-3 md:mb-4" />
                      <p className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">
                        Drop your image here, or click to browse
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                        Supports JPG, PNG (Max 4MB)
                      </p>
                      
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-purple-600 hover:bg-purple-700 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
                      >
                        <Icons.Image className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Upload Image
                      </Button>
                    </div>
                )}

                {activeTab === "url" && (
                  /* URL Input Section */
                  <div className="space-y-3 sm:space-y-4">
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Paste image URL here..."
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                    />
                    
                    <Button
                      onClick={handleLoadImageUrl}
                      disabled={!imageUrl.trim() || isUploading}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3"
                    >
                      {isUploading ? (
                        <>
                          <Icons.Spinner className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        "Load Image URL"
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Image Preview */}
            <div className="space-y-4 sm:space-y-6 min-h-full">
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Image Preview
                </h2>
                
                {/* Tabs for Preview Methods - matching left side */}
                <div className="flex border-b border-gray-200 mb-3 sm:mb-4">
                  <button className="px-3 sm:px-4 py-2 border-b-2 border-purple-600 text-purple-600 font-medium text-sm sm:text-base">
                    Preview
                  </button>
                </div>
                
                {imagePreview ? (
                  <div className="relative aspect-video bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-contain p-2"
                    />
                    
                    <Button
                      onClick={() => {
                        setImagePreview(null);
                        setImageFile(null);
                        setImageUrl("");
                        setGeneratedPrompt("");
                      }}
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white shadow-sm"
                    >
                      <Icons.Close className="h-3 w-3" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center aspect-video border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 p-6">
                    <div className="text-center p-6">
                      <Icons.Image className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                      <p className="text-gray-500 text-sm">Your image will show here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section - Model Selection, Generate Button & Results */}
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            {/* AI Model Selection */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Select AI Model
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {AI_MODELS.map((model) => (
                  <label
                    key={model.id}
                    className={cn(
                      "flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-colors",
                      selectedModel === model.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <input
                      type="radio"
                      name="model"
                      value={model.id}
                      checked={selectedModel === model.id}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="mt-1 text-purple-600 focus:ring-purple-500"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm sm:text-base">{model.name}</div>
                      <div className="text-xs sm:text-sm text-gray-500 mt-1">{model.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Language Selection */}
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="max-w-xs">
                <label className="block text-base sm:text-lg font-bold text-gray-700 mb-2">
                  Prompt Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
              {/* Generate Button */}
              <div className="mb-4 sm:mb-6">
                <Button
                  onClick={handleGeneratePrompt}
                  disabled={isGenerating || (!imageFile && !imageUrl.trim())}
                  className="w-full max-w-xs bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
                >
                  {isGenerating ? (
                    <>
                      <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Icons.Sparkles className="mr-2 h-4 w-4" />
                      Generate Prompt
                    </>
                    )}
                  </Button>
              </div>
              

              
              <div className="min-h-[120px] p-3 sm:p-4 border border-gray-300 rounded-lg bg-gray-50">
                {generatedPrompt ? (
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-gray-900 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">{generatedPrompt}</p>
                    <Button
                      onClick={() => navigator.clipboard.writeText(generatedPrompt)}
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                    >
                      <Icons.Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Copy</span>
                    </Button>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">
                    Generated prompt will appear here
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm sm:text-base">{error}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}