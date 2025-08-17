import Link from "next/link";
import { MessageCircle, Image, Zap, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">ChatAI</span>
            </div>
            <Link 
              href="/chat"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Start Chatting
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            AI-Powered Chat &amp; 
            <span className="text-blue-600"> Image Generation</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the power of OpenAI's latest models. Chat with GPT-4, generate stunning images, 
            and enjoy real-time streaming responses in one seamless interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg sm:max-w-none mx-auto">
            <Link 
              href="/chat"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Start Chatting <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to interact with AI, from natural conversations to creative image generation.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Text Chat Feature */}
            <div className="text-center p-4 sm:p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Smart Conversations
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Chat naturally with GPT-4.1-nano. Get intelligent responses with real-time streaming 
                for an engaging conversation experience.
              </p>
            </div>

            {/* Image Generation Feature */}
            <div className="text-center p-4 sm:p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Image className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Image Creation
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Generate stunning visuals with OpenAI's image generation model. 
                Simply describe what you want and watch it come to life.
              </p>
            </div>

            {/* Real-time Streaming Feature */}
            <div className="text-center p-4 sm:p-6 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Real-time Responses
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Experience instant feedback with streaming text responses. 
                See AI thoughts unfold in real-time as it processes your requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your first conversation or create your first image. No signup required.
          </p>
          <Link 
            href="/chat"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
          >
            Get Started Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <MessageCircle className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold">ChatAI</span>
            </div>
            <p className="text-sm text-gray-400">
              Powered by OpenAI • Built with Next.js &amp; Supabase
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
