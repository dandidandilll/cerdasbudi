import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Mic, Moon, Shield, Github, ExternalLink, Play, Heart, Users, TrendingUp, Music, Bell, Bot, Sparkles, Star, Zap, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden animate-fade-in">
        {/* Mobile Background Pattern */}
        <div className="lg:hidden absolute inset-0 opacity-10">
          <div className="absolute top-10 left-4 w-20 h-20 bg-blue-500 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-8 w-16 h-16 bg-purple-500 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-8 w-24 h-24 bg-pink-500 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
              {/* Mobile: Add visual elements */}
              <div className="lg:hidden flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce-gentle">
                    <Bot className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <Heart className="text-white" size={12} />
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-spin">
                    <Sparkles className="text-white" size={10} />
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6 animate-fade-in animate-delay-200">
                <span className="text-blue-600">CerdasBudi</span>: Teman Bicara Saat Kamu Butuh
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-slide-up animate-delay-300">
                Bantu remaja yang mengalami bullying, tidak percaya diri, atau masalah kesehatan mental dengan AI yang siap mendengar dan memahami.
              </p>
              
              {/* Mobile: Quick features preview */}
              <div className="lg:hidden grid grid-cols-3 gap-3 mb-6 animate-slide-up animate-delay-400">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl text-center border border-gray-200 dark:border-gray-700">
                  <MessageCircle className="text-blue-500 mx-auto mb-1" size={20} />
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">Chat</p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl text-center border border-gray-200 dark:border-gray-700">
                  <Mic className="text-purple-500 mx-auto mb-1" size={20} />
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">Voice</p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl text-center border border-gray-200 dark:border-gray-700">
                  <Music className="text-pink-500 mx-auto mb-1" size={20} />
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">Music</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-up animate-delay-400">
                <button 
                  onClick={() => navigate('/chat')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover-lift text-base sm:text-lg"
                >
                  Coba Sekarang
                </button>
                <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold border-2 border-blue-600 dark:border-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 hover-lift text-base sm:text-lg">
                  <Play size={18} />
                  Lihat Demo
                </button>
              </div>
            </div>

            {/* Desktop: iPhone Frame with Chat Preview */}
            <div className="hidden lg:block relative animate-slide-left animate-delay-500 order-1 lg:order-2">
              <div className="relative mx-auto" style={{ width: '280px', height: '560px' }}>
                {/* iPhone Frame */}
                <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-float">
                  {/* Screen */}
                  <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-white dark:bg-gray-900 px-6 py-2 flex justify-between items-center text-xs font-medium">
                      <span className="text-gray-900 dark:text-white">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-gray-900 dark:bg-white rounded-sm"></div>
                        <div className="w-1 h-2 bg-gray-900 dark:bg-white rounded-sm"></div>
                        <div className="w-6 h-3 border border-gray-900 dark:border-white rounded-sm">
                          <div className="w-4 h-1.5 bg-green-500 rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Bot className="text-blue-600" size={16} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm">CerdasBudi</h3>
                        <p className="text-blue-100 text-xs">Online • siap mendengar</p>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="bg-gray-50 dark:bg-gray-800 flex-1 px-4 py-3 space-y-3 overflow-hidden">
                      {/* Bot message */}
                      <div className="flex animate-slide-up animate-delay-700">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-md max-w-[180px] shadow-sm">
                          <p className="text-gray-800 dark:text-gray-200 text-xs leading-relaxed">
                            "Hai! Aku di sini untuk mendengarkan kamu. Mau cerita tentang apa hari ini?"
                          </p>
                        </div>
                      </div>
                      
                      {/* User message */}
                      <div className="flex justify-end animate-slide-up animate-delay-900">
                        <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md max-w-[180px] shadow-sm">
                          <p className="text-xs leading-relaxed">
                            "Aku merasa sendirian di sekolah..."
                          </p>
                        </div>
                      </div>
                      
                      {/* Bot response */}
                      <div className="flex animate-slide-up animate-delay-1100">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-md max-w-[180px] shadow-sm">
                          <p className="text-gray-800 dark:text-gray-200 text-xs leading-relaxed">
                            "Kamu tidak sendiri. Aku di sini untuk mendengarkan dan membantu. ❤️"
                          </p>
                        </div>
                      </div>
                      
                      {/* User response */}
                      <div className="flex justify-end animate-slide-up animate-delay-1300">
                        <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md max-w-[180px] shadow-sm">
                          <p className="text-xs leading-relaxed">
                            "Terima kasih... rasanya lega bisa cerita ke seseorang yang mau dengerin."
                          </p>
                        </div>
                      </div>
                      
                      {/* Voice message */}
                      <div className="flex justify-end animate-slide-up animate-delay-1500">
                        <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-md shadow-sm">
                          <div className="flex items-center space-x-2">
                            <Mic size={12} />
                            <div className="flex space-x-1">
                              <div className="w-1 h-2 bg-white rounded animate-pulse"></div>
                              <div className="w-1 h-1.5 bg-white/70 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-1 h-3 bg-white rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                              <div className="w-1 h-1.5 bg-white/70 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                            </div>
                            <span className="text-xs">0:05</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat Input */}
                    <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-2">
                          <p className="text-gray-500 dark:text-gray-400 text-xs">Ketik pesan...</p>
                        </div>
                        <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Mic className="text-white" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
                </div>
                
                {/* Reflection */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[3rem] transform translate-y-2 -z-10 blur-xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CerdasBudi Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 animate-slide-down">
              Kenapa CerdasBudi Dibuat?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed animate-slide-up animate-delay-200 px-4">
              Remaja saat ini menghadapi tantangan besar: bullying, tekanan sosial, dan masalah kepercayaan diri. 
              Banyak dari mereka merasa tidak punya tempat bercerita. CerdasBudi hadir sebagai solusi – chatbot AI 
              yang dirancang untuk menjadi teman curhat dan pelindung emosional pertama.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 sm:p-6 rounded-xl animate-scale-in animate-delay-300 hover-lift">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-2 animate-bounce-gentle">1 dari 4</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">remaja mengalami bullying</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 sm:p-6 rounded-xl animate-scale-in animate-delay-400 hover-lift">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 animate-bounce-gentle">60%</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">remaja merasa tidak percaya diri</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 sm:p-6 rounded-xl animate-scale-in animate-delay-500 hover-lift sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 animate-bounce-gentle">78%</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">tidak nyaman bercerita ke orang dewasa</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 sm:p-8 rounded-2xl animate-slide-up animate-delay-700 hover-glow">
              <Heart className="mx-auto mb-4 text-pink-300 animate-pulse-gentle" size={40} />
              <p className="text-lg sm:text-xl font-medium leading-relaxed">
                "Setiap remaja berhak mendapatkan dukungan emosional yang mereka butuhkan, 
                tanpa takut dihakimi atau diabaikan."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: Chat Preview Section | Desktop: Robot Greeting */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Rasakan Pengalaman Curhat yang Berbeda
            </h2>
            
            {/* Mobile: Enhanced Chat Preview with Phone Frame */}
            <div className="lg:hidden max-w-sm mx-auto animate-scale-in animate-delay-300">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Screen */}
                <div className="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden h-[600px] relative">
                  {/* Status Bar */}
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 flex justify-between items-center text-xs font-medium border-b border-gray-100 dark:border-gray-700">
                    <span className="text-gray-900 dark:text-white">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-900 dark:bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-900 dark:bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="w-4 h-2 bg-gray-900 dark:bg-white rounded-sm ml-2"></div>
                      <div className="w-6 h-3 border border-gray-900 dark:border-white rounded-sm">
                        <div className="w-4 h-1.5 bg-green-500 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-4 flex items-center gap-3 shadow-sm">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center animate-pulse-gentle">
                      <Bot className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">CerdasBudi</h3>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-blue-100 text-sm">Online • siap mendengar</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Bell className="text-white" size={16} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="bg-gray-50 dark:bg-gray-900 flex-1 px-4 py-4 space-y-4 overflow-hidden h-[420px]">
                    {/* Welcome message */}
                    <div className="flex animate-slide-up animate-delay-700">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-md max-w-[240px] shadow-sm border border-gray-100 dark:border-gray-600">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="text-blue-500" size={14} />
                          <span className="text-xs text-blue-500 font-medium">CerdasBudi</span>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                          Hai! Aku di sini untuk mendengarkan kamu. Mau cerita tentang apa hari ini? 😊
                        </p>
                      </div>
                    </div>
                    
                    {/* User message */}
                    <div className="flex justify-end animate-slide-up animate-delay-900">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-2xl rounded-br-md max-w-[240px] shadow-sm">
                        <p className="text-sm leading-relaxed">
                          Aku merasa sendirian di sekolah... kayak gak ada yang mau berteman sama aku 😔
                        </p>
                      </div>
                    </div>
                    
                    {/* Typing indicator */}
                    <div className="flex animate-slide-up animate-delay-1000">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 dark:border-gray-600">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                          <span className="text-xs text-gray-500">CerdasBudi sedang mengetik...</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bot response */}
                    <div className="flex animate-slide-up animate-delay-1200">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-md max-w-[240px] shadow-sm border border-gray-100 dark:border-gray-600">
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="text-pink-500" size={14} />
                          <span className="text-xs text-pink-500 font-medium">Dengan empati</span>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                          Kamu tidak sendiri. Aku di sini untuk mendengarkan dan membantu. Perasaan seperti itu wajar kok. Mau kita bahas lebih lanjut? 💙
                        </p>
                      </div>
                    </div>
                    
                    {/* Voice message example */}
                    <div className="flex justify-end animate-slide-up animate-delay-1400">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-2xl rounded-br-md shadow-sm">
                        <div className="flex items-center space-x-3">
                          <Mic size={16} />
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-white rounded animate-pulse"></div>
                            <div className="w-1 h-3 bg-white/70 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-1 h-5 bg-white rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-1 h-2 bg-white/70 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                            <div className="w-1 h-4 bg-white rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          </div>
                          <span className="text-xs">0:08</span>
                          <Play size={14} className="animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 flex items-center gap-2">
                        <p className="text-gray-500 dark:text-gray-400 text-sm flex-1">Ketik pesan...</p>
                        <Sparkles className="text-gray-400" size={16} />
                      </div>
                      <button className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-gentle">
                        <Mic className="text-white" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full"></div>
              </div>
              
              {/* Mobile Features Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700 animate-slide-left animate-delay-1600">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">100% Anonim</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Privasi terjamin</p>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700 animate-slide-right animate-delay-1600">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Respon Cepat</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">AI yang responsif</p>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700 animate-slide-left animate-delay-1700">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Penuh Empati</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Mendengar tanpa menghakimi</p>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700 animate-slide-right animate-delay-1700">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Gratis Selamanya</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Tanpa biaya tersembunyi</p>
                </div>
              </div>
            </div>

            {/* Desktop: Robot Greeting */}
