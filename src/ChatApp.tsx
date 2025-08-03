import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Music, Clock, Settings, Brain, Play, Pause } from 'lucide-react';
import ChatPage from './components/ChatPage';
import MusicPage from './components/MusicPage';
import ReminderPage from './components/ReminderPage';
import SettingsPage from './components/SettingsPage';
import OnboardingPage from './components/OnboardingPage';

type PageType = 'chat' | 'music' | 'reminder' | 'settings';

interface UserData {
  name: string;
  age: string;
  gender: string;
  apiKey: string;
}

interface AppSettings {
  darkMode: boolean;
  notifications: boolean;
}

interface Message {
  id: string;
  content: string;
  type: 'user' | 'bot';
  timestamp: Date;
  transcription?: string;
  audioUrl?: string;
}

// tambahaan 
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
//

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('chat');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [settings, setSettings] = useState<AppSettings>({
    darkMode: false,
    notifications: true
  });
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
// tambahan
  const [musicState, setMusicState] = useState<MusicState>({
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1
  });
  
  // Global audio reference for cross-page playback
  const globalAudioRef = useRef<HTMLAudioElement | null>(null);
  //
  useEffect(() => {
    // Load user data
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      try {
        setUserData(JSON.parse(savedUserData));
        setIsOnboarded(true);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('userData');
      }
    }

    // Load app settings
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
      } catch (error) {
        console.error('Error parsing settings:', error);
      }
    }

    // Load chat messages
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        // Convert timestamp strings back to Date objects
        const messagesWithDates = parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setChatMessages(messagesWithDates);
      } catch (error) {
        console.error('Error parsing chat messages:', error);
      }
    }
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  // Save chat messages to localStorage whenever they change
useEffect(() => {
  if (chatMessages.length > 0) {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }
}, [chatMessages]);

