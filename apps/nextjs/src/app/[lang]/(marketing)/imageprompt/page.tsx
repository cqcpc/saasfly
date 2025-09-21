"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";
import type { Locale } from "~/config/i18n-config";

export default function ImagePromptPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
              Create Better AI Art with<br className="hidden md:inline" /><span className="block md:inline-block mt-1 md:mt-0"><span className="text-purple-600" style={{color: '#7f00ff !important', fontWeight: 'inherit', display: 'inline-block', WebkitTextFillColor: '#7f00ff !important', textShadow: 'none'}}>Image Prompt</span></span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4 md:px-0 leading-relaxed">
              A complete suite of AI tools covering every aspect of your image creation journey
            </p>
            <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <Link href={`/${lang}/imageprompt/image-to-prompt`} className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors text-sm md:text-base">
                Try it now !
              </Link>
              <span className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 border border-gray-300 text-gray-400 font-medium rounded-lg cursor-not-allowed transition-colors text-sm md:text-base">
                Tutorials
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Powered Tools Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              AI Powered Tools
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Comprehensive AI tools for every stage of your creative process
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Image to Prompt */}
            <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Icons.Image className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Image to Prompt
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Extract detailed prompts from any image to recreate or modify AI-generated art
              </p>
              <Link href={`/${lang}/imageprompt/image-to-prompt`} className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-xs sm:text-sm md:text-base">
                Try now
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Magic Enhance */}
            <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Icons.Page className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Magic Enhance
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Transform simple text into detailed, descriptive image prompts with AI enhancement
              </p>
              <span className="inline-flex items-center text-gray-400 cursor-not-allowed font-medium text-xs sm:text-sm md:text-base">
                Try now
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>

            {/* AI Image Generator */}
            <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Icons.Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                AI Image Generator
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Transform your image prompt into stunning visuals with AI-powered generation
              </p>
              <span className="inline-flex items-center text-gray-400 cursor-not-allowed font-medium text-xs sm:text-sm md:text-base">
                Try now
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>

            {/* AI Describe Image */}
            <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Icons.Search className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                AI Describe Image
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Let AI help you understand and analyze any image in detail with comprehensive descriptions
              </p>
              <span className="inline-flex items-center text-gray-400 cursor-not-allowed font-medium text-xs sm:text-sm md:text-base">
                Try now
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose ImagePrompt.org?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              The most comprehensive AI image toolkit for creators, designers, and developers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center max-w-6xl mx-auto">
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Icons.Rocket className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                All-in-One Platform
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Four powerful AI tools in one place - from image generation to prompt optimization.
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Icons.ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Free to Use
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Access all our AI tools completely free with no hidden costs or limitations.
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Icons.Heart className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Easy to Use
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Simple, intuitive interface that works for everyone - no technical expertise required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Transform your creative workflow with our AI-powered tools in just a few simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Choose Your Tool
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Select from our four AI-powered tools based on your creative needs
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Upload or Input
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Upload your image or enter your text description depending on the tool
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                AI Processing
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Our advanced AI analyzes and processes your input with cutting-edge algorithms
              </p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-orange-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Get Results
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Receive your optimized prompts, generated images, or detailed descriptions instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-purple-600">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Ready to Transform Your Creative Process?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-purple-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0 leading-relaxed">
              Join thousands of creators who are already using our AI tools to enhance their workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <Link href={`/${lang}/imageprompt/image-to-prompt`} className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm md:text-base">
                Get Started Free
              </Link>
              <span className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 border border-gray-300 text-gray-400 font-medium rounded-lg cursor-not-allowed transition-colors text-sm md:text-base">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}