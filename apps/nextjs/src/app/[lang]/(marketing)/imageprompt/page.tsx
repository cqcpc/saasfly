"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

export default function ImagePromptPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{color: '#374151'}}>
              Create Better AI Art with<br /><span style={{color: '#f7100ff !important', fontWeight: 'inherit', display: 'inline-block', WebkitTextFillColor: '#f7100ff !important', textShadow: 'none'}} className="!text-[#f7100ff] [&]:!text-[#f7100ff]">Image Prompt</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              A complete suite of AI tools covering every aspect of your image creation journey
            </p>
          </div>
        </div>
      </section>

      {/* AI Powered Tools Section */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI Powered Image Prompt Tools
            </h2>
            <p className="text-lg text-gray-600">
              A complete suite of AI tools covering every aspect of your image creation journey
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {/* Image to Prompt */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
               <div>
                 <div className="mx-auto h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                   <Icons.Image className="h-8 w-8 text-blue-600" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">
                   Image to Prompt
                 </h3>
                 <p className="text-gray-600 mb-6" style={{fontSize: '12px'}}>
                   Convert Image to Prompt to generate your own image
                 </p>
               </div>
               <Link href="/imageprompt/image-to-prompt">
                 <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                   Generate Prompt
                 </Button>
               </Link>
             </div>

            {/* Image Prompt Generator */}
             <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="mx-auto h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Icons.Page className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Magic Enhance
                  </h3>
                  <p className="text-gray-600 mb-6" style={{fontSize: '12px'}}>
                    Transform simple text into detailed, descriptive image prompt
                  </p>
                </div>
                <Link href="/imageprompt/prompt-generator">
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    Generate Prompt
                  </Button>
                </Link>
              </div>

            {/* AI Image Generator */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
               <div>
                 <div className="mx-auto h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                   <Icons.Rocket className="h-8 w-8 text-purple-600" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">
                   AI Image Generator
                 </h3>
                 <p className="text-gray-600 mb-6" style={{fontSize: '12px'}}>
                   Transform your image prompt into stunning visuals with Al-powered generation
                 </p>
               </div>
               <Link href="/imageprompt/ai-image-generator">
                 <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                   Generate Image Now!
                 </Button>
               </Link>
             </div>

            {/* AI Describe Image */}
             <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="mx-auto h-16 w-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <Icons.Search className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Al Describe Image
                  </h3>
                  <p className="text-gray-600 mb-6" style={{fontSize: '12px'}}>
                    Let Al help you understand and analyze any image in detail
                  </p>
                </div>
                <Link href="/imageprompt/describe-image">
                  <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                    Generate Description
                  </Button>
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ImagePrompt.org?
            </h2>
            <p className="text-lg text-gray-600">
              The most comprehensive AI image toolkit for creators, designers, and developers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Icons.Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                All-in-One Platform
              </h3>
              <p className="text-gray-600">
                Four powerful AI tools in one place - from image generation to prompt optimization.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Icons.ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Free to Use
              </h3>
              <p className="text-gray-600">
                Access all our AI tools completely free with no hidden costs or limitations.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Icons.Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Easy to Use
              </h3>
              <p className="text-gray-600">
                Simple, intuitive interface that works for everyone - no technical expertise required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Transform your creative workflow with our AI-powered tools in just a few simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Choose Your Tool
              </h3>
              <p className="text-gray-600 text-sm">
                Select from our four AI-powered tools based on your creative needs
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Upload or Input
              </h3>
              <p className="text-gray-600 text-sm">
                Upload your image or enter your text description depending on the tool
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                AI Processing
              </h3>
              <p className="text-gray-600 text-sm">
                Our advanced AI analyzes and processes your input with cutting-edge algorithms
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Get Results
              </h3>
              <p className="text-gray-600 text-sm">
                Receive your optimized prompts, generated images, or detailed descriptions instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Creating with AI Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of creators using ImagePrompt.org to enhance their creative workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/imageprompt/image-to-prompt">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Try Image to Prompt
              </Button>
            </Link>
            <Link href="/imageprompt/ai-image-generator">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Generate Images
              </Button>
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            100% Free • No Sign-up Required • Instant Results
          </p>
        </div>
      </section>
    </div>
  );
}