//tambahan
// Save music state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('musicState', JSON.stringify(musicState));
  }, [musicState]);

  // Initialize global audio player
  useEffect(() => {
    if (!globalAudioRef.current) {
      globalAudioRef.current = new Audio();
    }
    
    const audio = globalAudioRef.current;
    
    // Set up audio event listeners
    const updateTime = () => {
      setMusicState(prev => ({
        ...prev,
        currentTime: audio.currentTime || 0
      }));
    };
    
    const updateDuration = () => {
      setMusicState(prev => ({
        ...prev,
        duration: audio.duration || 0
      }));
    };
    
    const handleEnded = () => {
      setMusicState(prev => ({
        ...prev,
        isPlaying: false,
        currentTime: 0
      }));
    };

    const handleLoadStart = () => {
      setMusicState(prev => ({
        ...prev,
        currentTime: 0,
        duration: 0
      }));
    };

    // Add event listeners
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadeddata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadstart', handleLoadStart);
    
    // Cleanup function
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadeddata', updateDuration);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
  }, []);

  // Handle music state changes
  useEffect(() => {
    const audio = globalAudioRef.current;
    if (!audio) return;

    if (musicState.currentTrack) {
      // Load new track
      if (audio.src !== musicState.currentTrack.url) {
        audio.src = musicState.currentTrack.url;
        audio.load();
      }
      
      // Set volume
      audio.volume = musicState.volume;
      
      // Force update duration when track changes
      if (audio.duration) {
        setMusicState(prev => ({
          ...prev,
          duration: audio.duration
        }));
      }
      
      // Handle play/pause
      if (musicState.isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Error playing audio:', error);
            setMusicState(prev => ({
              ...prev,
              isPlaying: false
            }));
          });
        }
      } else {
        audio.pause();
      }
    } else {
      audio.pause();
    }
  }, [musicState.currentTrack, musicState.isPlaying, musicState.volume]);

  // Handle seek changes
  useEffect(() => {
    const audio = globalAudioRef.current;
    if (audio && !isNaN(musicState.currentTime) && Math.abs(audio.currentTime - musicState.currentTime) > 1) {
      audio.currentTime = musicState.currentTime;
    }
  }, [musicState.currentTime]);
  //



  const handleOnboardingComplete = (data: UserData) => {
    setUserData(data);
    localStorage.setItem('userData', JSON.stringify(data));
    setIsOnboarded(true);
  };

  const handleUserDataUpdate = (newData: Partial<UserData>) => {
    if (userData) {
      const updatedData = { ...userData, ...newData };
      setUserData(updatedData);
      localStorage.setItem('userData', JSON.stringify(updatedData));
    }
  };

  const handleSettingsUpdate = (newSettings: Partial<AppSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('appSettings', JSON.stringify(updatedSettings));
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('appSettings');
    localStorage.removeItem('chatMessages');
    localStorage.removeItem('musicState');
    setUserData(null);
    setIsOnboarded(false);
    setChatMessages([]);
    setSettings({ darkMode: false, notifications: true });
    setMusicState({
      currentTrack: null,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 0.7
    });
  };

  const handleNewChat = () => {
    setChatMessages([]);
    localStorage.removeItem('chatMessages');
  };

  if (!isOnboarded) {
    return <OnboardingPage onComplete={handleOnboardingComplete} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'chat':
        return (
          <ChatPage 
            userData={userData!} 
            messages={chatMessages}
            onMessagesUpdate={setChatMessages}
            onNewChat={handleNewChat}
          />
        );
      case 'music':
        return (
          <MusicPage 
            musicState={musicState}
            onMusicStateUpdate={setMusicState}
            globalAudioRef={globalAudioRef}
          />
        );
      case 'reminder':
        return <ReminderPage />;
      case 'settings':
        return (
          <SettingsPage 
            userData={userData!} 
            settings={settings}
            onUserUpdate={handleUserDataUpdate} 
            onSettingsUpdate={handleSettingsUpdate}
            onLogout={handleLogout} 
          />
        );
      default:
        return (
          <ChatPage 
            userData={userData!} 
            messages={chatMessages}
            onMessagesUpdate={setChatMessages}
            onNewChat={handleNewChat}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors duration-300">
      {/* Fixed Header - Mobile Optimized */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-sm border-b border-purple-100 dark:border-gray-700 transition-all duration-300">
        {/* Main Header Row */}
        <div className="flex items-center justify-between px-3 py-2">
          {/* Left: App Logo & Name */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-800 dark:text-white">CerdasBudi</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Mental Health Support</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-sm font-bold text-gray-800 dark:text-white">CerdasBudi</h1>
            </div>
          </div>

          {/* Right: User Info - Always visible */}
          <div className="text-right flex-shrink-0">
            <p className="text-sm font-medium text-gray-800 dark:text-white">{userData?.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{userData?.age} tahun</p>
          </div>
        </div>

        {/* Music Player Row - Only show when music is playing */}
        {musicState.currentTrack && (
          <div className="px-3 pb-2">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                {/* Music Info */}
                <button 
                  onClick={() => setCurrentPage('music')}
                  className="flex items-center space-x-2 flex-1 min-w-0 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg p-1 transition-colors"
                >
                  <img
                    src={musicState.currentTrack.cover}
                    alt={musicState.currentTrack.title}
                    className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1">
                      <p className="text-xs font-medium text-gray-800 dark:text-white truncate">
                        {musicState.currentTrack.title}
                      </p>
                      {musicState.isPlaying && (
                        <div className="flex space-x-0.5 flex-shrink-0">
                          <div className="w-0.5 h-2 bg-purple-600 animate-pulse"></div>
                          <div className="w-0.5 h-3 bg-purple-600 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-0.5 h-2 bg-purple-600 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {musicState.currentTrack.artist}
                    </p>
                  </div>
                </button>
                
                {/* Play/Pause Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMusicState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
                  }}
                  className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors flex-shrink-0"
                >
                  {musicState.isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content with proper padding - Adjust based on music player */}
      <main className={`flex-1 overflow-hidden transition-all duration-300 ${
        musicState.currentTrack ? 'pt-[120px]' : 'pt-[72px]'
      } pb-[60px]`}>
        {renderPage()}
      </main>

      {/* Fixed Bottom Navigation - WhatsApp Style (Smaller) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
        <div className="flex justify-around items-center py-1">
          {[
            { id: 'chat', icon: MessageSquare, label: 'Chat' },
            { id: 'music', icon: Music, label: 'Musik' },
            { id: 'reminder', icon: Clock, label: 'Reminder' },
            { id: 'settings', icon: Settings, label: 'Setting' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id as PageType)}
              className={`flex flex-col items-center justify-center py-2 px-3 transition-all duration-200 min-w-[60px] ${
                currentPage === id
                  ? 'text-purple-600'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${
                currentPage === id ? 'text-purple-600' : 'text-gray-500 dark:text-gray-400'
              }`} />
              <span className={`text-xs font-medium ${
                currentPage === id ? 'text-purple-600' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
