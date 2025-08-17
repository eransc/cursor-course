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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-crypto-bg-primary font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-crypto-bg-primary/80 backdrop-blur-lg border-b border-crypto-text-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-crypto-brand-primary" />
              <span className="text-xl font-bold text-crypto-text-primary">AI Assistant</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">How it Works</a>
              <a href="#pricing" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">Pricing</a>
              <Button asChild className="bg-gradient-primary hover:shadow-glow">
                <Link href="/">Try Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16 lg:py-24">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-crypto-bg-tertiary border border-crypto-text-secondary/10 mb-6">
              <Sparkles className="h-4 w-4 text-crypto-accent-green mr-2" />
              <span className="text-sm text-crypto-text-secondary">Powered by GPT-4.1 Nano</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-crypto-text-primary mb-6">
              Your AI Assistant for
              <span className="block bg-gradient-to-r from-crypto-brand-primary to-crypto-brand-secondary bg-clip-text text-transparent">
                Chat & Image Generation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-crypto-text-secondary max-w-3xl mx-auto mb-8">
              Experience the power of advanced AI with seamless text conversations and stunning image generation. 
              Switch between modes instantly and unlock your creative potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link href="/">
                  Start Chatting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="bg-crypto-bg-tertiary text-crypto-text-primary hover:bg-crypto-bg-hover border-crypto-text-secondary/10">
                View Demo
                <Globe className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Demo Preview */}
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-crypto-brand-primary/20 to-crypto-brand-secondary/20 blur-3xl" />
            <Card className="relative bg-crypto-bg-card border-crypto-text-secondary/10">
              <CardContent className="bg-crypto-bg-secondary rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-crypto-text-danger" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-crypto-accent-green" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="max-w-[70%] bg-crypto-bg-tertiary rounded-lg rounded-bl-none px-4 py-3">
                      <p className="text-crypto-text-secondary text-sm">Hello! How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[70%] bg-gradient-primary rounded-lg rounded-br-none px-4 py-3">
                      <p className="text-white text-sm">Can you generate an image of a futuristic city?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[70%] bg-crypto-bg-tertiary rounded-lg rounded-bl-none p-4">
                      <div className="bg-gradient-to-br from-crypto-brand-primary/20 to-crypto-brand-secondary/20 rounded-lg h-48 flex items-center justify-center">
                        <Image className="h-12 w-12 text-crypto-brand-primary" />
                      </div>
                      <p className="text-crypto-text-secondary text-sm mt-2">Generated image: Futuristic cityscape</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-crypto-text-primary mb-4">
              Powerful Features for Every Need
            </h2>
            <p className="text-lg text-crypto-text-secondary max-w-2xl mx-auto">
              Everything you need for AI-powered conversations and creative image generation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Cards */}
            {[
              {
                icon: MessageSquare,
                title: "Smart Chat",
                description: "Engage in natural conversations with GPT-4.1 Nano. Get instant, intelligent responses with real-time streaming.",
                gradient: "from-crypto-brand-primary to-crypto-brand-secondary"
              },
              {
                icon: Palette,
                title: "Image Generation",
                description: "Create stunning visuals from text descriptions. Toggle seamlessly between chat and image modes.",
                gradient: "from-crypto-accent-green to-crypto-accent-green-light"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Experience real-time streaming responses. No waiting, just instant AI-powered assistance.",
                gradient: "from-crypto-brand-primary to-crypto-brand-secondary"
              },
              {
                icon: RefreshCw,
                title: "New Chat",
                description: "Start fresh conversations anytime. Your chat history is saved securely for future reference.",
                gradient: "from-crypto-accent-green to-crypto-accent-green-light"
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Your conversations are encrypted and stored securely with enterprise-grade protection.",
                gradient: "from-crypto-brand-primary to-crypto-brand-secondary"
              },
              {
                icon: Clock,
                title: "24/7 Available",
                description: "Access your AI assistant anytime, anywhere. No downtime, always ready to help.",
                gradient: "from-crypto-accent-green to-crypto-accent-green-light"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="bg-crypto-bg-card border-crypto-text-secondary/10 hover:border-crypto-brand-primary/50 transition-all hover:shadow-glow"
              >
                <CardHeader>
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                    `bg-gradient-to-r ${feature.gradient}`
                  )}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-crypto-text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-crypto-text-secondary">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-crypto-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-crypto-text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-crypto-text-secondary max-w-2xl mx-auto">
              Get started in seconds with our intuitive interface
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Choose Your Mode", description: "Select between chat or image generation mode with a simple toggle" },
              { step: "2", title: "Enter Your Prompt", description: "Type your message or describe the image you want to create" },
              { step: "3", title: "Get Instant Results", description: "Receive AI-generated responses or images in real-time" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-crypto-text-primary mb-2">{item.title}</h3>
                <p className="text-crypto-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-crypto-text-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-crypto-text-secondary max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Pricing Cards */}
            {[
              {
                name: "Free",
                price: "$0",
                features: ["20 messages per day", "5 images per day", "Basic support"],
                popular: false
              },
              {
                name: "Pro",
                price: "$19",
                features: ["Unlimited messages", "100 images per day", "Priority support", "Advanced features"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited everything", "Custom integrations", "Dedicated support", "SLA guarantee"],
                popular: false
              }
            ].map((plan) => (
              <Card 
                key={plan.name}
                className={cn(
                  "relative",
                  plan.popular ? "bg-gradient-to-b from-crypto-bg-card to-crypto-bg-tertiary border-crypto-brand-primary/50" : "bg-crypto-bg-card border-crypto-text-secondary/10"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-primary rounded-full text-white text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-crypto-text-primary">{plan.name}</CardTitle>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-crypto-text-primary">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-crypto-text-secondary">/month</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-crypto-accent-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-crypto-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={cn(
                      "w-full",
                      plan.popular ? "bg-gradient-primary hover:shadow-glow" : "bg-crypto-bg-tertiary hover:bg-crypto-bg-hover text-crypto-text-primary border border-crypto-text-secondary/10"
                    )}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : plan.popular ? "Start Free Trial" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-crypto-bg-card to-crypto-bg-tertiary border-crypto-text-secondary/10 p-12">
            <CardHeader>
              <CardTitle className="text-3xl sm:text-4xl font-bold text-crypto-text-primary mb-4">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-lg text-crypto-text-secondary mb-8 max-w-2xl mx-auto">
                Join thousands of users already leveraging AI for their daily tasks. 
                No credit card required for free tier.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                  <Link href="/">
                    Try It Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" className="bg-crypto-bg-tertiary text-crypto-text-primary hover:bg-crypto-bg-hover border-crypto-text-secondary/10">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-crypto-text-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-8 w-8 text-crypto-brand-primary" />
                <span className="text-xl font-bold text-crypto-text-primary">AI Assistant</span>
              </div>
              <p className="text-crypto-text-secondary">
                Your intelligent companion for chat and creativity.
              </p>
            </div>
            
            <div>
              <h4 className="text-crypto-text-primary font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-crypto-text-primary font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-crypto-text-primary font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="text-crypto-text-secondary hover:text-crypto-text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-crypto-text-secondary/10 text-center">
            <p className="text-crypto-text-muted">
              © 2024 AI Assistant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}