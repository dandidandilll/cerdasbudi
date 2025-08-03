import React from 'react';
import { 
  Play, 
  MessageCircle, 
  Mic, 
  Music, 
  Bell, 
  Heart, 
  Shield, 
  Smartphone, 
  Download,
  CheckCircle,
  ArrowRight,
  Volume2,
  Headphones,
  Clock,
  Star
} from 'lucide-react';

const HowToStartPage = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Chat Interaktif',
      description: 'Ngobrol dengan AI yang empati dan memahami perasaan remaja',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mic,
      title: 'Rekam Suara',
      description: 'Kirim pesan suara jika tidak nyaman mengetik',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Music,
      title: 'Musik Sesuai Mood',
      description: 'Dengarkan musik yang cocok dengan perasaan kamu',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Bell,
      title: 'Reminder Semangat',
      description: 'Notifikasi motivasi untuk menjaga mood positif',
      color: 'from-green-500 to-green-600'
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Perkenalan',
      description: 'Ceritakan nama, umur, dan jenis kelamin kamu',
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      step: 2,
      title: 'Dapatkan Token',
      description: 'Ambil token gratis untuk menggunakan AI',
      icon: Shield,
      color: 'bg-blue-500'
    },
    {
      step: 3,
      title: 'Mulai Chat',
      description: 'Langsung bisa curhat dengan AI yang empati',
      icon: MessageCircle,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 sm:py-16 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Play className="mx-auto mb-4 sm:mb-6 animate-bounce-gentle" size={48} />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-slide-down">
              Cara Memulai dengan CerdasBudi
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 leading-relaxed animate-slide-up animate-delay-200 px-4">
              Panduan lengkap untuk memulai perjalanan kesehatan mental kamu bersama AI yang empati
            </p>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Fitur Lengkap CerdasBudi
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className={`text-center group hover:transform hover:scale-105 transition-all duration-300 animate-slide-up animate-delay-${(index + 2) * 100} hover-lift`}
                  >
                    <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg animate-float`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Preview */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Preview Aplikasi Mobile
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Mobile Frame */}
              <div className="relative animate-slide-left animate-delay-300">
                {/* Phone Frame */}
                <div className="relative mx-auto w-64 sm:w-80 h-[500px] sm:h-[600px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl animate-float">
                  {/* Screen */}
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-gray-100 dark:bg-gray-700 h-6 flex items-center justify-between px-4 text-xs text-gray-600 dark:text-gray-300">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 sm:p-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <MessageCircle className="text-white" size={16} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm sm:text-base">CerdasBudi</h3>
                          <p className="text-blue-100 text-xs">● Online - siap mendengar</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 flex-1 overflow-y-auto">
                      <div className="flex animate-slide-left animate-delay-700">
                        <div className="bg-gray-100 dark:bg-gray-700 p-2 sm:p-3 rounded-2xl rounded-bl-md max-w-[70%] hover-scale">
                          <p className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm">Hai! Aku merasa sedih hari ini 😔</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end animate-slide-right animate-delay-1000">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 sm:p-3 rounded-2xl rounded-br-md max-w-[70%] hover-scale animate-glow">
                          <p className="text-xs sm:text-sm">Aku di sini untuk mendengarkan. Mau cerita apa yang terjadi? 💙</p>
                        </div>
                      </div>

                      <div className="flex animate-slide-left animate-delay-1000">
                        <div className="bg-gray-100 dark:bg-gray-700 p-2 sm:p-3 rounded-2xl rounded-bl-md max-w-[70%] hover-scale">
                          <div className="flex items-center space-x-2">
                            <Mic className="text-blue-500" size={12} />
                            <div className="flex space-x-1">
                              <div className="w-1 h-3 bg-blue-500 rounded animate-pulse"></div>
                              <div className="w-1 h-2 bg-blue-400 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-1 h-4 bg-blue-500 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                              <div className="w-1 h-2 bg-blue-400 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                            </div>
                            <span className="text-xs text-gray-500">0:03</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end animate-slide-right animate-delay-1000">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 sm:p-3 rounded-2xl rounded-br-md max-w-[70%] hover-scale animate-glow">
                          <p className="text-xs sm:text-sm">Terima kasih sudah berbagi. Kamu sangat berani! 🌟</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Features */}
                    <div className="border-t border-gray-200 dark:border-gray-600 p-2 sm:p-3">
                      <div className="flex items-center justify-around">
                        <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 hover-scale">
                          <MessageCircle className="text-blue-600 dark:text-blue-400" size={16} />
                        </button>
                        <button className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 hover-scale">
                          <Mic className="text-purple-600 dark:text-purple-400" size={16} />
                        </button>
                        <button className="p-2 rounded-full bg-pink-100 dark:bg-pink-900 hover-scale">
                          <Music className="text-pink-600 dark:text-pink-400" size={16} />
                        </button>
                        <button className="p-2 rounded-full bg-green-100 dark:bg-green-900 hover-scale">
                          <Bell className="text-green-600 dark:text-green-400" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Features Description */}
              <div className="space-y-6 sm:space-y-8 animate-slide-right animate-delay-500">
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover-lift animate-scale-in animate-delay-700">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 sm:p-3 rounded-lg">
                      <MessageCircle className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">Chat Real-time</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Ngobrol langsung dengan AI yang memahami perasaan remaja</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover-lift animate-scale-in animate-delay-1000">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-purple-100 dark:bg-purple-900 p-2 sm:p-3 rounded-lg">
                      <Mic className="text-purple-600 dark:text-purple-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">Voice Message</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Kirim pesan suara jika tidak nyaman mengetik</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover-lift animate-scale-in animate-delay-1000">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-pink-100 dark:bg-pink-900 p-2 sm:p-3 rounded-lg">
                      <Music className="text-pink-600 dark:text-pink-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">Mood Music</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Musik yang disesuaikan dengan perasaan kamu</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover-lift animate-scale-in animate-delay-1000">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-green-100 dark:bg-green-900 p-2 sm:p-3 rounded-lg">
                      <Bell className="text-green-600 dark:text-green-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">Daily Motivation</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Reminder harian untuk menjaga semangat positif</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Steps */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              3 Langkah Mudah Memulai
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className={`flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 rounded-xl animate-slide-up animate-delay-${(index + 3) * 100} hover-lift`}
                  >
                    <div className={`${step.color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0 animate-pulse-gentle`}>
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                        <Icon className="text-gray-600 dark:text-gray-400" size={20} />
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden sm:block text-gray-400 animate-bounce-gentle" size={20} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Fitur Lengkap untuk Kesehatan Mental
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Chat Feature */}
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg animate-scale-in animate-delay-200 hover-lift">
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 animate-float">
                  <MessageCircle className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">💬 Chat Empati</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  <li>• AI yang memahami bahasa remaja</li>
                  <li>• Respons yang empati dan tidak menghakimi</li>
                  <li>• Tersedia 24/7 kapan saja kamu butuh</li>
                  <li>• Privasi terjamin 100%</li>
                </ul>
              </div>

              {/* Voice Feature */}
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg animate-scale-in animate-delay-300 hover-lift">
                <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 animate-float">
                  <Mic className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">🎙️ Voice Message</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  <li>• Rekam pesan suara dengan mudah</li>
                  <li>• AI mendengar dan memahami intonasi</li>
                  <li>• Lebih ekspresif dari teks biasa</li>
                  <li>• Cocok untuk yang tidak suka mengetik</li>
                </ul>
              </div>

              {/* Music Feature */}
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg animate-scale-in animate-delay-400 hover-lift">
                <div className="bg-pink-100 dark:bg-pink-900 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 animate-float">
                  <Music className="text-pink-600 dark:text-pink-400" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">🎵 Mood Music</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  <li>• Musik sesuai dengan perasaan kamu</li>
                  <li>• Playlist untuk relaksasi dan motivasi</li>
                  <li>• Terapi musik untuk kesehatan mental</li>
                  <li>• Update playlist mingguan</li>
                </ul>
              </div>

              {/* Reminder Feature */}
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg animate-scale-in animate-delay-500 hover-lift">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 animate-float">
                  <Bell className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">🔔 Daily Reminder</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  <li>• Motivasi harian untuk semangat</li>
                  <li>• Reminder self-care dan istirahat</li>
                  <li>• Tips kesehatan mental praktis</li>
                  <li>• Jadwal yang bisa disesuaikan</li>
                </ul>
              </div>

              {/* Privacy Feature */}
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg animate-scale-in animate-delay-700 hover-lift">
                <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 animate-float">
                  <Shield className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">🔒 Privasi Aman</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  <li>• Data tidak disimpan di server</li>
                  <li>• Enkripsi end-to-end</li>
                  <li>• Anonim tanpa registrasi</li>
                  <li>• Keamanan tingkat enterprise</li>
                </ul>
              </div>

              {/* Accessibility Feature */}
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg animate-scale-in animate-delay-1000 hover-lift">
                <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 animate-float">
                  <Smartphone className="text-orange-600 dark:text-orange-400" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">📱 Mobile Friendly</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  <li>• Optimized untuk semua device</li>
                  <li>• Interface yang mudah digunakan</li>
                  <li>• Loading cepat di jaringan lambat</li>
                  <li>• Dark mode untuk mata nyaman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 animate-slide-down">
            Siap Memulai Perjalanan Kesehatan Mental?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-200 leading-relaxed px-4">
            Jangan tunggu lagi! Mulai curhat dengan AI yang empati dan dapatkan dukungan yang kamu butuhkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-bounce-gentle hover-lift flex items-center justify-center space-x-2">
              <Play size={20} />
              <span>Mulai Sekarang</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 animate-slide-up animate-delay-300 hover-lift flex items-center justify-center space-x-2">
              <Download size={20} />
              <span>Download Guide</span>
            </button>
          </div>
          <p className="text-blue-100 mt-3 sm:mt-4 text-xs sm:text-sm animate-fade-in animate-delay-500">
            Gratis • Anonim • Tanpa Registrasi • Privasi Terjamin
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowToStartPage;