import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, MicOff, Play, Pause, Volume2, Loader2, RotateCcw } from 'lucide-react';

interface UserData {
  name: string;
  age: string;
  gender: string;
  apiKey: string;
}

interface Message {
  id: string;
  content: string;
  type: 'user' | 'bot';
  timestamp: Date;
  transcription?: string;
  audioUrl?: string;
}

interface ChatPageProps {
  userData: UserData;
  messages: Message[];
  onMessagesUpdate: (messages: Message[]) => void;
  onNewChat: () => void;
}

const ChatPage: React.FC<ChatPageProps> = ({ userData, messages, onMessagesUpdate, onNewChat }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [currentAudioPlayer, setCurrentAudioPlayer] = useState<HTMLAudioElement | null>(null);
  const [playingMessageId, setPlayingMessageId] = useState<string | null>(null);
  const [recordedAudio, setRecordedAudio] = useState<{ blob: Blob; url: string } | null>(null);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [previewAudio, setPreviewAudio] = useState<HTMLAudioElement | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize chat with greeting if no messages exist
    if (messages.length === 0) {
      const initialMessage: Message = {
        id: '1',
        content: `Halo ${userData.name}! Saya CerdasBudi, sahabat AI yang siap mendengarkan dan mendukung Anda. Bagaimana perasaan Anda hari ini? Ceritakan apa yang ada di pikiran Anda.`,
        type: 'bot',
        timestamp: new Date()
      };
      onMessagesUpdate([initialMessage]);
    }
  }, [userData.name, messages.length, onMessagesUpdate]);

  const addMessage = (content: string, type: 'user' | 'bot', transcription?: string, audioUrl?: string) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content,
      type,
      timestamp: new Date(),
      transcription,
      audioUrl
    };

    const updatedMessages = [...messages, newMessage];
    onMessagesUpdate(updatedMessages);

    // Auto-play TTS for bot messages
    if (type === 'bot') {
      playTTS(content, newMessage.id);
    }

    return newMessage;
  };

  const sendTextMessage = async () => {
  const content = inputMessage.trim();
  if (!content) return;

  setInputMessage('');
  setIsLoading(true);

  // Manual create user message
  const userMessage: Message = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    content,
    type: 'user',
    timestamp: new Date()
  };

  // Tambahkan ke list
  const updatedMessages = [...messages, userMessage];
  onMessagesUpdate(updatedMessages); // tampilkan langsung

  try {
    // Kirim pesan + state terbaru ke API
    const botResponse = await processWithCerdasBudi(content, updatedMessages);

    const botMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: botResponse,
      type: 'bot',
      timestamp: new Date()
    };

    onMessagesUpdate([...updatedMessages, botMessage]);
  } catch (error) {
    console.error('Error processing message:', error);

    const errorMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
      type: 'bot',
      timestamp: new Date()
    };

    onMessagesUpdate([...updatedMessages, errorMessage]);
  } finally {
    setIsLoading(false);
  }
};


  const sendVoiceMessage = async () => {
  if (!recordedAudio) return;

  setIsLoading(true);

  try {
    // Transcribe audio
    const formData = new FormData();
    formData.append('file', new File([recordedAudio.blob], 'recording.webm', { type: 'audio/webm' }));
    formData.append('model', 'whisper-large-v3');
    formData.append('language', 'id');

    const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userData.apiKey}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Transcription failed: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();

    // Buat message dari suara user
    const userVoiceMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: data.text,
      type: 'user',
      timestamp: new Date(),
      transcription: data.text,
      audioUrl: recordedAudio.url
    };

    const updatedMessages = [...messages, userVoiceMessage];
    onMessagesUpdate(updatedMessages);

    // Clear preview
    setRecordedAudio(null);
    if (previewAudio) {
      previewAudio.pause();
      setPreviewAudio(null);
      setIsPlayingPreview(false);
    }

    // Kirim ke AI
    const botResponse = await processWithCerdasBudi(data.text, updatedMessages);
    const botMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: botResponse,
      type: 'bot',
      timestamp: new Date()
    };

    onMessagesUpdate([...updatedMessages, botMessage]);
  } catch (error) {
    console.error('Error processing voice message:', error);
    addMessage('Gagal memproses rekaman suara. Pastikan Token Anda valid.', 'bot');
  } finally {
    setIsLoading(false);
  }
};


  const processWithCerdasBudi = async (message: string, currentMessages: Message[]): Promise<string> => {
    if (!userData.apiKey) {
      throw new Error('Token tidak tersedia');
    }

    // Create conversation history for context
    const conversationHistory = currentMessages.map(msg => ({
  role: msg.type === 'user' ? 'user' as const : 'assistant' as const,
  content: msg.content
}));

    // Add current message
    conversationHistory.push({
      role: 'user' as const,
      content: message
    });

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userData.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `Kamu adalah CerdasBudi, AI psikolog yang bertugas fokus untuk menangani korban perundungan atau bullying. Tugasmu adalah memberikan dukungan emosional, saran yang praktis, dan membantu pemulihan mental.

Profil Pengguna:
Nama: ${userData.name}
Usia: ${userData.age}
Jenis Kelamin: ${userData.gender}

Gunakan bahasa Indonesia yang hangat dan empati. Jangan langsung memberikan solusi, tapi tanya lebih dalam dahulu untuk memahami situasinya.`
          },
          ...conversationHistory
        ],
        temperature: 0.7,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

  const playTTS = async (text: string, messageId: string) => {
    try {
      const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb?output_format=mp3_44100_128", {
        method: "POST",
        headers: {
          "xi-api-key": import.meta.env.VITE_ELEVENLABS_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_multilingual_v2"
        })
      });

      if (!response.ok) throw new Error('TTS generation failed');

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Stop current audio if playing
      if (currentAudioPlayer) {
        currentAudioPlayer.pause();
        currentAudioPlayer.currentTime = 0;
      }

      const audio = new Audio(audioUrl);
      setCurrentAudioPlayer(audio);
      setPlayingMessageId(messageId);
      
      audio.play();
      
      audio.onended = () => {
        setPlayingMessageId(null);
        setCurrentAudioPlayer(null);
      };
    } catch (error) {
      console.error('Error generating TTS:', error);
    }
  };

  const toggleAudio = (messageId: string, text: string) => {
    if (playingMessageId === messageId && currentAudioPlayer) {
      currentAudioPlayer.pause();
      setPlayingMessageId(null);
      setCurrentAudioPlayer(null);
    } else {
      playTTS(text, messageId);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio({ blob: audioBlob, url: audioUrl });
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Tidak dapat mengakses mikrofon');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    }
  };

  const playPreview = () => {
    if (!recordedAudio) return;

    if (previewAudio) {
      previewAudio.pause();
      setPreviewAudio(null);
      setIsPlayingPreview(false);
      return;
    }

    const audio = new Audio(recordedAudio.url);
    setPreviewAudio(audio);
    setIsPlayingPreview(true);
    
    audio.play();
    
    audio.onended = () => {
      setPreviewAudio(null);
      setIsPlayingPreview(false);
    };
  };

  const cancelVoiceMessage = () => {
    setRecordedAudio(null);
    if (previewAudio) {
      previewAudio.pause();
      setPreviewAudio(null);
      setIsPlayingPreview(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* New Chat Button */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={onNewChat}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="font-medium">Chat Baru</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm border border-gray-100 dark:border-gray-700'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              
              {/* Audio player for user voice messages */}
              {message.audioUrl && message.type === 'user' && (
                <div className="mt-3">
                  <audio 
                    controls 
                    src={message.audioUrl}
                    className="w-full max-w-xs rounded-lg"
                    style={{ height: '40px' }}
                  />
                </div>
              )}
              
              {/* Transcription for user voice messages */}
              {message.transcription && message.type === 'user' && (
                <div className="mt-2 p-2 bg-black bg-opacity-10 rounded-lg">
                  <p className="text-xs opacity-75 italic">
                    Transkripsi: {message.transcription}
                  </p>
                </div>
              )}
              
              {/* TTS button for bot messages */}
              {message.type === 'bot' && (
                <button
                  onClick={() => toggleAudio(message.id, message.content)}
                  className="mt-2 p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                >
                  {playingMessageId === message.id ? (
                    <Pause className="w-4 h-4 text-purple-600" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-purple-600" />
                  )}
                </button>
              )}
              
              <p className="text-xs opacity-50 mt-2">
                {message.timestamp.toLocaleTimeString('id-ID', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">CerdasBudi sedang berpikir...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Recording Status */}
      {isRecording && (
        <div className="bg-red-50 dark:bg-red-900/30 border-t border-red-200 dark:border-red-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-700 dark:text-red-400 font-medium">Merekam...</span>
              <span className="text-red-600 dark:text-red-500">{formatTime(recordingTime)}</span>
            </div>
            <button
              onClick={stopRecording}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              <MicOff className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Voice Message Preview */}
      {recordedAudio && (
        <div className="bg-blue-50 dark:bg-blue-900/30 border-t border-blue-200 dark:border-blue-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={playPreview}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                {isPlayingPreview ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </button>
              <span className="text-blue-700 dark:text-blue-400 font-medium">
                {isPlayingPreview ? 'Memutar...' : 'Preview rekaman'}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={sendVoiceMessage}
                disabled={isLoading}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
              <button
                onClick={cancelVoiceMessage}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300">
        <div className="flex items-center space-x-3">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isLoading || recordedAudio !== null}
            className={`p-3 rounded-full transition-all ${
              isRecording
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 hover:bg-purple-200 dark:hover:bg-purple-900/50'
            } ${(isLoading || recordedAudio !== null) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendTextMessage()}
              placeholder="Tulis pesan atau gunakan suara..."
              disabled={isLoading || isRecording || recordedAudio !== null}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all pr-12 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              onClick={sendTextMessage}
              disabled={!inputMessage.trim() || isLoading || isRecording || recordedAudio !== null}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
