import React from 'react';
import { Heart, Users, BookOpen, AlertTriangle, Shield, Eye, Lightbulb, Target, Code, MessageCircle, User } from 'lucide-react';

const StoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 sm:py-16 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <User className="mx-auto mb-4 sm:mb-6 animate-bounce-gentle" size={48} />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-slide-down">
              Mengapa CerdasBudi Diciptakan?
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 leading-relaxed animate-slide-up animate-delay-200 px-4">
              Sebuah cerita personal dari developer yang menyaksikan langsung dampak bullying 
              di lingkungan pendidikan dan kegagalan sistem dalam melindungi siswa yang rentan.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 sm:p-6 lg:p-8 rounded-2xl mb-8 sm:mb-12 animate-scale-in animate-delay-200 hover-lift">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center animate-slide-down">
                Latar Belakang Personal Developer
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg sm:text-xl mb-4 sm:mb-6 animate-slide-up animate-delay-300">
                  Saya tumbuh dan bersekolah di lingkungan dengan tingkat bullying yang cukup tinggi. 
                  Setiap hari, saya menyaksikan bagaimana teman-teman sekelas menjadi korban intimidasi, 
                  ejekan, dan perlakuan tidak adil yang meninggalkan luka mendalam.
                </p>
                
                <p className="mb-4 sm:mb-6 animate-slide-up animate-delay-400 text-sm sm:text-base">
                  Yang paling membekas dalam ingatan adalah ketika beberapa teman dekat saya harus 
                  <strong className="text-red-600 dark:text-red-400"> pindah sekolah</strong> karena tidak tahan dengan 
                  tekanan bullying yang mereka alami. Mereka yang dulunya ceria dan bersemangat, 
                  perlahan menjadi pendiam, takut, dan kehilangan kepercayaan diri.
                </p>

                <p className="mb-4 sm:mb-6 animate-slide-up animate-delay-500 text-sm sm:text-base">
                  Saya menyadari bahwa <strong className="text-purple-600 dark:text-purple-400">bullying adalah tentang kekuasaan</strong> - 
                  siapa yang lebih kuat, siapa yang lebih populer, siapa yang bisa mengendalikan yang lain. 
                  Namun, sekolah seharusnya bukan tempat untuk rebutan kekuasaan seperti itu. 
                  <strong className="text-blue-600 dark:text-blue-400"> Sekolah adalah tempat belajar</strong>, tempat di mana 
                  setiap siswa berhak mendapatkan perlakuan yang sama, rasa aman, dan kesempatan untuk berkembang.
                </p>
              </div>
            </div>

            {/* Observation Cards */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 sm:p-6 rounded-xl border-l-4 border-red-500 animate-slide-left animate-delay-700 hover-lift">
                <AlertTriangle className="text-red-600 dark:text-red-400 mb-3 sm:mb-4 animate-float" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Yang Saya Saksikan</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  <li className="animate-slide-up animate-delay-1000">• Teman-teman yang dulunya aktif menjadi pendiam</li>
                  <li className="animate-slide-up animate-delay-1000">• Siswa yang takut masuk sekolah atau bolos</li>
                  <li className="animate-slide-up animate-delay-1000">• Prestasi akademik menurun drastis</li>
                  <li className="animate-slide-up animate-delay-1000">• Isolasi sosial dan kehilangan teman</li>
                  <li className="animate-slide-up animate-delay-1000">• Beberapa teman harus pindah sekolah</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 sm:p-6 rounded-xl border-l-4 border-orange-500 animate-slide-right animate-delay-1000 hover-lift">
                <Eye className="text-orange-600 dark:text-orange-400 mb-3 sm:mb-4 animate-float" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Kegagalan Sistem</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  <li className="animate-slide-up animate-delay-1000">• Guru yang tidak kompeten menangani bullying</li>
                  <li className="animate-slide-up animate-delay-1000">• Siswa pendiam justru diabaikan</li>
                  <li className="animate-slide-up animate-delay-1000">• Fokus hanya pada siswa "bermasalah"</li>
                  <li className="animate-slide-up animate-delay-1000">• Kurangnya sistem pelaporan yang aman</li>
                  <li className="animate-slide-up animate-delay-1000">• Tidak ada follow-up untuk korban</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Failure Analysis */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Paradoks dalam Sistem Pendidikan
            </h2>
            
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg mb-6 sm:mb-8 animate-scale-in animate-delay-300 hover-lift">
              <div className="text-center mb-6 sm:mb-8">
                <BookOpen className="mx-auto mb-3 sm:mb-4 text-gray-600 dark:text-gray-400 animate-rotate-gentle" size={40} />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 animate-slide-down">
                  Ketika Siswa Pendiam Justru Diabaikan
                </h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 sm:p-6 rounded-xl animate-slide-left animate-delay-500 hover-scale">
                  <h4 className="text-base sm:text-lg font-semibold text-red-800 dark:text-red-400 mb-2 sm:mb-3">❌ Yang Terjadi</h4>
                  <ul className="space-y-1 sm:space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <li className="animate-slide-up animate-delay-700">• Siswa yang menjadi pendiam karena bullying diabaikan</li>
                    <li className="animate-slide-up animate-delay-700">• Guru fokus pada siswa yang "membuat masalah"</li>
                    <li className="animate-slide-up animate-delay-700">• Korban bullying tidak mendapat perhatian khusus</li>
                    <li className="animate-slide-up animate-delay-700">• Sistem reaktif, bukan preventif</li>
                    <li className="animate-slide-up animate-delay-700">• Tidak ada ruang aman untuk bercerita</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 sm:p-6 rounded-xl animate-slide-right animate-delay-700 hover-scale">
                  <h4 className="text-base sm:text-lg font-semibold text-green-800 dark:text-green-400 mb-2 sm:mb-3">✅ Yang Seharusnya</h4>
                  <ul className="space-y-1 sm:space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <li className="animate-slide-up animate-delay-1000">• Siswa pendiam mendapat perhatian ekstra</li>
                    <li className="animate-slide-up animate-delay-1000">• Guru dilatih mengenali tanda-tanda bullying</li>
                    <li className="animate-slide-up animate-delay-1000">• Sistem dukungan untuk korban bullying</li>
                    <li className="animate-slide-up animate-delay-1000">• Pendekatan proaktif dan preventif</li>
                    <li className="animate-slide-up animate-delay-1000">• Ruang aman untuk melaporkan dan bercerita</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 sm:p-6 lg:p-8 rounded-2xl animate-scale-in animate-delay-1000 hover-glow">
              <div className="text-center">
                <Heart className="mx-auto mb-3 sm:mb-4 animate-pulse-gentle" size={40} />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Refleksi Personal</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  "Saya menyadari bahwa sistem pendidikan sering kali gagal melindungi mereka yang paling membutuhkan. 
                  Ketika seorang anak menjadi pendiam karena bullying, itu adalah tanda bahaya yang seharusnya 
                  mendapat perhatian segera, bukan diabaikan. Sayangnya, yang sering terjadi adalah sebaliknya - 
                  mereka yang diam justru 'tidak terlihat' oleh sistem."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role of Parents and Teachers */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Peran Krusial Orang Tua dan Guru dalam Perkembangan Anak
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
              {/* Parents Role */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-6 lg:p-8 rounded-2xl animate-slide-left animate-delay-200 hover-lift">
                <div className="text-center mb-4 sm:mb-6">
                  <Heart className="mx-auto mb-3 sm:mb-4 text-blue-600 dark:text-blue-400 animate-pulse-gentle" size={40} />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Peran Orang Tua</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg animate-scale-in animate-delay-400 hover-scale">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">🏠 Fondasi Rumah</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Rumah harus menjadi tempat teraman bagi anak untuk bercerita tanpa takut dihakimi. 
                      Orang tua adalah garis pertahanan pertama dalam melindungi kesehatan mental anak.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg animate-scale-in animate-delay-500 hover-scale">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">👂 Mendengar Aktif</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Terutama di jenjang SD dan SMP, anak sangat membutuhkan validasi emosional. 
                      Mendengarkan dengan empati lebih penting daripada langsung memberikan solusi.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg animate-scale-in animate-delay-700 hover-scale">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">🛡️ Advokasi Anak</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Ketika sistem sekolah gagal, orang tua harus menjadi suara anak. 
                      Jangan ragu untuk mengambil tindakan tegas jika anak mengalami bullying.
                    </p>
                  </div>
                </div>
              </div>

              {/* Teachers Role */}
              <div className="bg-green-50 dark:bg-green-900/20 p-4 sm:p-6 lg:p-8 rounded-2xl animate-slide-right animate-delay-300 hover-lift">
                <div className="text-center mb-4 sm:mb-6">
                  <BookOpen className="mx-auto mb-3 sm:mb-4 text-green-600 dark:text-green-400 animate-pulse-gentle" size={40} />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Peran Guru</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg animate-scale-in animate-delay-500 hover-scale">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">👁️ Observasi Sensitif</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Guru harus dilatih untuk mengenali perubahan perilaku siswa. 
                      Anak yang tiba-tiba menjadi pendiam adalah red flag yang harus ditindaklanjuti.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg animate-scale-in animate-delay-700 hover-scale">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">🌱 Lingkungan Inklusif</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Menciptakan kelas yang aman bagi semua siswa, di mana perbedaan dihargai 
                      dan setiap anak merasa memiliki tempat yang sama.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 rounded-lg animate-scale-in animate-delay-1000 hover-scale">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">⚡ Respons Cepat</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Ketika ada laporan bullying, respons harus cepat dan komprehensif. 
                      Tidak boleh ada toleransi untuk perilaku yang merugikan siswa lain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Period */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 sm:p-6 lg:p-8 rounded-2xl animate-scale-in animate-delay-1000 hover-glow">
              <div className="text-center">
                <Target className="mx-auto mb-3 sm:mb-4 animate-rotate-gentle" size={40} />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Periode Kritis: SD dan SMP</h3>
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Jenjang SD dan SMP adalah masa paling kritis dalam pembentukan karakter dan kepercayaan diri anak. 
                  Pengalaman bullying di masa ini dapat meninggalkan trauma seumur hidup dan mempengaruhi 
                  perkembangan sosial-emosional mereka di masa depan.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                  <div className="bg-white/20 p-3 sm:p-4 rounded-lg animate-scale-in animate-delay-1000">
                    <div className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 animate-bounce-gentle">6-12 tahun</div>
                    <p className="text-xs sm:text-sm">Pembentukan konsep diri</p>
                  </div>
                  <div className="bg-white/20 p-3 sm:p-4 rounded-lg animate-scale-in animate-delay-1000">
                    <div className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 animate-bounce-gentle">13-15 tahun</div>
                    <p className="text-xs sm:text-sm">Pencarian identitas</p>
                  </div>
                  <div className="bg-white/20 p-3 sm:p-4 rounded-lg animate-scale-in animate-delay-1000">
                    <div className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 animate-bounce-gentle">Seumur hidup</div>
                    <p className="text-xs sm:text-sm">Dampak trauma bullying</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution: CerdasBudi */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Lightbulb className="mx-auto mb-4 sm:mb-6 text-yellow-500 animate-bounce-gentle" size={48} />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 animate-slide-down">
                Lahirnya Solusi: CerdasBudi
              </h2>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl animate-scale-in animate-delay-300 hover-lift">
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-center font-medium text-blue-600 dark:text-blue-400">
                  "Jika sistem gagal melindungi mereka yang membutuhkan, 
                  maka kita harus menciptakan alternatif yang bisa diandalkan."
                </p>
                
                <p className="mb-4 sm:mb-6 animate-slide-up animate-delay-500 text-sm sm:text-base">
                  Dari pengalaman pribadi dan observasi selama bertahun-tahun, saya menyadari bahwa 
                  banyak anak yang menjadi korban bullying tidak memiliki tempat yang aman untuk bercerita. 
                  Mereka takut tidak dipercaya, dihakimi, atau malah disalahkan.
                </p>

                <p className="mb-4 sm:mb-6 animate-slide-up animate-delay-700 text-sm sm:text-base">
                  <strong className="text-purple-600 dark:text-purple-400">CerdasBudi</strong> diciptakan sebagai respons terhadap 
                  kegagalan sistem yang saya saksikan. Ini adalah upaya untuk memberikan setiap anak 
                  akses ke dukungan emosional yang mereka butuhkan, kapan saja dan di mana saja, 
                  tanpa takut dihakimi atau diabaikan.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 sm:p-6 rounded-xl mt-6 sm:mt-8 animate-scale-in animate-delay-1000">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center">
                    Visi CerdasBudi
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2 sm:gap-3 animate-slide-left animate-delay-1000">
                      <Shield className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm sm:text-base">Menjadi tempat aman pertama bagi anak yang mengalami bullying</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3 animate-slide-left animate-delay-1000">
                      <Heart className="text-red-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm sm:text-base">Memberikan dukungan emosional tanpa menghakimi</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3 animate-slide-left animate-delay-1000">
                      <Users className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm sm:text-base">Membantu anak merasa tidak sendirian dalam perjuangan mereka</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3 animate-slide-left animate-delay-1000">
                      <MessageCircle className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm sm:text-base">Menjadi jembatan komunikasi antara anak, orang tua, dan profesional</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 animate-slide-down">
            Mari Bersama Ciptakan Perubahan
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-200 leading-relaxed px-4">
            Setiap anak berhak mendapatkan dukungan yang mereka butuhkan. 
            CerdasBudi adalah langkah pertama menuju sistem pendidikan yang lebih empati dan inklusif.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-bounce-gentle hover-lift">
              Coba CerdasBudi
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 animate-slide-up animate-delay-300 hover-lift">
              Bagikan Cerita Ini
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
