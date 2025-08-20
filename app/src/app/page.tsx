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
    <div style={{ minHeight: '100vh', backgroundColor: '#0B0F19', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        backgroundColor: 'rgba(11, 15, 25, 0.9)', 
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 50
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bot style={{ width: '32px', height: '32px', color: '#3B82F6' }} />
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>AI Assistant</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                padding: '4px 8px',
                backgroundColor: '#FF6600',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '600',
                color: 'white'
              }}>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/2048px-Y_Combinator_logo.svg.png" 
                  alt="Y Combinator" 
                  style={{ width: '16px', height: '16px', filter: 'brightness(0) invert(1)' }} 
                />
                <span>Backed by YC</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <a href="#features" style={{ color: '#94A3B8', textDecoration: 'none' }}>Features</a>
              <a href="#pricing" style={{ color: '#94A3B8', textDecoration: 'none' }}>Pricing</a>
              <Link href="/chat" style={{ 
                padding: '8px 16px', 
                background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: '160px', paddingBottom: '48px', padding: '160px 24px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            padding: '4px 12px',
            backgroundColor: '#1E2635',
            borderRadius: '999px',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            marginBottom: '24px'
          }}>
            <Sparkles style={{ width: '16px', height: '16px', color: '#10B981', marginRight: '8px' }} />
            <span style={{ fontSize: '14px', color: '#94A3B8' }}>Powered by GPT-4.1 Nano</span>
          </div>
          
          <h1 className="animate-fade-in-up" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2', opacity: '0' }}>
            Your AI Assistant for<br />
            <span style={{ 
              background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Chat & Image Generation
            </span>
          </h1>
          
          <p style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '768px', margin: '0 auto 32px' }}>
            Experience the power of advanced AI with seamless text conversations and stunning image generation. 
            Switch between modes instantly and unlock your creative potential.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/chat" style={{ 
              padding: '12px 24px', 
              background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              Start Chatting
              <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
            </Link>
            <button style={{ 
              padding: '12px 24px', 
              backgroundColor: '#1E2635',
              color: 'white',
              borderRadius: '8px',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              View Demo
              <Globe style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>

        {/* Demo Preview */}
        <div style={{ maxWidth: '1024px', margin: '80px auto 0', padding: '0 24px' }}>
          <div style={{ 
            backgroundColor: '#1A1F2E',
            borderRadius: '16px',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            padding: '4px'
          }}>
            <div style={{ backgroundColor: '#151B28', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ 
                    maxWidth: '70%',
                    backgroundColor: '#1E2635',
                    borderRadius: '8px 8px 8px 0',
                    padding: '12px 16px'
                  }}>
                    <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Hello! How can I help you today?</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{ 
                    maxWidth: '70%',
                    background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
                    borderRadius: '8px 8px 0 8px',
                    padding: '12px 16px'
                  }}>
                    <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Can you generate an image of a futuristic city?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>
              Powerful Features for Every Need
            </h2>
            <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '512px', margin: '0 auto' }}>
              Everything you need for AI-powered conversations and creative image generation
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {/* Feature Cards */}
            {[
              { icon: MessageSquare, title: "Smart Chat", description: "Engage in natural conversations with GPT-4.1 Nano." },
              { icon: Palette, title: "Image Generation", description: "Create stunning visuals from text descriptions." },
              { icon: Zap, title: "Lightning Fast", description: "Experience real-time streaming responses." },
              { icon: RefreshCw, title: "New Chat", description: "Start fresh conversations anytime." },
              { icon: Shield, title: "Secure & Private", description: "Your conversations are encrypted and secure." },
              { icon: Clock, title: "24/7 Available", description: "Access your AI assistant anytime, anywhere." }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group hover:animate-hover-lift transition-all duration-200 cursor-pointer"
                style={{ 
                  backgroundColor: '#1A1F2E',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.1)';
                }}
              >
                <div style={{ 
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <feature.icon style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.5' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '80px 24px', backgroundColor: 'rgba(21, 27, 40, 0.5)' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>
              Simple, Transparent Pricing
            </h2>
            <p style={{ fontSize: '18px', color: '#94A3B8' }}>
              Choose the plan that fits your needs
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Pricing Cards */}
            {[
              { name: "Free", price: "$0", features: ["20 messages per day", "5 images per day", "Basic support"] },
              { name: "Pro", price: "$19", features: ["Unlimited messages", "100 images per day", "Priority support"], popular: true },
              { name: "Enterprise", price: "Custom", features: ["Unlimited everything", "Custom integrations", "Dedicated support"] }
            ].map((plan, index) => (
              <div 
                key={index} 
                className="group transition-all duration-200 cursor-pointer"
                style={{ 
                  backgroundColor: '#1A1F2E',
                  borderRadius: '12px',
                  padding: '32px',
                  border: plan.popular ? '2px solid #3B82F6' : '1px solid rgba(148, 163, 184, 0.1)',
                  position: 'relative',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                  e.currentTarget.style.boxShadow = plan.popular 
                    ? '0 0 30px rgba(59, 130, 246, 0.25)' 
                    : '0 0 20px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                {plan.popular && (
                  <div style={{ 
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '4px 12px',
                    background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{plan.name}</h3>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '36px', fontWeight: 'bold' }}>{plan.price}</span>
                  {plan.price !== "Custom" && <span style={{ color: '#94A3B8' }}>/month</span>}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <Check style={{ width: '20px', height: '20px', color: '#10B981', marginRight: '8px', flexShrink: 0 }} />
                      <span style={{ color: '#94A3B8', fontSize: '14px' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button style={{ 
                  width: '100%',
                  padding: '12px',
                  background: plan.popular ? 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)' : '#1E2635',
                  color: 'white',
                  borderRadius: '8px',
                  border: plan.popular ? 'none' : '1px solid rgba(148, 163, 184, 0.1)',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}>
                  {plan.name === "Enterprise" ? "Contact Sales" : plan.popular ? "Start Free Trial" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        borderTop: '1px solid rgba(148, 163, 184, 0.1)',
        padding: '48px 24px'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#64748B' }}>
            © 2024 AI Assistant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}