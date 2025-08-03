import React, { useState } from 'react';
import { Brain, Heart, Shield, Sparkles, Eye, EyeOff, Gift } from 'lucide-react';

interface UserData {
  name: string;
  age: string;
  gender: string;
  apiKey: string;
}

interface OnboardingPageProps {
  onComplete: (data: UserData) => void;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [showToken, setShowToken] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    apiKey: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Tokens untuk testing
  const demoTokens = import.meta.env.VITE_GROQ_DEMO_TOKENS?.split(',') || [];

  const getRandomToken = () => {
    const randomIndex = Math.floor(Math.random() * demoTokens.length);
    return demoTokens[randomIndex];
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.name.trim()) {
          newErrors.name = 'Nama harus diisi';
        } else if (formData.name.trim().length < 2) {
          newErrors.name = 'Nama minimal 2 karakter';
        }
        
        if (!formData.age.trim()) {
          newErrors.age = 'Umur harus diisi';
        } else {
          const age = parseInt(formData.age);
          if (isNaN(age) || age < 5 || age > 100) {
            newErrors.age = 'Umur harus antara 5-100 tahun';
          }
        }
        break;
      
      case 2:
        if (!formData.gender) {
          newErrors.gender = 'Jenis kelamin harus dipilih';
        }
        break;
      
      case 3:
        if (!formData.apiKey.trim()) {
          newErrors.apiKey = 'Token harus diisi';
        } else if (formData.apiKey.trim().length < 10) {
          newErrors.apiKey = 'Token terlalu pendek';
        } else if (!formData.apiKey.startsWith('gsk_')) {
          newErrors.apiKey = 'Token harus dimulai dengan "gsk_"';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < 3) {
        setStep(step + 1);
      } else {
        // Validate token format one more time before completing
        if (formData.apiKey.startsWith('gsk_') && formData.apiKey.length > 20) {
          onComplete(formData);
        } else {
          setErrors({ apiKey: 'Format token tidak valid' });
        }
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
    }
  };

  const handleGetDemoToken = () => {
    const token = getRandomToken();
    setFormData(prev => ({ ...prev, apiKey: token }));
    setErrors({});
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== '' && formData.age.trim() !== '' && !errors.name && !errors.age;
      case 2:
        return formData.gender !== '';
      case 3:
        return formData.apiKey.trim() !== '' && formData.apiKey.startsWith('gsk_') && !errors.apiKey;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 flex flex-col">
      {/* Header */}
      <div className="text-center pt-12 pb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">CerdasBudi</h1>
        <p className="text-gray-600">Sahabat Mental Health Anda</p>
      </div>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="bg-white rounded-full p-1 shadow-sm">
          <div 
            className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">Langkah {step} dari 3</p>
      </div>

      {/* Content */}
      <div className="flex-1 px-6">
        <div className="bg-white rounded-3xl shadow-lg p-6 max-w-md mx-auto">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-gray-800 mb-2">Berkenalan Yuk!</h2>
                <p className="text-gray-600">Ceritakan sedikit tentang diri Anda</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Masukkan nama Anda"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Umur</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Masukkan umur Anda"
                    min="5"
                    max="100"
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-gray-800 mb-2">Jenis Kelamin</h2>
                <p className="text-gray-600">Pilih jenis kelamin Anda</p>
              </div>
              
              <div className="space-y-3">
                {['Laki-laki', 'Perempuan'].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => handleInputChange('gender', gender)}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      formData.gender === gender
                        ? 'border-purple-600 bg-purple-50 text-purple-700'
                        : 'border-gray-300 hover:border-purple-400'
                    }`}
                  >
                    <span className="font-medium">{gender}</span>
                  </button>
                ))}
              </div>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <Gift className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-gray-800 mb-2">Dapatkan Token</h2>
                <p className="text-gray-600">Ambil token gratis untuk menggunakan AI</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Token AI</label>
                  <div className="relative">
                    <input
                      type={showToken ? "text" : "password"}
                      value={formData.apiKey}
                      onChange={(e) => handleInputChange('apiKey', e.target.value)}
                      className={`w-full px-4 py-3 pr-12 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                        errors.apiKey ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="gsk_xxxxxxxxxxxxxxxxxxxxxxxx"
                    />
                    <button
                      type="button"
                      onClick={() => setShowToken(!showToken)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showToken ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.apiKey && <p className="text-red-500 text-sm mt-1">{errors.apiKey}</p>}
                </div>
                
                {/* Demo Token Button */}
                <button
                  onClick={handleGetDemoToken}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Gift className="w-5 h-5" />
                  <span className="font-medium">Dapatkan Token Demo Gratis</span>
                </button>
                
                <div className="bg-green-50 p-4 rounded-xl">
                  <p className="text-sm text-green-800 font-medium mb-2">🎁 Token Demo Gratis:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Klik tombol di atas untuk mendapat token</li>
                    <li>• Token sudah siap pakai untuk demo</li>
                    <li>• Tidak perlu daftar atau bayar</li>
                    <li>• Langsung bisa chat dengan AI</li>
                  </ul>
                  <p className="text-xs text-green-600 mt-2">💡 Token dimulai dengan "gsk_"</p>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                step === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Kembali
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                isStepValid()
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {step === 3 ? 'Selesai' : 'Lanjut'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;