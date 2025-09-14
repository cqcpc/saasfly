"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

export default function ImagePromptPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 sm:mb-6">
              Create Better AI Art with<br className="hidden sm:inline" /><span className="block sm:inline-block mt-2 sm:mt-0"><span className="text-purple-600" style={{color: '#7f00ff !important', fontWeight: 'inherit', display: 'inline-block', WebkitTextFillColor: '#7f00ff !important', textShadow: 'none'}}>Image Prompt</span></span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              A complete suite of AI tools covering every aspect of your image creation journey
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base">
                Try it now !
              </a>
              <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 border border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-sm sm:text-base">
                Tutorials
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Powered Tools Section */}
      <section className="py-12 sm:py-16 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              AI Powered Image Prompt Tools
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A complete suite of AI tools covering every aspect of your image creation journey
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Image to Prompt */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Icons.Image className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Image to Prompt
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Convert Image to Prompt to generate your own image
              </p>
            </div>

            {/* Magic Enhance */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Icons.Page className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Magic Enhance
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Transform simple text into detailed, descriptive image prompt
              </p>
            </div>

            {/* AI Image Generator */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Icons.Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                AI Image Generator
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Transform your image prompt into stunning visuals with AI-powered generation
              </p>
            </div>

            {/* AI Describe Image */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Icons.Search className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                AI Describe Image
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Let AI help you understand and analyze any image in detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose ImagePrompt.org?
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              The most comprehensive AI image toolkit for creators, designers, and developers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Icons.Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                All-in-One Platform
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Four powerful AI tools in one place - from image generation to prompt optimization.
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Icons.ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Free to Use
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Access all our AI tools completely free with no hidden costs or limitations.
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Icons.Heart className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Easy to Use
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Simple, intuitive interface that works for everyone - no technical expertise required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your creative workflow with our AI-powered tools in just a few simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Choose Your Tool
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Select from our four AI-powered tools based on your creative needs
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Upload or Input
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Upload your image or enter your text description depending on the tool
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                AI Processing
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our advanced AI analyzes and processes your input with cutting-edge algorithms
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Get Results
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Receive your optimized prompts, generated images, or detailed descriptions instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Start Creating with AI Today
          </h2>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2 sm:px-0">
            Join thousands of creators using ImagePrompt.org to enhance their creative workflow
            </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/imageprompt/image-to-prompt">
              <Button size="lg" className="w-full sm:w-auto bg-white/90 backdrop-blur-sm text-blue-600 hover:bg-gray-100 text-sm sm:text-base px-6 py-3">
                Try Image to Prompt
              </Button>
            </Link>
            <Link href="/imageprompt/ai-image-generator">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 text-sm sm:text-base px-6 py-3">
                Generate Images
              </Button>
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-blue-200 mt-4 sm:mt-6">
            100% Free • No Sign-up Required • Instant Results
          </p>
        </div>
      </section>
    </div>
  );
}