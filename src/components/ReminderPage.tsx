import React, { useState, useEffect } from 'react';
import { Heart, Star, Shield, Lightbulb, Smile, Trophy, Clock, Bell, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  content: string;
  fullContent: string;
  category: 'motivation' | 'inspiration' | 'self-love' | 'success';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  readTime: string;
}

const ReminderPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dailyStory, setDailyStory] = useState<Story | null>(null);
  const [reminderTime, setReminderTime] = useState<string>('09:00');
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [expandedStories, setExpandedStories] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'Semua', icon: Star, color: 'bg-purple-500' },
    { id: 'motivation', name: 'Motivasi', icon: Trophy, color: 'bg-blue-500' },
    { id: 'inspiration', name: 'Inspirasi', icon: Lightbulb, color: 'bg-yellow-500' },
    { id: 'self-love', name: 'Self Love', icon: Heart, color: 'bg-pink-500' },
    { id: 'success', name: 'Sukses', icon: Shield, color: 'bg-green-500' }
  ];

  const stories: Story[] = [
    {
      id: '1',
      title: 'Kamu Lebih Kuat dari yang Kamu Kira',
      content: 'Pernahkah kamu merasa down karena ucapan orang lain? Ingat, kekuatan sejati bukan dari tidak pernah jatuh, tapi dari bangkit setiap kali jatuh. Kamu sudah sejauh ini, dan itu membuktikan betapa kuatnya dirimu.',
      fullContent: `Pernahkah kamu merasa down karena ucapan orang lain? Ingat, kekuatan sejati bukan dari tidak pernah jatuh, tapi dari bangkit setiap kali jatuh. Kamu sudah sejauh ini, dan itu membuktikan betapa kuatnya dirimu.

Setiap tantangan yang kamu hadapi hari ini adalah batu loncatan untuk menjadi versi terbaik dari dirimu. Ketika seseorang mencoba menjatuhkanmu dengan kata-kata, itu sebenarnya menunjukkan bahwa mereka melihat potensi dalam dirimu yang bahkan kamu sendiri mungkin belum sadari.

Ingat, berlian terbentuk dari tekanan. Emas dimurnikan oleh api. Dan kamu? Kamu sedang dalam proses menjadi sesuatu yang luar biasa. Setiap air mata yang kamu tumpahkan, setiap malam yang kamu habiskan untuk merenung, setiap kali kamu merasa sendirian - semua itu adalah bagian dari perjalanan yang akan membuatmu menjadi pribadi yang lebih kuat dan bijaksana.

Percaya atau tidak, 10 tahun dari sekarang kamu akan bersyukur untuk semua yang terjadi hari ini. Karena semua ini akan menjadi cerita tentang bagaimana kamu berhasil mengatasi masa-masa sulit dan menjadi inspirasi bagi orang lain.

Jadi, angkat kepalamu tinggi-tinggi. Kamu warrior yang sedang dalam pelatihan, dan setiap hari adalah kesempatan untuk menjadi lebih kuat.`,
      category: 'motivation',
      icon: Trophy,
      color: 'bg-blue-500',
      readTime: '2 min'
    },
    {
      id: '2',
      title: 'Kamu Berharga Apa Adanya',
      content: 'Banyak orang mencoba membuatmu merasa tidak berharga. Tapi tahukah kamu? Nilai dirimu tidak ditentukan oleh pendapat orang lain. Kamu unik, kamu spesial, dan kamu memiliki sesuatu yang tidak dimiliki orang lain.',
      fullContent: `Banyak orang mencoba membuatmu merasa tidak berharga. Tapi tahukah kamu? Nilai dirimu tidak ditentukan oleh pendapat orang lain. Kamu unik, kamu spesial, dan kamu memiliki sesuatu yang tidak dimiliki orang lain.

Cintai dirimu sendiri terlebih dahulu, karena dari situlah kebahagiaan sejati dimulai. Seringkali kita mencari validasi dari orang lain, padahal yang paling penting adalah bagaimana kita melihat diri kita sendiri.

Kamu punya mata yang berbeda, cara berpikir yang berbeda, mimpi yang berbeda. Itulah yang membuatmu istimewa. Jangan pernah merasa perlu mengubah diri untuk menyenangkan orang lain. Karena orang yang tepat akan menerima dan mencintaimu apa adanya.

Setiap pagi, lihatlah cermin dan katakan "Aku berharga, aku dicintai, aku mampu." Mungkin terasa aneh di awal, tapi kata-kata memiliki kekuatan. Apa yang kamu ucapkan tentang dirimu sendiri akan menjadi kenyataan.

Ingat, kamu tidak perlu menjadi sempurna untuk berharga. Kamu sudah berharga sejak kamu lahir. Titik. Tidak ada yang bisa mengubah itu, tidak peduli apa yang mereka katakan atau lakukan.

Jadi mulai hari ini, belajarlah untuk menjadi sahabat terbaik bagi dirimu sendiri. Karena hubungan paling penting dalam hidupmu adalah hubungan dengan dirimu sendiri.`,
      category: 'self-love',
      icon: Heart,
      color: 'bg-pink-500',
      readTime: '3 min'
    },
    {
      id: '3',
      title: 'Dari Luka Menjadi Kekuatan',
      content: 'Seorang remaja bernama Sarah selalu di-bully karena penampilannya. Tapi instead of menyerah, dia menulis diary tentang perasaannya. Sekarang dia jadi penulis terkenal yang menginspirasi jutaan orang.',
      fullContent: `Seorang remaja bernama Sarah selalu di-bully karena penampilannya. Tapi instead of menyerah, dia menulis diary tentang perasaannya. Sekarang dia jadi penulis terkenal yang menginspirasi jutaan orang.

Lukamu hari ini bisa jadi kekuatan yang menginspirasi orang lain besok. Sarah memulai dengan menulis satu halaman setiap hari. Dia tulis tentang perasaannya, tentang mimpi-mimpinya, tentang bagaimana dia ingin dunia menjadi tempat yang lebih baik.

Awalnya, writing hanya cara untuk melepaskan emosi. Tapi seiring waktu, dia menyadari bahwa pengalaman pahitnya bisa membantu orang lain yang mengalami hal serupa. Dia mulai sharing ceritanya di blog, dan responnya luar biasa.

Ternyata, ada ribuan remaja lain yang merasakan hal yang sama. Mereka merasa tidak sendiri setelah membaca cerita Sarah. Perlahan, Sarah mulai mendapat undangan untuk berbicara di sekolah-sekolah, menulis buku, dan bahkan jadi konsultan anti-bullying.

Hari ini, Sarah punya jutaan followers yang menganggapnya sebagai inspirasi. Tapi yang paling penting, dia bahagia dengan dirinya sendiri. Dia berhasil mengubah luka menjadi kekuatan, rasa sakit menjadi purpose.

Lukamu juga punya potensi yang sama. Mungkin kamu akan jadi konselor, teacher, artist, atau activist. Yang pasti, pengalaman hari ini sedang mempersiapkanmu untuk sesuatu yang lebih besar.

Jadi jangan buang pengalaman pahit ini. Jadikan fuel untuk mimpi-mimpimu. Karena the best helpers adalah mereka yang pernah merasakan helpless.`,
      category: 'inspiration',
      icon: Lightbulb,
      color: 'bg-yellow-500',
      readTime: '4 min'
    },
    {
      id: '4',
      title: 'Percaya Diri Itu Proses',
      content: 'Percaya diri bukan tentang tidak pernah merasa takut, tapi tentang berani melangkah meski takut. Mulai dari hal kecil: tersenyum pada diri sendiri di cermin, mengucapkan afirmasi positif, atau melakukan satu hal yang membuatmu bangga hari ini.',
      fullContent: `Percaya diri bukan tentang tidak pernah merasa takut, tapi tentang berani melangkah meski takut. Mulai dari hal kecil: tersenyum pada diri sendiri di cermin, mengucapkan afirmasi positif, atau melakukan satu hal yang membuatmu bangga hari ini.

Percaya diri tumbuh dari tindakan kecil yang konsisten. Bukan dari satu momen besar, tapi dari hundreds of small moments di mana kamu memilih untuk percaya pada dirimu sendiri.

Hari ini, coba satu hal yang membuat kamu sedikit nervous. Mungkin menjawab pertanyaan di kelas, menyapa orang baru, atau posting something di social media. Setiap kali kamu melakukan sesuatu meski feeling scared, confidence muscles kamu akan menguat.

Jangan compare dirimu dengan orang lain. Kamu tidak tahu struggle apa yang mereka alami di belakang layar. Focus pada progressmu sendiri. Celebrate small wins. Kemarin kamu takut untuk speak up, hari ini kamu berhasil mengangkat tangan. That's growth!

Ingat, even the most confident people pernah merasa insecure. Bedanya, mereka belajar untuk tidak membiarkan insecurity itu menghentikan mereka. Mereka tetap action meski feeling scared.

Confidence bukan tentang being perfect. It's about being comfortable with your imperfections. It's about knowing that you're worthy of respect, love, and success - regardless of your flaws.

So start today. Look in the mirror and say "I believe in you" to yourself. Take one small step towards your dreams. And remember, every expert was once a beginner. Every confident person was once scared. The difference is they kept going.`,
      category: 'success',
      icon: Shield,
      color: 'bg-green-500',
      readTime: '3 min'
    },
    {
      id: '5',
      title: 'Kamu Tidak Sendiri',
      content: 'Rasanya seperti seluruh dunia melawan kamu? Ingat, ada jutaan orang di luar sana yang pernah merasakan hal yang sama. Kamu tidak sendiri dalam perjuangan ini. Setiap orang sukses pernah merasakan ditolak, diabaikan, atau di-bully.',
      fullContent: `Rasanya seperti seluruh dunia melawan kamu? Ingat, ada jutaan orang di luar sana yang pernah merasakan hal yang sama. Kamu tidak sendiri dalam perjuangan ini. Setiap orang sukses pernah merasakan ditolak, diabaikan, atau di-bully.

Yang membedakan adalah mereka memilih untuk tidak menyerah. Mereka menggunakan rejection sebagai motivation. Mereka prove kepada dunia bahwa mereka worthy of respect and success.

Oprah Winfrey pernah dipecat dari job pertamanya sebagai news anchor karena dianggap "too emotional." Sekarang dia salah satu media mogul terkaya di dunia. Stephen King's first novel ditolak 30 kali sebelum akhirnya dipublish. J.K. Rowling was a single mom on welfare ketika dia menulis Harry Potter.

Semua orang besar punya backstory tentang rejection, failure, dan moments di mana mereka merasa like giving up. Tapi mereka tidak give up. Dan that's what made them great.

Kamu juga punya greatness dalam dirimu. Mungkin kamu belum melihatnya, tapi others can see it. That's why some people try to dim your light. They're threatened by your potential.

Jadi ketika kamu merasa sendirian, ingat bahwa ada millions of people rooting for you. Ada orang-orang yang akan sangat proud ketika kamu succeed. Ada future version of yourself yang akan berterima kasih karena kamu tidak give up hari ini.

You're not alone. You're part of a community of fighters, dreamers, and survivors. And together, we're unstoppable.`,
      category: 'motivation',
      icon: Heart,
      color: 'bg-purple-500',
      readTime: '2 min'
    },
    {
      id: '6',
      title: 'Fokus pada Masa Depanmu',
      content: 'Mereka yang menyakitimu sekarang mungkin tidak akan ada dalam hidupmu 5 tahun lagi. Tapi kamu? Kamu akan tetap ada dengan semua mimpi dan tujuan yang ingin kamu capai. Jangan biarkan orang lain mengontrol masa depanmu.',
      fullContent: `Mereka yang menyakitimu sekarang mungkin tidak akan ada dalam hidupmu 5 tahun lagi. Tapi kamu? Kamu akan tetap ada dengan semua mimpi dan tujuan yang ingin kamu capai. Jangan biarkan orang lain mengontrol masa depanmu.

Fokus pada growth diri sendiri, bukan pada drama yang tidak penting. Setiap menit yang kamu habiskan untuk memikirkan haters adalah menit yang terbuang dari building your future.

Imagine dirimu 5 tahun dari sekarang. Kamu sudah graduate, mungkin sudah punya career yang kamu suka, sudah punya circle of friends yang supportive. Kamu sudah jadi versi terbaik dari dirimu. Sekarang look back - apakah orang-orang yang menyakitimu sekarang masih relevant? Probably not.

Mereka stuck di masa lalu, sementara kamu sudah move on ke level yang lebih tinggi. Mereka masih playing the same games, sementara kamu sudah playing in a different league.

So invest in yourself. Belajar skills baru, baca buku, develop hobbies, work on your dreams. Setiap hari, jadilah 1% better than yesterday. Dalam setahun, kamu akan jadi 365% better person.

Remember, the best revenge is massive success. When they're still gossiping about small things, kamu sudah achieving big things. When they're still trying to bring others down, kamu sudah lifting others up.

Your future is bright. Your potential is limitless. Don't let anyone convince you otherwise. Focus on your path, and let them worry about theirs.`,
      category: 'success',
      icon: Trophy,
      color: 'bg-indigo-500',
      readTime: '3 min'
    },
    {
      id: '7',
      title: 'Kebaikan Dimulai dari Diri Sendiri',
      content: 'Dunia sudah cukup keras, jadilah lembut pada diri sendiri. Berbicara pada diri sendiri dengan kata-kata yang baik. Treat yourself seperti kamu treat sahabat terbaik. Karena relationship paling penting dalam hidupmu adalah relationship dengan diri sendiri.',
      fullContent: `Dunia sudah cukup keras, jadilah lembut pada diri sendiri. Berbicara pada diri sendiri dengan kata-kata yang baik. Treat yourself seperti kamu treat sahabat terbaik. Karena relationship paling penting dalam hidupmu adalah relationship dengan diri sendiri.

Seringkali kita jadi critic paling keras bagi diri sendiri. Kita speak to ourselves dengan cara yang tidak akan pernah kita gunakan untuk berbicara dengan orang lain. Kita forgive others' mistakes tapi harsh pada mistake kita sendiri.

Mulai hari ini, practice self-compassion. Ketika kamu make mistake, jangan katakan "Aku stupid" tapi katakan "Aku belajar." Ketika kamu merasa down, jangan katakan "Aku payah" tapi katakan "Aku sedang struggling dan itu okay."

Treat yourself dengan kindness yang sama seperti yang kamu berikan pada best friend. Kalau best friend kamu sedih, kamu akan comfort mereka, bukan judge mereka. Kalau mereka fail, kamu akan encourage mereka, bukan put them down.

Do the same for yourself. Be your own best friend. Cheer for yourself. Celebrate your wins, no matter how small. Forgive your mistakes. Encourage yourself ketika things get tough.

Self-love bukan about being narcissistic. It's about having a healthy relationship dengan diri sendiri. It's about knowing your worth dan tidak membiarkan orang lain treat you badly.

Ketika kamu love yourself, kamu akan attract people yang love dan respect kamu. Ketika kamu treat yourself well, kamu akan set standards untuk bagaimana others should treat you.

So be kind to yourself today. Give yourself the love dan respect yang kamu deserve. Because you are worthy of all the good things in life.`,
      category: 'self-love',
      icon: Smile,
      color: 'bg-rose-500',
      readTime: '2 min'
    },
    {
      id: '8',
      title: 'Setiap Hari Adalah Kesempatan Baru',
      content: 'Hari ini mungkin berat, tapi besok adalah halaman baru. Setiap sunrise memberi kesempatan untuk memulai lagi, untuk menjadi lebih baik, untuk lebih bahagia. Jangan biarkan hari yang buruk menghancurkan harapanmu untuk hari yang lebih baik.',
      fullContent: `Hari ini mungkin berat, tapi besok adalah halaman baru. Setiap sunrise memberi kesempatan untuk memulai lagi, untuk menjadi lebih baik, untuk lebih bahagia. Jangan biarkan hari yang buruk menghancurkan harapanmu untuk hari yang lebih baik.

Tomorrow is a new day, full of new possibilities. Mungkin today kamu merasa hopeless, tapi tomorrow bisa jadi hari di mana everything changes. Mungkin kamu akan meet someone baru yang jadi friend. Mungkin kamu akan discover passion baru. Mungkin kamu akan get opportunity yang unexpected.

Life is full of surprises. Satu phone call, satu conversation, satu moment bisa mengubah everything. Jadi jangan give up sebelum kamu lihat apa yang tomorrow bawa.

Setiap malam sebelum tidur, set intention untuk besok. Katakan "Besok adalah fresh start. Besok aku akan try again. Besok aku akan jadi better version of myself." Dan setiap pagi, wake up dengan gratitude. Katakan "Thank you for another day. Thank you for another chance."

Remember, kamu sudah survive 100% of your worst days. That's a pretty good track record. So kamu pasti bisa survive dan thrive di hari-hari mendatang.

Jangan stuck di masa lalu. Jangan worry too much about future. Focus on today, tapi dengan hope untuk tomorrow. Take it one day at a time. One step at a time. One breath at a time.

And remember, every ending is a new beginning. Every sunset is followed by sunrise. Every winter is followed by spring. Your difficult season will pass, dan beautiful season akan datang.

Keep going. Keep believing. Keep hoping. Because your best days are still ahead of you.`,
      category: 'inspiration',
      icon: Lightbulb,
      color: 'bg-orange-500',
      readTime: '2 min'
    }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  useEffect(() => {
    // Set daily story (different each day)
    const today = new Date().getDate();
    const storyIndex = today % stories.length;
    setDailyStory(stories[storyIndex]);
  }, []);

  const handleReminderToggle = () => {
    setReminderEnabled(!reminderEnabled);
    if (!reminderEnabled) {
      // Here you would typically set up the notification
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification('Reminder Aktif!', {
              body: `Kamu akan mendapat reminder setiap hari jam ${reminderTime}`,
              icon: '/favicon.ico'
            });
          }
        });
      }
    }
  };

  const handleReadMore = (story: Story) => {
    setSelectedStory(story);
  };

  const handleBackToList = () => {
    setSelectedStory(null);
  };

  const toggleStoryExpansion = (storyId: string) => {
    const newExpanded = new Set(expandedStories);
    if (newExpanded.has(storyId)) {
      newExpanded.delete(storyId);
    } else {
      newExpanded.add(storyId);
    }
    setExpandedStories(newExpanded);
  };

  // Full story view
  if (selectedStory) {
    const IconComponent = selectedStory.icon;
    return (
      <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 shadow-sm z-10">
          <div className="flex items-center p-4">
            <button
              onClick={handleBackToList}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali</span>
            </button>
          </div>
        </div>

        {/* Story Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 ${selectedStory.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {selectedStory.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="capitalize">{selectedStory.category.replace('-', ' ')}</span>
                    <span>{selectedStory.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedStory.fullContent}
                </div>
              </div>

              <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <p className="text-sm text-purple-700 dark:text-purple-300 text-center font-medium">
                  💜 Ingat, kamu tidak sendiri dalam perjalanan ini. Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main list view
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-y-auto">
      {/* Daily Story Highlight */}
      {dailyStory && (
        <div className="p-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 text-white shadow-xl">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <dailyStory.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Cerita Hari Ini</h3>
                <p className="text-sm opacity-90">{dailyStory.readTime} baca</p>
              </div>
            </div>
            <h4 className="font-semibold text-lg mb-2">{dailyStory.title}</h4>
            <p className="text-sm opacity-95 line-clamp-3">{dailyStory.content}</p>
            <button
              onClick={() => handleReadMore(dailyStory)}
              className="mt-3 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-sm font-medium transition-colors"
            >
              Baca Selengkapnya
            </button>
          </div>
        </div>
      )}

      {/* Reminder Settings */}
      <div className="px-4 pb-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-800 dark:text-white">Reminder Harian</span>
            </div>
            <button
              onClick={handleReminderToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                reminderEnabled ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                reminderEnabled ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 bg-white dark:bg-gray-700"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">setiap hari</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-4">
        <div className="flex overflow-x-auto space-x-3 pb-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stories List */}
      <div className="flex-1 px-4 pb-4">
        <div className="space-y-4">
          {filteredStories.map((story) => {
            const IconComponent = story.icon;
            return (
              <div
                key={story.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 ${story.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800 dark:text-white line-clamp-1">{story.title}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{story.readTime}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
                      {story.content}
                    </p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {story.category.replace('-', ' ')}
                      </span>
                      <button 
                      onClick={() => handleReadMore(story)}
                      className="text-xs text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                                    >
                       Baca Selengkapnya
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReminderPage;