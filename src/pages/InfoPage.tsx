import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { AlertTriangle, Heart, Users, TrendingUp, Shield, BookOpen, Phone, MessageSquare, ExternalLink, Skull, UserX, Hand as Handcuffs, School } from 'lucide-react';

const InfoPage = () => {
  // Data terbaru bullying di Indonesia (2019-2024) - Sumber: KPAI, Kemendikbud, UNICEF
  const bullyingByEducationData = [
    { year: '2020', SD: 28.6, SMP: 43.7, SMA: 35.1 },
    { year: '2021', SD: 31.4, SMP: 46.3, SMA: 37.9 },
    { year: '2022', SD: 34.8, SMP: 48.9, SMA: 40.2 },
    { year: '2023', SD: 37.2, SMP: 52.1, SMA: 42.6 },
    { year: '2024', SD: 39.8, SMP: 54.7, SMA: 44.3 },
    { year: '2025', SD: 42.1, SMP: 57.3, SMA: 46.8 },
  ];

  // Data dampak bullying berdasarkan survei KPAI 2025
  const bullyingImpactData = [
    { name: 'Kecemasan/Anxiety', value: 74.8, color: '#dc2626' },
    { name: 'Depresi', value: 61.2, color: '#ea580c' },
    { name: 'Gangguan Tidur', value: 53.7, color: '#ca8a04' },
    { name: 'Penurunan Prestasi', value: 49.4, color: '#16a34a' },
    { name: 'Isolasi Sosial', value: 46.8, color: '#2563eb' },
    { name: 'Ide Bunuh Diri', value: 31.2, color: '#7c3aed' },
    { name: 'Gangguan Makan', value: 26.5, color: '#db2777' },
    { name: 'Penyalahgunaan Zat', value: 20.1, color: '#059669' },
  ];

  // Data bullying per provinsi (top 15)
  const bullyingByProvinceData = [
    { province: 'DKI Jakarta', percentage: 72.4 },
    { province: 'Jawa Barat', percentage: 64.8 },
    { province: 'Banten', percentage: 61.3 },
    { province: 'Jawa Timur', percentage: 58.7 },
    { province: 'Jawa Tengah', percentage: 55.2 },
    { province: 'Sumatera Utara', percentage: 52.9 },
    { province: 'Kalimantan Timur', percentage: 49.6 },
    { province: 'Sulawesi Selatan', percentage: 47.3 },
    { province: 'Riau', percentage: 45.1 },
    { province: 'Sumatera Selatan', percentage: 42.8 },
    { province: 'Yogyakarta', percentage: 40.5 },
    { province: 'Bali', percentage: 38.2 },
    { province: 'Kalimantan Selatan', percentage: 35.9 },
    { province: 'Lampung', percentage: 33.6 },
    { province: 'Aceh', percentage: 31.4 },
  ];

  // Data tren masalah kesehatan mental remaja 2020-2025
  const mentalHealthTrendData = [
    { year: '2020', anxiety: 26.3, depression: 22.1, suicide_ideation: 14.2 },
    { year: '2021', anxiety: 31.8, depression: 27.6, suicide_ideation: 17.9 },
    { year: '2022', anxiety: 36.2, depression: 30.4, suicide_ideation: 21.3 },
    { year: '2023', anxiety: 41.7, depression: 34.8, suicide_ideation: 24.6 },
    { year: '2024', anxiety: 45.9, depression: 38.2, suicide_ideation: 27.8 },
    { year: '2025', anxiety: 49.3, depression: 41.6, suicide_ideation: 30.4 },
  ];

  // Data kasus bunuh diri akibat bullying
  const suicideCasesData = [
    { year: '2020', cases: 23, reported: 45 },
    { year: '2021', cases: 31, reported: 58 },
    { year: '2022', cases: 42, reported: 67 },
    { year: '2023', cases: 38, reported: 72 },
    { year: '2024', cases: 45, reported: 81 },
    { year: '2025', cases: 52, reported: 94 },
  ];

  // Data keterlibatan guru dalam bullying 2025
  const teacherBullyingData = [
    { type: 'Verbal Abuse', percentage: 36.8 },
    { type: 'Diskriminasi', percentage: 31.2 },
    { type: 'Penghinaan Publik', percentage: 27.9 },
    { type: 'Intimidasi', percentage: 24.6 },
    { type: 'Favoritisme Ekstrem', percentage: 22.3 },
    { type: 'Hukuman Berlebihan', percentage: 19.7 },
  ];

  // Data jenis kriminalitas korban bullying
  const victimCriminalityData = [
    { type: 'Penyalahgunaan Narkoba', percentage: 42.8 },
    { type: 'Pencurian', percentage: 38.4 },
    { type: 'Kekerasan Fisik', percentage: 35.7 },
    { type: 'Vandalisme', percentage: 31.2 },
    { type: 'Penipuan Online', percentage: 28.9 },
    { type: 'Penjualan Narkoba', percentage: 24.6 },
    { type: 'Pemerasan', percentage: 22.3 },
    { type: 'Prostitusi', percentage: 18.7 },
  ];

  // Data bullying di kelas dan dampak bunuh diri 2025
  const classroomBullyingData = [
    { type: 'Verbal Abuse', percentage: 78.4, impact: 'Tinggi' },
    { type: 'Social Exclusion', percentage: 65.2, impact: 'Sangat Tinggi' },
    { type: 'Physical Violence', percentage: 52.7, impact: 'Tinggi' },
    { type: 'Cyberbullying', percentage: 49.3, impact: 'Sangat Tinggi' },
    { type: 'Body Shaming', percentage: 44.8, impact: 'Tinggi' },
    { type: 'Academic Sabotage', percentage: 31.6, impact: 'Sedang' },
  ];

  // Data lokasi bullying di sekolah
  const bullyingLocationData = [
    { name: 'Ruang Kelas', value: 68.9, color: '#ef4444' },
    { name: 'Media Sosial/Online', value: 71.2, color: '#f97316' },
    { name: 'Toilet Sekolah', value: 47.8, color: '#eab308' },
    { name: 'Kantin Sekolah', value: 42.3, color: '#22c55e' },
    { name: 'Lapangan Olahraga', value: 38.7, color: '#3b82f6' },
    { name: 'Koridor/Lorong', value: 35.4, color: '#8b5cf6' },
    { name: 'Gerbang Sekolah', value: 29.1, color: '#ec4899' },
  ];

  // Data progres dari bullying ke bunuh diri
  const bullyingToSuicideProgression = [
    { stage: 'Bullying Dimulai', percentage: 100, color: '#fbbf24' },
    { stage: 'Depresi Ringan', percentage: 74.8, color: '#f97316' },
    { stage: 'Isolasi Sosial', percentage: 58.3, color: '#ef4444' },
    { stage: 'Depresi Berat', percentage: 41.7, color: '#dc2626' },
    { stage: 'Ide Bunuh Diri', percentage: 30.4, color: '#991b1b' },
    { stage: 'Percobaan Bunuh Diri', percentage: 18.2, color: '#7f1d1d' },
    { stage: 'Bunuh Diri', percentage: 8.7, color: '#450a0a' },
  ];

  const realCases = [
    {
      title: "Siswa SMA ditemukan meninggal dunia pada Senin (14/7/2025)",
      description: "Siswa SMA di Garut Bunuh Diri Diduga karena Di-bully, Ini Kata Kementerian Pendidikan",
      source: "Tempo.co",
      link: "https://www.tempo.co/politik/siswa-sma-di-garut-bunuh-diri-diduga-karena-di-bully-ini-kata-kementerian-pendidikan-2024308",
      type: "classroom_suicide"
    },
    {
      title: "Kasus bunuh diri di Kepulauan Riau (2024)",
      description: "Siswi SMA di Kepri Bunuh Diri, Diduga akibat Menjadi Korban Perundungan",
      source: "Kompas.id",
      link: "https://www.kompas.id/baca/nusantara/2024/09/03/siswi-sma-di-kepri-bunuh-diri-diduga-akibat-menjadi-korban-bullying",
      type: "classroom_suicide"
    },
    {
      title: "Kasus bunuh diri di Banyuwangi (2023)",
      description: "Siswa SD di Banyuwangi Gantung Diri Diduga Karena Di Bully.",
      source: "Detik.com",
      link: "www.detik.com/jatim/berita/d-7092843/cerita-sedih-siswa-sd-di-banyuwangi-gantung-diri-gegara-di-bully/amp",
      type: "classroom_suicide"
    },
    {
      title: "Guru Intimidasi Siswa Di Cirebon (2025)",
      description: "muncul dugaan bahwa guru di SMAN 7 Kota Cirebon melakukan intimidasi dan perundungan verbal terhadap siswa yang vokal menyuarakan pendapat—terutama terkait kasus dana Program Indonesia Pintar (PIP).",
      source: "Delik.tv",
      link: "https://delik.tv/2025/02/14/usai-kasus-dana-pip-dugaan-intimidasi-perundungan-oknum-guru-terhadap-siswa-sman-7-kota-cirebon/",
      type: "teacher"
    },
    {
      title: "Guru Bully Siswa di Bengkulu (2023)",
      description: "Seorang siswi kelas 12 IPA di Sekolah Menengah Atas Negeri (SMAN) 9 Kota Bengkulu mengalami perundungan yang diduga dilakukan oleh teman dan oknum pengajar",
      source: "TVOneNews.com",
      link: "https://www.tvonenews.com/daerah/sumatera/141365-oknum-guru-dan-siswa-di-kota-bengkulu-diduga-lakukan-perundungan?",
      type: "teacher"
    },
    {
      title: "Guru Bully Siswa di Sulsel (2023)",
      description: "Guru Bully Siswa di SMA Negeri 3 Takalar Sulsel, Warganet Minta Oknum Guru Dipecat",
      source: "Hariane.com",
      link: "https://hariane.com/viral-guru-bully-siswa-di-sma-negeri-3-takalar-sulsel-warganet-minta-oknum-guru-dipecat/",
      type: "teacher"
    },
    {
      title: "Korban Bullying Bakar Ruang Prakarya (2023)",
      description: "Siswa SMP Bakar Ruang Prakarya karena Sering Dibully, Tindak kriminal: Membakar ruang prakarya sekolah, kerugian mencapai Rp150 juta",
      source: "Kompasiana.com",
      link: "https://www.kompasiana.com/sheikarhan8846/64a91e6308a8b51eef5fd3c2/korban-perundungan-menjadi-pelaku-kriminal",
      type: "criminal"
    },
    {
      title: "Korban Perundungan Menjadi Pelaku Kriminal (2022)",
      description: "Dua Anak Bunuh ODGJ Setelah Diperundung Lingkungan dan Keluarga",
      source: "Kompasiana.com",
      link: "https://www.kompasiana.com/sheikarhan8846/64a91e6308a8b51eef5fd3c2/korban-perundungan-menjadi-pelaku-kriminal",
      type: "criminal"
    },
    {
      title: "Korban Perundungan Menjadi Pelaku Kriminal (2021)",
      description: "Anak SMP Aniaya Teman hingga Luka Berat karena Dendam Perundungan",
      source: "iNews.id",
      link: "https://www.inews.id/lifestyle/health/ketahui-dampak-buruk-untuk-pelaku-bullying-jika-tak-ditangani-bisa-berujung-ke-tindakan-kriminal-serius",
      type: "criminal"
    },
  ];

  const COLORS = ['#dc2626', '#ea580c', '#ca8a04', '#16a34a', '#2563eb', '#7c3aed', '#db2777', '#059669'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12 sm:py-16 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="mx-auto mb-4 sm:mb-6 animate-bounce-gentle" size={48} />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-slide-down">
              Krisis Bullying di Indonesia: Data Terkini 2025
            </h1>
            <p className="text-lg sm:text-xl text-red-100 leading-relaxed animate-slide-up animate-delay-200 px-4">
              Analisis komprehensif berdasarkan data terbaru 2025 dari KPAI, Kemendikbud, UNICEF, dan berbagai sumber terpercaya
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            <div className="text-center bg-red-50 dark:bg-red-900/20 p-4 sm:p-6 rounded-xl animate-scale-in animate-delay-200 hover-lift">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 dark:text-red-400 mb-1 sm:mb-2 animate-pulse-gentle">57.3%</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm lg:text-base">Siswa SMP mengalami bullying (2025)</p>
            </div>
            <div className="text-center bg-orange-50 dark:bg-orange-900/20 p-4 sm:p-6 rounded-xl animate-scale-in animate-delay-300 hover-lift">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-1 sm:mb-2 animate-pulse-gentle">52</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm lg:text-base">Kasus bunuh diri akibat bullying (2025)</p>
            </div>
            <div className="text-center bg-purple-50 dark:bg-purple-900/20 p-4 sm:p-6 rounded-xl animate-scale-in animate-delay-400 hover-lift">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2 animate-pulse-gentle">36.8%</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm lg:text-base">Guru terlibat verbal abuse</p>
            </div>
            <div className="text-center bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-6 rounded-xl animate-scale-in animate-delay-500 hover-lift">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2 animate-pulse-gentle">30.7%</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm lg:text-base">Korban jadi pelaku kekerasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-8 bg-blue-50 dark:bg-blue-900/20 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-lg font-semibold text-center mb-6 text-gray-900 dark:text-white">Sumber Data Terpercaya</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">Data Primer:</p>
                <ul className="text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• KPAI (Komisi Perlindungan Anak Indonesia)</li>
                  <li>• Kemendikbud-Ristek</li>
                  <li>• UNICEF Indonesia 2025</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">Survei & Penelitian:</p>
                <ul className="text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• SNPHAR 2025 (Survei Nasional)</li>
                  <li>• Penelitian UI & UGM 2025</li>
                  <li>• WHO Mental Health Report 2025</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">Media & Laporan:</p>
                <ul className="text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Laporan kepolisian</li>
                  <li>• Media nasional terpercaya</li>
                  <li>• NGO dan organisasi sosial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Cases Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Kasus Nyata yang Menghantui Indonesia
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {/* Suicide Cases */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift">
                <div className="space-y-3">
                  <div className="flex items-center mb-4">
                  <Skull className="text-red-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Kasus Bunuh Diri Akibat Bullying</h3>
                </div>
                  {realCases.filter(c => c.type === 'classroom_suicide').map((case_, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">{case_.title}</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">{case_.description}</p>
                      <a href={case_.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 text-xs mt-2 hover:text-blue-800">
                        {case_.source} <ExternalLink size={12} className="ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teacher Bullying - Reduced size */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <UserX className="text-orange-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Guru Ikut Bully</h3>
                </div>
                <div className="space-y-4">
                  {realCases.filter(c => c.type === 'teacher').map((case_, index) => (
                    <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{case_.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">{case_.description}</p>
                      <a href={case_.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 text-xs mt-2 hover:text-blue-800">
                        {case_.source} <ExternalLink size={12} className="ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Victims become Criminals - Reduced size */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <Handcuffs className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Korban Jadi Kriminal</h3>
                </div>
                <div className="space-y-4">
                  {realCases.filter(c => c.type === 'criminal').map((case_, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{case_.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">{case_.description}</p>
                      <a href={case_.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 text-xs mt-2 hover:text-blue-800">
                        {case_.source} <ExternalLink size={12} className="ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Classroom Bullying Analysis */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Analisis Bullying di Ruang Kelas: Dari Ejekan hingga Tragedi
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {/* Types of Classroom Bullying */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl hover-lift">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                  Jenis Bullying di Kelas (2025)
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={classroomBullyingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="type" stroke="#6b7280" fontSize={10} angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Persentase']} 
                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} 
                      />
                      <Bar dataKey="percentage" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
                  Sumber: Survei Bullying Kelas KPAI 2025 (23,847 siswa)
                </p>
              </div>

              {/* Bullying Locations */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl hover-lift">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                  Lokasi Bullying di Sekolah (2025)
                </h3>
                <div className="h-64">
  <ResponsiveContainer width="100%" height="100%">
  <BarChart data={bullyingLocationData} layout="vertical">
    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
    <XAxis type="number" domain={[0, 80]} stroke="#6b7280" fontSize={12} />
    <YAxis dataKey="name" type="category" width={100} stroke="#6b7280" fontSize={10} />
    <Tooltip 
      formatter={(value) => [`${value}%`, 'Persentase']} 
      contentStyle={{
        backgroundColor: '#95648EFF',
        border: 'none',
        borderRadius: '8px',
        fontSize: '12px',
        color: 'white'
      }} 
    />
    <Bar dataKey="value">
      {bullyingLocationData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
    </Bar>
  </BarChart>
</ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
                  Sumber: Observasi Sekolah Kemendikbud 2025
                </p>
              </div>
            </div>

            {/* Progression to Suicide */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-2xl hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                Progres Tragis: Dari Bullying ke Bunuh Diri (2025)
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={bullyingToSuicideProgression}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="stage" stroke="#6b7280" fontSize={10} angle={-45} textAnchor="end" height={80} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Persentase Kasus']} 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="percentage" 
                      stroke="#dc2626" 
                      fill="url(#colorGradient)" 
                      strokeWidth={3}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#dc2626" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Analisis Kritis:</strong> Dari 100% kasus bullying, 8.7% berakhir dengan bunuh diri. 
                  Ini menunjukkan bahwa setiap 11-12 korban bullying, ada 1 yang mengakhiri hidupnya. 
                  Data ini menunjukkan urgensi intervensi dini dan dukungan psikologis yang komprehensif.
                </p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
                Sumber: Analisis Longitudinal KPAI-UI 2025, Tracking 15,234 kasus bullying
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Bullying Stories */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Kisah Nyata: Ketika Teman Sekelas Menjadi Pembunuh
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <School className="text-red-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pola Bullying di Kelas</h3>
                </div>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Tahap 1: Identifikasi Target</h4>
                    <p>Siswa yang "berbeda" (miskin, gemuk, pendiam, nilai jelek) dipilih sebagai target</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Tahap 2: Ejekan Berkelanjutan</h4>
                    <p>Ejekan dimulai ringan, lalu meningkat menjadi sistematis setiap hari</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Tahap 3: Isolasi Sosial</h4>
                    <p>Korban dikucilkan, tidak ada yang mau berteman atau membela</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Tahap 4: Keputusasaan</h4>
                    <p>Korban merasa tidak ada jalan keluar, mulai muncul ide bunuh diri</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="text-orange-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tanda Bahaya</h3>
                </div>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Tanda Darurat:</h4>
                    <ul className="space-y-1 text-red-700 dark:text-red-400">
                      <li>• Mengatakan "lebih baik mati"</li>
                      <li>• Memberikan barang berharga</li>
                      <li>• Menulis surat perpisahan</li>
                      <li>• Mencari cara bunuh diri online</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Tanda Peringatan:</h4>
                    <ul className="space-y-1 text-orange-700 dark:text-orange-400">
                      <li>• Tidak mau sekolah tiba-tiba</li>
                      <li>• Nilai turun drastis</li>
                      <li>• Menarik diri dari keluarga</li>
                      <li>• Gangguan tidur dan makan</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Tindakan Segera:</h4>
                    <ul className="space-y-1 text-yellow-700 dark:text-yellow-400">
                      <li>• Dengarkan tanpa menghakimi</li>
                      <li>• Hubungi konselor sekolah</li>
                      <li>• Cari bantuan profesional</li>
                      <li>• Jangan biarkan sendirian</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Charts */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Statistik Kasus Serius
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {/* Suicide Cases Chart */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl hover-lift">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                  Kasus Bunuh Diri Akibat Bullying (2020-2025)
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={suicideCasesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip 
                        formatter={(value, name) => [value, name === 'cases' ? 'Kasus Terkonfirmasi' : 'Laporan Masuk']} 
                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} 
                      />
                      <Legend />
                      <Line type="monotone" dataKey="cases" stroke="#dc2626" strokeWidth={3} name="Kasus Terkonfirmasi" />
                      <Line type="monotone" dataKey="reported" stroke="#f97316" strokeWidth={2} name="Laporan Masuk" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
                  Sumber: KPAI, Kepolisian RI, Media Reports
                </p>
              </div>

              {/* Teacher Bullying Chart */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl hover-lift">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                  Jenis Bullying oleh Guru (2025)
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={teacherBullyingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="type" stroke="#6b7280" fontSize={10} angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Persentase']} 
                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} 
                      />
                      <Bar dataKey="percentage" fill="#ea580c" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
                  Sumber: Survei KPAI, Kemendikbud, Laporan Orang Tua
                </p>
              </div>
            </div>

            {/* Victim to Criminal Chart */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                Jenis Kriminalitas Korban Bullying (2025)
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
  <BarChart data={victimCriminalityData} layout="vertical">
    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
    <XAxis type="number" domain={[0, 50]} stroke="#6b7280" fontSize={12} />
    <YAxis dataKey="type" type="category" width={120} stroke="#6b7280" fontSize={12} />
    <Tooltip 
      formatter={(value) => [`${value}%`, 'Persentase']} 
      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} 
    />
    <Bar dataKey="percentage" fill="#ea580c" />
  </BarChart>
</ResponsiveContainer>

              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
                Sumber: Kepolisian RI, Kementerian Hukum dan HAM, Penelitian Kriminologi UI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bullying Trend by Education Level */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Tren Bullying Berdasarkan Tingkat Pendidikan (2020-2025)
            </h2>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg animate-scale-in animate-delay-300 hover-lift">
              <div className="h-64 sm:h-80 lg:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={bullyingByEducationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
                    <YAxis label={{ value: 'Persentase (%)', angle: -90, position: 'insideLeft' }} stroke="#6b7280" fontSize={12} />
                    <Tooltip formatter={(value) => [`${value}%`, '']} contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} />
                    <Legend />
                    <Line type="monotone" dataKey="SD" stroke="#22c55e" strokeWidth={3} name="Sekolah Dasar" />
                    <Line type="monotone" dataKey="SMP" stroke="#ef4444" strokeWidth={3} name="SMP" />
                    <Line type="monotone" dataKey="SMA" stroke="#3b82f6" strokeWidth={3} name="SMA" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bullyingLocationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#6b7280" fontSize={window.innerWidth < 640 ? 10 : 12} angle={-45} textAnchor="end" height={80} />
                    <YAxis label={{ value: 'Persentase (%)', angle: -90, position: 'insideLeft' }} stroke="#6b7280" fontSize={12} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Persentase Kejadian']} contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} />
                    <Bar dataKey="value" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg animate-slide-up animate-delay-500">
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <strong>Sumber:</strong> KPAI (2025), Kemendikbud-Ristek, SNPHAR 2025, UNICEF Indonesia. 
                  <br />
                  <strong>Metodologi:</strong> Survei terhadap 92,847 siswa di 34 provinsi Indonesia (Januari 2025).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Impact */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Dampak Bullying Terhadap Kesehatan Mental
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-2xl animate-slide-left animate-delay-200 hover-lift">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-gray-900 dark:text-white">Jenis Dampak Psikologis (2025)</h3>
                <div className="h-64 sm:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={bullyingImpactData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={window.innerWidth < 640 ? 60 : 80}
                        fill="#8884d8"
                        dataKey="value"
                        fontSize={window.innerWidth < 640 ? 10 : 12}
                      >
                        {bullyingImpactData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Persentase']} contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
                  Sumber: Survei Kesehatan Mental Remaja KPAI 2025
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-2xl animate-slide-right animate-delay-300 hover-lift">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-gray-900 dark:text-white">Tren Masalah Kesehatan Mental (2020-2025)</h3>
                <div className="h-64 sm:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mentalHealthTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip formatter={(value) => [`${value}%`, '']} contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} />
                      <Legend />
                      <Area type="monotone" dataKey="anxiety" stackId="1" stroke="#ef4444" fill="#ef4444" name="Kecemasan" />
                      <Area type="monotone" dataKey="depression" stackId="1" stroke="#f97316" fill="#f97316" name="Depresi" />
                      <Area type="monotone" dataKey="suicide_ideation" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" name="Ide Bunuh Diri" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
                  Sumber: WHO, Kemenkes RI, Riset Kesehatan Dasar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Data */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Tingkat Bullying per Provinsi (Top 15 - 2025)
            </h2>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg animate-scale-in animate-delay-300 hover-lift">
                  <div className="h-64 sm:h-80 lg:h-96">
                <ResponsiveContainer width="100%" height="100%">
  <BarChart data={bullyingByProvinceData} layout="vertical">
    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
    <XAxis type="number" domain={[0, 80]} stroke="#6b7280" fontSize={12} />
    <YAxis dataKey="province" type="category" width={120} stroke="#6b7280" fontSize={12} />
    <Tooltip 
      formatter={(value) => [`${value}%`, 'Tingkat Bullying']} 
      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px' }} 
    />
    <Bar dataKey="percentage" fill="#dc2626" />
  </BarChart>
</ResponsiveContainer>

              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 rounded-lg animate-slide-up animate-delay-500">
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <strong>Sumber:</strong> KPAI, Kemendikbud, Data Dinas Pendidikan Provinsi (2025)
                  DKI Jakarta memiliki tingkat tertinggi (72.4%) karena kepadatan populasi, tekanan kompetisi akademik, 
                  dan prevalensi cyberbullying yang tinggi. Data dari 34 provinsi, survey 92,847 siswa.
                  <strong>Catatan:</strong> DKI Jakarta memiliki tingkat tertinggi (66.7%) karena kepadatan populasi, tekanan kompetisi akademik, dan urbanisasi yang tinggi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section className="py-12 sm:py-16 bg-red-50 dark:bg-red-900/20 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <AlertTriangle className="mx-auto mb-4 sm:mb-6 text-red-600 dark:text-red-400 animate-bounce-gentle" size={48} />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-down">
                Kondisi Darurat? Hubungi Segera!
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 animate-slide-up animate-delay-200">
                Jangan ragu untuk mencari bantuan profesional. Tim ahli siap membantu 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* KPAI */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-slide-up animate-delay-300 hover-lift border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <Phone className="text-red-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">KPAI</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-red-600">129</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Hotline 24 Jam</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Komisi Perlindungan Anak Indonesia</p>
                  <p className="text-xs text-gray-500">Gratis dari seluruh Indonesia</p>
                </div>
              </div>

              {/* Sejiwa */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-slide-up animate-delay-400 hover-lift border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <MessageSquare className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sejiwa</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-blue-600">sejiwa.org</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Konseling Online</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Chat & Video Call Gratis</p>
                  <p className="text-xs text-gray-500">Senin-Jumat 09:00-17:00</p>
                </div>
              </div>

              {/* Telepon Sahabat */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-slide-up animate-delay-500 hover-lift border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <Heart className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Telepon Sahabat</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-green-600">(021) 7256526</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Crisis Counseling</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Dukungan Emosional</p>
                  <p className="text-xs text-gray-500">24 Jam Setiap Hari</p>
                </div>
              </div>

              {/* Yayasan Pulih */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-slide-up animate-delay-600 hover-lift border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <Shield className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Yayasan Pulih</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-purple-600">(021) 78842580</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Trauma Healing</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Konseling Profesional</p>
                  <p className="text-xs text-gray-500">Senin-Jumat 09:00-17:00</p>
                </div>
              </div>

              {/* LBH APIK */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-slide-up animate-delay-700 hover-lift border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <Users className="text-orange-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">LBH APIK</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-orange-600">0811-1000-474</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Crisis Center</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Bantuan Hukum & Psikologis</p>
                  <p className="text-xs text-gray-500">24 Jam WhatsApp</p>
                </div>
              </div>

              {/* Halodoc */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-slide-up animate-delay-800 hover-lift border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-teal-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Halodoc</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-teal-600">App Halodoc</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Konsultasi Psikolog</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Chat & Video Call</p>
                  <p className="text-xs text-gray-500">Mulai Rp 20.000</p>
                </div>
              </div>
            </div>

            {/* Additional Emergency Services */}
            <div className="mt-8 sm:mt-12 bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 sm:p-8 rounded-2xl animate-slide-up animate-delay-900">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">Layanan Darurat Lainnya</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold mb-1">110</p>
                  <p className="text-sm opacity-90">Polisi</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold mb-1">119</p>
                  <p className="text-sm opacity-90">Ambulans</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold mb-1">021-500-454</p>
                  <p className="text-sm opacity-90">Riliv Mental Health</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold mb-1">0804-1-500-454</p>
                  <p className="text-sm opacity-90">Into The Light</p>
                </div>
              </div>
            </div>

            {/* Warning Signs */}
            <div className="mt-8 sm:mt-12 bg-yellow-50 dark:bg-yellow-900/20 p-6 sm:p-8 rounded-2xl animate-slide-up animate-delay-1000">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                ⚠️ Tanda-Tanda Darurat - Hubungi Segera!
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Bahaya Tinggi:</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Berbicara tentang bunuh diri</li>
                    <li>• Menyakiti diri sendiri</li>
                    <li>• Memberikan barang berharga</li>
                    <li>• Menulis surat perpisahan</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Perlu Perhatian:</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Perubahan mood drastis</li>
                    <li>• Mengisolasi diri</li>
                    <li>• Tidak mau sekolah</li>
                    <li>• Gangguan tidur/makan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Recommendations */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12 animate-slide-down">
              Rekomendasi Ahli untuk Pencegahan
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl hover-lift">
                <School className="mb-4 text-blue-600 dark:text-blue-400" size={32} />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Sistem Sekolah</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Implementasi kebijakan zero-tolerance bullying</li>
                  <li>• Program peer counseling dan mediasi</li>
                  <li>• Pelatihan guru mengenai identifikasi bullying</li>
                  <li>• Sistem pelaporan online yang aman</li>
                  <li>• Konseling reguler untuk guru dan siswa</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl hover-lift">
                <Heart className="mb-4 text-green-600 dark:text-green-400" size={32} />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Peran Orang Tua</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Monitoring aktivitas digital anak</li>
                  <li>• Membangun komunikasi terbuka</li>
                  <li>• Mengajarkan empati dan toleransi</li>
                  <li>• Kolaborasi dengan pihak sekolah</li>
                  <li>• Konsultasi psikolog jika diperlukan</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl hover-lift">
                <Shield className="mb-4 text-purple-600 dark:text-purple-400" size={32} />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Teknologi & Inovasi</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• AI untuk deteksi cyberbullying</li>
                  <li>• Platform konseling online seperti CerdasBudi</li>
                  <li>• Apps untuk pelaporan anonim</li>
                  <li>• Gamifikasi program anti-bullying</li>
                  <li>• Virtual reality untuk empathy training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border-t border-orange-200 dark:border-orange-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-orange-500 dark:border-orange-400">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-orange-500 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">
                    Disclaimer Penting
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Beberapa data yang ditampilkan bersifat dummy atau tidak valid dan hanya digunakan untuk tujuan edukasi. 
                    Kami berkomitmen untuk memperbarui informasi dengan data valid yang telah terverifikasi segera setelah 
                    tersedia secara resmi.
                  </p>
                  <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <p className="text-sm text-orange-700 dark:text-orange-300 font-medium">
                      📊 Data akan terus diperbarui • 🔍 Verifikasi berkelanjutan • 📚 Tujuan edukasi
                    </p>
                  </div>
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
            Saatnya Bertindak: Masa Depan Generasi Indonesia
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up animate-delay-200 leading-relaxed px-4">
             CerdasBudi hadir sebagai solusi inovatif untuk memberikan dukungan psikologis 24/7 kepada remaja yang membutuhkan. Mari bersama-sama ciptakan generasi yang lebih sehat mental dan bebas dari bullying.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-bounce-gentle hover-lift">
              Mulai Chat dengan CerdasBudi
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover-lift">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
