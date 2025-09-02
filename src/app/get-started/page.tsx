'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Mail, ChevronLeft, ChevronRight, Menu, X, Users, Zap, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ArtixanGetStarted = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Connect with high-intent buyers",
      description: "Let Artixan match your solutions with businesses searching for exactly what you offer.",
      icon: <Users className="w-16 h-16" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Streamline your lead generation", 
      description: "Focus on what you do best while we bring qualified prospects directly to you.",
      icon: <Zap className="w-16 h-16" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Grow your business faster",
      description: "Join thousands of vendors who've accelerated their growth through our platform.",
      icon: <Shield className="w-16 h-16" />,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 border-b border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`flex items-center space-x-2 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-lg">
              A
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              artixan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 hover:scale-105 transform">How it works</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 hover:scale-105 transform">For buyers</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 hover:scale-105 transform">Get in touch</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10">
              Log in
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-lg border-t border-slate-700 p-6">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">How it works</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">For buyers</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Get in touch</a>
              <hr className="border-slate-700" />
              <button className="text-slate-300 hover:text-white transition-colors text-left">Log in</button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg font-medium">
                Get started
              </button>
            </div>
     
        )}
      </nav>

      {/* Main Content Container - Fixed height and proper centering */}
      <div className="relative z-10 flex flex-col lg:flex-row" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Left Side - Form - Properly centered */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className={`w-full max-w-md transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Back Button */}
            <button
            onClick={() => { router.push('/') }}
             className="flex items-center text-slate-400 hover:text-white transition-colors duration-300 mb-8 group cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </button>

            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
                Join Artixan as a vendor
              </h1>
              <p className="text-slate-400 text-lg">
                Enter your work email to get started
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="lena.mitchell@prox.com"
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-slate-500 backdrop-blur-sm hover:bg-slate-800/70"
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className="group w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center"
              >
                Continue with email
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center text-slate-400">
                Already have an account?{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Log in
                </a>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <div className="text-sm text-slate-500 text-center mb-4">
                Trusted by 10,000+ service providers
              </div>
              <div className="flex justify-center space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-16 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center text-xs font-semibold text-slate-400 hover:bg-slate-700 transition-colors">
                    LOGO
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration & Content - Properly centered */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          {/* Background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-sm"></div>
          
          <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center w-full">
            {/* Main Illustration */}
            <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              <div className="relative mb-8">
                {/* Animated icon container */}
                <div className={`w-32 h-32 bg-gradient-to-br ${slides[currentSlide].gradient} rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl transform transition-all duration-500 hover:scale-110`}>
                  <div className="text-white">
                    {slides[currentSlide].icon}
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="max-w-sm mx-auto">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-slate-400 leading-relaxed text-base lg:text-lg">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Slide Navigation */}
            <div className="flex items-center justify-center mt-12 space-x-4">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5 text-slate-300" />
              </button>

              {/* Dots indicator */}
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg' 
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5 text-slate-300" />
              </button>
            </div>

            {/* Benefits Cards */}
          
          </div>
        </div>
      </div>

      {/* Mobile Content - Better positioning */}
      <div className="lg:hidden relative z-10 px-6 pb-32">
        <div className="text-center mb-8 max-w-sm mx-auto">
          <div className={`w-24 h-24 bg-gradient-to-br ${slides[currentSlide].gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl transition-all duration-500`}>
            <div className="text-white scale-75">
              {slides[currentSlide].icon}
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-white mb-3 leading-tight">
            {slides[currentSlide].title}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            {slides[currentSlide].description}
          </p>
          
          {/* Mobile dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-500 scale-125' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Benefits - Better spacing */}
        <div className="space-y-3 max-w-sm mx-auto">
          {[
            { icon: <Users className="w-4 h-4" />, title: "Quality leads only" },
            { icon: <Zap className="w-4 h-4" />, title: "Easy setup process" },
            { icon: <Shield className="w-4 h-4" />, title: "No upfront costs" }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400">
                {benefit.icon}
              </div>
              <span className="text-white text-sm font-medium">{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA for mobile - Fixed positioning */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-800/95 backdrop-blur-lg border-t border-slate-700 p-4 safe-area-inset-bottom">
        <div className="text-center max-w-sm mx-auto">
          <div className="text-xs text-slate-400 mb-3">
            Ready to connect with quality buyers?
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg">
            Continue Setup
          </button>
        </div>
      </div>

      {/* Decorative elements - Better positioning */}
      <div className="absolute top-1/3 left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce hidden lg:block"></div>
      
      {/* Side accent lines - Better positioning */}
      <div className="absolute left-0 top-1/3 w-1 h-32 bg-gradient-to-b from-blue-500 to-transparent"></div>
      <div className="absolute right-0 bottom-1/3 w-1 h-32 bg-gradient-to-t from-purple-500 to-transparent"></div>
    </div>
  );
};

export default ArtixanGetStarted;