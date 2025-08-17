"use client";

import React from "react";
import Link from "next/link";
import { 
  MessageSquare, 
  Image, 
  Sparkles, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  Check,
  Bot,
  Palette,
  RefreshCw,
  Clock
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0F19]/80 backdrop-blur-lg border-b border-[#94A3B8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-[#3B82F6]" />
              <span className="text-xl font-bold text-white">AI Assistant</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#94A3B8] hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-[#94A3B8] hover:text-white transition-colors">How it Works</a>
              <a href="#pricing" className="text-[#94A3B8] hover:text-white transition-colors">Pricing</a>
              <Link 
                href="/" 
                className="px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16 lg:py-24">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#1E2635] border border-[#94A3B8]/10 mb-6">
              <Sparkles className="h-4 w-4 text-[#10B981] mr-2" />
              <span className="text-sm text-[#94A3B8]">Powered by GPT-4.1 Nano</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your AI Assistant for
              <span className="block bg-gradient-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent">
                Chat & Image Generation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl mx-auto mb-8">
              Experience the power of advanced AI with seamless text conversations and stunning image generation. 
              Switch between modes instantly and unlock your creative potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all font-semibold"
              >
                Start Chatting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-6 py-3 bg-[#1E2635] text-white rounded-lg hover:bg-[#252B3B] transition-all font-medium border border-[#94A3B8]/10">
                View Demo
                <Globe className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Demo Preview */}
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#6366F1]/20 blur-3xl" />
            <div className="relative bg-[#1A1F2E] rounded-2xl border border-[#94A3B8]/10 p-1">
              <div className="bg-[#151B28] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="max-w-[70%] bg-[#1E2635] rounded-lg rounded-bl-none px-4 py-3">
                      <p className="text-[#94A3B8] text-sm">Hello! How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[70%] bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-lg rounded-br-none px-4 py-3">
                      <p className="text-white text-sm">Can you generate an image of a futuristic city?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[70%] bg-[#1E2635] rounded-lg rounded-bl-none p-4">
                      <div className="bg-gradient-to-br from-[#3B82F6]/20 to-[#6366F1]/20 rounded-lg h-48 flex items-center justify-center">
                        <Image className="h-12 w-12 text-[#3B82F6]" />
                      </div>
                      <p className="text-[#94A3B8] text-sm mt-2">Generated image: Futuristic cityscape</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Features for Every Need
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Everything you need for AI-powered conversations and creative image generation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#1A1F2E] rounded-xl p-6 border border-[#94A3B8]/10 hover:border-[#3B82F6]/50 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Chat</h3>
              <p className="text-[#94A3B8]">
                Engage in natural conversations with GPT-4.1 Nano. Get instant, intelligent responses with real-time streaming.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1F2E] rounded-xl p-6 border border-[#94A3B8]/10 hover:border-[#3B82F6]/50 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Image Generation</h3>
              <p className="text-[#94A3B8]">
                Create stunning visuals from text descriptions. Toggle seamlessly between chat and image modes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1F2E] rounded-xl p-6 border border-[#94A3B8]/10 hover:border-[#3B82F6]/50 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-[#94A3B8]">
                Experience real-time streaming responses. No waiting, just instant AI-powered assistance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1A1F2E] rounded-xl p-6 border border-[#94A3B8]/10 hover:border-[#3B82F6]/50 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">New Chat</h3>
              <p className="text-[#94A3B8]">
                Start fresh conversations anytime. Your chat history is saved securely for future reference.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#1A1F2E] rounded-xl p-6 border border-[#94A3B8]/10 hover:border-[#3B82F6]/50 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
              <p className="text-[#94A3B8]">
                Your conversations are encrypted and stored securely with enterprise-grade protection.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#1A1F2E] rounded-xl p-6 border border-[#94A3B8]/10 hover:border-[#3B82F6]/50 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Available</h3>
              <p className="text-[#94A3B8]">
                Access your AI assistant anytime, anywhere. No downtime, always ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151B28]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Get started in seconds with our intuitive interface
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Choose Your Mode</h3>
              <p className="text-[#94A3B8]">Select between chat or image generation mode with a simple toggle</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enter Your Prompt</h3>
              <p className="text-[#94A3B8]">Type your message or describe the image you want to create</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Instant Results</h3>
              <p className="text-[#94A3B8]">Receive AI-generated responses or images in real-time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-[#1A1F2E] rounded-xl p-8 border border-[#94A3B8]/10">
              <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-[#94A3B8]">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">20 messages per day</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">5 images per day</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Basic support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-[#1E2635] text-white rounded-lg hover:bg-[#252B3B] transition-all font-medium border border-[#94A3B8]/10">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-[#1A1F2E] to-[#1E2635] rounded-xl p-8 border border-[#3B82F6]/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-full text-white text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-[#94A3B8]">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Unlimited messages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">100 images per day</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Advanced features</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all font-semibold">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#1A1F2E] rounded-xl p-8 border border-[#94A3B8]/10">
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Unlimited everything</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8]">SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-[#1E2635] text-white rounded-lg hover:bg-[#252B3B] transition-all font-medium border border-[#94A3B8]/10">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#1A1F2E] to-[#1E2635] rounded-2xl p-12 border border-[#94A3B8]/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
              Join thousands of users already leveraging AI for their daily tasks. 
              No credit card required for free tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all font-semibold"
              >
                Try It Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-6 py-3 bg-[#1E2635] text-white rounded-lg hover:bg-[#252B3B] transition-all font-medium border border-[#94A3B8]/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#94A3B8]/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-8 w-8 text-[#3B82F6]" />
                <span className="text-xl font-bold text-white">AI Assistant</span>
              </div>
              <p className="text-[#94A3B8]">
                Your intelligent companion for chat and creativity.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-[#94A3B8] hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-[#94A3B8] hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#94A3B8]/10 text-center">
            <p className="text-[#64748B]">
              © 2024 AI Assistant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}