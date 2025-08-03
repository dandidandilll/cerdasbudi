import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Coffee, Zap, Moon, Sun, Music } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  mood: string;
  url: string;
  cover: string;
}

interface MusicState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}

interface MusicPageProps {
  musicState: MusicState;
  onMusicStateUpdate: (state: MusicState) => void;
  globalAudioRef: React.RefObject<HTMLAudioElement>;
}

const MusicPage: React.FC<MusicPageProps> = ({ musicState, onMusicStateUpdate, globalAudioRef }) => {
  const [selectedMood, setSelectedMood] = useState<string>('relax');

  const moods = [
    { id: 'relax', name: 'Relax', icon: Moon, color: 'bg-blue-500', description: 'Tenang dan damai' },
    { id: 'focus', name: 'Focus', icon: Zap, color: 'bg-yellow-500', description: 'Konsentrasi tinggi' },
    { id: 'happy', name: 'Happy', icon: Sun, color: 'bg-orange-500', description: 'Ceria dan semangat' },
    { id: 'sleep', name: 'Sleep', icon: Moon, color: 'bg-purple-500', description: 'Tidur nyenyak' },
    { id: 'meditation', name: 'Meditation', icon: Heart, color: 'bg-green-500', description: 'Meditasi dalam' },
    { id: 'energy', name: 'Energy', icon: Coffee, color: 'bg-red-500', description: 'Energi positif' }
  ];

  // Sample tracks data
   const tracks: Track[] = [
    {
      id: '1',
  title: 'Let Her Go',
  artist: 'Passenger',
  duration: '04.14',
  mood: 'relax',
  url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/musik1//lagu1.mp3',
  cover: 'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    
      {
      id: '2',
      title: 'Say You - Wont Let Go',
      artist: 'James Arthur',
      duration: '03.30',
      mood: 'relax',
      url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/musik1//lagu2.mp3',
      cover: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400'


    },
    
      {
  id: '3',
  title: 'Playlist - Calm Your Anxiety',
  artist: 'Neotic',
  duration: '24.13',
  mood: 'relax',
  url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/music//lagu3.mp3',
  cover: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=400'


    },
    {
      id: '4',
      title: 'Music for Maximum Focus and Concentration',
      artist: 'Brain.fm',
      duration: '30.01',
      mood: 'focus',
      url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/music//lagu4.mp3',
      cover: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
  title: 'Songs that - ll make you dance the whole day',
  artist: 'Just Chilin',
  duration: '36.22',
  mood: 'happy',
  url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/music//lagu5.mp3',
  cover: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400'

    },
    {
      id: '6',
  title: 'Deep Sleep',
  artist: 'Deep Breath',
  duration: '15.14',
  mood: 'sleep',
  url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/music//lagu6.mp3',
  cover: 'https://images.pexels.com/photos/1139585/pexels-photo-1139585.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '7',
  title: 'Tuned Tibetan Bowls Meditation',
  artist: 'Meditative Mind',
  duration: '21.20',
  mood: 'meditation',
  url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/music//lagu7.mp3',
  cover: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
  id: '8',
  title: 'Tourner Dans Le Vide (Paroles)',
  artist: 'Indila',
  duration: '04.05',
  mood: 'energy',
  url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/music//lagu8.mp3',
  cover: 'https://images.pexels.com/photos/1906876/pexels-photo-1906876.jpeg?auto=compress&cs=tinysrgb&w=400'
},
{
  id: '9',
  title: 'Happy Nation',
  artist: 'Ace of Base',
  duration: '03.53',
  mood: 'energy',
  url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/music//lagu9.mp3',
  cover: 'https://images.pexels.com/photos/6154140/pexels-photo-6154140.jpeg?auto=compress&cs=tinysrgb&w=400'
},
{
  id: '10',
  title: 'On The Floor',
  artist: 'Jennifer Lopez ft. Pitbull',
  duration: '05.29',
  mood: 'energy',
  url: 'https://bdflopqmfhcptfpezkfs.supabase.co/storage/v1/object/public/music//lagu10.mp3',
  cover: 'https://images.pexels.com/photos/3015441/pexels-photo-3015441.jpeg?auto=compress&cs=tinysrgb&w=400'
}

  ];

  const filteredTracks = tracks.filter(track => track.mood === selectedMood);

  const playTrack = (track: Track) => {
    onMusicStateUpdate({
      ...musicState,
      currentTrack: track,
      isPlaying: true,
      currentTime: 0
    });
  };

  const togglePlayPause = () => {
    if (!musicState.currentTrack) return;

    onMusicStateUpdate({
      ...musicState,
      isPlaying: !musicState.isPlaying
    });
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (globalAudioRef.current) {
      globalAudioRef.current.currentTime = newTime;
      onMusicStateUpdate({
        ...musicState,
        currentTime: newTime
      });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (globalAudioRef.current) {
      globalAudioRef.current.volume = newVolume;
      onMusicStateUpdate({
        ...musicState,
        volume: newVolume
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-y-auto">
      {/* Mood Selection */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Pilih Mood Anda</h2>
        <div className="grid grid-cols-2 gap-3">
          {moods.map((mood) => {
            const IconComponent = mood.icon;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`p-4 rounded-2xl transition-all ${
                  selectedMood === mood.id
                    ? `${mood.color} text-white shadow-lg scale-105`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <IconComponent className="w-6 h-6 mx-auto mb-2" />
                <p className="font-medium text-sm">{mood.name}</p>
                <p className="text-xs opacity-75">{mood.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Track List */}
      <div className="flex-1 p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Musik {moods.find(m => m.id === selectedMood)?.name}
        </h3>
        
        <div className="space-y-3">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border transition-all ${
                musicState.currentTrack?.id === track.id
                  ? 'border-purple-300 dark:border-purple-600 bg-purple-50 dark:bg-purple-900/30'
                  : 'border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <button
                    onClick={() => playTrack(track)}
                    className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <Play className="w-6 h-6 text-white" />
                  </button>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-800 dark:text-white truncate">{track.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{track.artist}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{track.duration}</p>
                </div>
                
                <button
                  onClick={() => playTrack(track)}
                  className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                >
                  {musicState.currentTrack?.id === track.id && musicState.isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Music Player */}
      {musicState.currentTrack && (
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={musicState.currentTrack.cover}
              alt={musicState.currentTrack.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-800 dark:text-white truncate">{musicState.currentTrack.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{musicState.currentTrack.artist}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max={musicState.duration || 0}
              value={musicState.currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${(musicState.currentTime / musicState.duration) * 100}%, #E5E7EB ${(musicState.currentTime / musicState.duration) * 100}%, #E5E7EB 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>{formatTime(musicState.currentTime)}</span>
              <span>{formatTime(musicState.duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">
                <SkipBack className="w-5 h-5" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                {musicState.isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={musicState.volume}
                onChange={handleVolumeChange}
                className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPage;