<div className="hidden lg:block animate-scale-in animate-delay-300">
  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
    {/* Left: 3D Robot */}
    <div className="flex justify-center items-center animate-slide-left animate-delay-400">
      <div className="w-full max-w-md h-96 rounded-3xl overflow-hidden hover-lift relative">
        {/* Loading skeleton */}
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        
        <spline-viewer 
          url="https://prod.spline.design/Oca08Q2bD2W1pX8Y/scene.splinecode"
          className="w-full h-full rounded-3xl relative z-10"
        ></spline-viewer>
      </div>
    </div>

    {/* Right: Content */}
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 lg:p-12 hover-lift animate-slide-right animate-delay-500">

      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50/70 dark:bg-blue-900/20 backdrop-blur-sm p-4 rounded-xl animate-slide-left animate-delay-700 border border-blue-100 dark:border-blue-800">
          <MessageCircle className="text-blue-600 dark:text-blue-400 mb-2" size={24} />
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Chat Empati</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Ngobrol seperti dengan sahabat</p>
        </div>
        <div className="bg-purple-50/70 dark:bg-purple-900/20 backdrop-blur-sm p-4 rounded-xl animate-slide-right animate-delay-700 border border-purple-100 dark:border-purple-800">
          <Mic className="text-purple-600 dark:text-purple-400 mb-2" size={24} />
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Voice Message</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Kirim pesan suara dengan mudah</p>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-down">
            Fitur Unggulan CerdasBudi
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-slide-up animate-delay-200 hover-lift">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg animate-float">
                <MessageCircle className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-xs sm:text-sm lg:text-base">💬 Chat Interaktif</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">Rasakan pengalaman curhat seperti ngobrol dengan sahabat yang selalu memahami.</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-slide-up animate-delay-300 hover-lift">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg animate-float">
                <Mic className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-xs sm:text-sm lg:text-base">🎙️ Pesan Suara</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">Kamu bisa kirim suara jika tidak nyaman mengetik. AI kami tetap mendengarkan dan merespons dengan empati.</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-slide-up animate-delay-400 hover-lift">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg animate-float">
                <Music className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-xs sm:text-sm lg:text-base">🎵 Musik Sesuai Mood</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">Dengarkan musik yang disesuaikan dengan perasaan kamu untuk terapi dan relaksasi.</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-slide-up animate-delay-500 hover-lift">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg animate-float">
                <Bell className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-xs sm:text-sm lg:text-base">🔔 Reminder Semangat</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">Notifikasi harian dengan motivasi dan tips untuk menjaga kesehatan mental positif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 animate-slide-down">
            Siap Memulai Percakapan?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-200 leading-relaxed px-4">
            Coba sendiri bagaimana AI bisa menjadi teman yang hadir saat kamu butuh. 
            Tidak menilai, hanya mendengar dengan penuh empati.
          </p>
          <button 
            onClick={() => navigate('/chat')}
            className="bg-white text-blue-600 px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-gentle hover-lift"
          >
            Mulai Curhat Sekarang
          </button>
          <p className="text-blue-100 mt-3 sm:mt-4 text-xs sm:text-sm animate-fade-in animate-delay-500">
            Gratis • Anonim • Tanpa Registrasi
          </p>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-12 sm:py-16 bg-gray-900 dark:bg-black text-white transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Github className="mx-auto mb-4 sm:mb-6 text-gray-400 animate-rotate-gentle" size={40} />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 animate-slide-down">
              Proyek Open Source untuk Semua
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-slide-up animate-delay-200 text-sm sm:text-base px-4">
              CerdasBudi adalah proyek open-source. Siapa saja boleh menggunakan, mengembangkan, 
              dan menyebarluaskan aplikasi ini secara bebas. Mari bersama ciptakan ruang aman 
              untuk remaja di dunia digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 animate-slide-left animate-delay-300 hover-lift text-sm sm:text-base">
                <Github size={18} />
                Lihat di GitHub
              </button>
              <button
               onClick={() => window.open('https://github.com/dandidandilll/cerdasbudi', '_blank')}
               className="bg-transparent border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 animate-slide-right animate-delay-300 hover-lift text-sm sm:text-base"
                          >
              <ExternalLink size={18} />
              Dokumentasi
             </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-gray-400 py-8 sm:py-12 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="animate-slide-up animate-delay-200 sm:col-span-2 lg:col-span-1">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">CerdasBudi</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Teman bicara AI yang siap mendengar dan memahami setiap remaja yang membutuhkan dukungan emosional.
              </p>
            </div>
            <div className="animate-slide-up animate-delay-300">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontak</h4>
              <p className="text-gray-400 text-xs sm:text-sm mb-1">Email: hello@cerdasbudi.com</p>
              <p className="text-gray-400 text-xs sm:text-sm">Support: support@cerdasbudi.com</p>
            </div>
            <div className="animate-slide-up animate-delay-400 sm:col-span-2 lg:col-span-1">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Komunitas</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Bergabunglah dengan komunitas developer dan pengguna yang peduli kesehatan mental remaja.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center animate-fade-in animate-delay-500">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 CerdasBudi. Dibuat dengan ❤️ untuk kesehatan mental remaja Indonesia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
