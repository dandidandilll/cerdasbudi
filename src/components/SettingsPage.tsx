import React, { useState } from 'react';
import { User, Key, LogOut, Bell, Moon, Sun, Info, Heart, Shield, Edit3, Save, X, Eye, EyeOff } from 'lucide-react';

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

interface SettingsPageProps {
  userData: UserData;
  settings: AppSettings;
  onUserUpdate: (data: Partial<UserData>) => void;
  onSettingsUpdate: (settings: Partial<AppSettings>) => void;
  onLogout: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ 
  userData, 
  settings, 
  onUserUpdate, 
  onSettingsUpdate, 
  onLogout 
}) => {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValues, setTempValues] = useState<Partial<UserData>>({});
  const [showToken, setShowToken] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleEdit = (field: string, currentValue: string) => {
    setEditingField(field);
    setTempValues({ [field]: currentValue });
    setErrors({});
  };

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Nama tidak boleh kosong';
        if (value.trim().length < 2) return 'Nama minimal 2 karakter';
        break;
      case 'age':
        const age = parseInt(value);
        if (!value.trim()) return 'Umur tidak boleh kosong';
        if (isNaN(age) || age < 5 || age > 100) return 'Umur harus antara 5-100 tahun';
        break;
      case 'apiKey':
        if (!value.trim()) return 'Token tidak boleh kosong';
        if (value.trim().length < 10) return 'Token terlalu pendek';
        if (!value.startsWith('gsk_')) return 'Token harus dimulai dengan "gsk_"';
        break;
    }
    return '';
  };

  const handleSave = (field: string) => {
    const newValue = tempValues[field as keyof UserData];
    if (!newValue) return;

    const error = validateField(field, newValue);
    if (error) {
      setErrors({ [field]: error });
      return;
    }

    if (newValue !== userData[field as keyof UserData]) {
      onUserUpdate({ [field]: newValue });
    }
    setEditingField(null);
    setTempValues({});
    setErrors({});
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempValues({});
    setErrors({});
  };

  const handleLogout = () => {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
      onLogout();
    }
  };

  const maskToken = (token: string) => {
    if (!token || token.length <= 8) return token;
    // Show first 8 characters and last 4 characters, mask the middle
    const start = token.slice(0, 8);
    const end = token.slice(-4);
    const middle = '*'.repeat(Math.min(token.length - 12, 20)); // Limit asterisks to max 20
    return start + middle + end;
  };

  const handleSettingToggle = (setting: keyof AppSettings) => {
    onSettingsUpdate({ [setting]: !settings[setting] });
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-y-auto">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 p-6 mb-4 transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{userData.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{userData.age} tahun • {userData.gender}</p>
          </div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="flex-1 px-4 space-y-4">
        {/* Personal Information */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-purple-600" />
            Informasi Pribadi
          </h3>
          
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama</label>
              <div className="flex items-center space-x-2">
                {editingField === 'name' ? (
                  <>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={tempValues.name || ''}
                        onChange={(e) => setTempValues({ ...tempValues, name: e.target.value })}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        autoFocus
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <button
                      onClick={() => handleSave('name')}
                      className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg transition-colors"
                    >
                      <Save className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-800 dark:text-white">{userData.name}</span>
                    </div>
                    <button
                      onClick={() => handleEdit('name', userData.name)}
                      className="p-2 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Umur</label>
              <div className="flex items-center space-x-2">
                {editingField === 'age' ? (
                  <>
                    <div className="flex-1">
                      <input
                        type="number"
                        value={tempValues.age || ''}
                        onChange={(e) => setTempValues({ ...tempValues, age: e.target.value })}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.age ? 'border-red-500' : ''
                        }`}
                        min="5"
                        max="100"
                        autoFocus
                      />
                      {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                    </div>
                    <button
                      onClick={() => handleSave('age')}
                      className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg transition-colors"
                    >
                      <Save className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-800 dark:text-white">{userData.age} tahun</span>
                    </div>
                    <button
                      onClick={() => handleEdit('age', userData.age)}
                      className="p-2 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Jenis Kelamin</label>
              <div className="flex items-center space-x-2">
                {editingField === 'gender' ? (
                  <>
                    <select
                      value={tempValues.gender || ''}
                      onChange={(e) => setTempValues({ ...tempValues, gender: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      autoFocus
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                    <button
                      onClick={() => handleSave('gender')}
                      className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg transition-colors"
                    >
                      <Save className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-800 dark:text-white">{userData.gender}</span>
                    </div>
                    <button
                      onClick={() => handleEdit('gender', userData.gender)}
                      className="p-2 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Token Management */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <Key className="w-5 h-5 mr-2 text-purple-600" />
            Token Management
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Token AI</label>
            <div className="flex items-center space-x-2">
              {editingField === 'apiKey' ? (
                <>
                  <div className="flex-1 relative">
                    <input
                      type={showToken ? "text" : "password"}
                      value={tempValues.apiKey || ''}
                      onChange={(e) => setTempValues({ ...tempValues, apiKey: e.target.value })}
                      className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.apiKey ? 'border-red-500' : ''
                      }`}
                      placeholder="gsk_xxxxxxxxxxxxxxxxxxxxxxxx"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowToken(!showToken)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      {showToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    {errors.apiKey && <p className="text-red-500 text-sm mt-1">{errors.apiKey}</p>}
                  </div>
                  <button
                    onClick={() => handleSave('apiKey')}
                    className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg transition-colors"
                  >
                    <Save className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <div className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-800 dark:text-white font-mono text-sm break-all">
                      {showToken ? userData.apiKey : maskToken(userData.apiKey)}
                    </span>
                  </div>
                  <button
                    onClick={() => setShowToken(!showToken)}
                    className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {showToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleEdit('apiKey', userData.apiKey)}
                    className="p-2 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
            
            {/* Token Help */}
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-1">
                💡 Cara mendapatkan Token:
              </p>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>1. Logout dari aplikasi</li>
                <li>2. Kembali ke halaman onboarding</li>
                <li>3. Klik "Dapatkan Token Demo Gratis"</li>
                <li>4. Token akan otomatis terisi</li>
                <li>5. Salin dan tempel di sini</li>
              </ul>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                ⚠️ Token harus dimulai dengan "gsk_"
              </p>
            </div>
          </div>
        </div>

        {/* App Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-purple-600" />
            Pengaturan Aplikasi
          </h3>
          
          <div className="space-y-4">
            {/* Notifications */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800 dark:text-white">Notifikasi</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Terima pengingat dan update</p>
              </div>
              <button
                onClick={() => handleSettingToggle('notifications')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.notifications ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Mode Gelap</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ubah tema aplikasi</p>
                </div>
              </div>
              <button
                onClick={() => handleSettingToggle('darkMode')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.darkMode ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform flex items-center justify-center ${
                  settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}>
                  {settings.darkMode ? (
                    <Moon className="w-2 h-2 text-purple-600" />
                  ) : (
                    <Sun className="w-2 h-2 text-yellow-500" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-purple-600" />
            Tentang CerdasBudi
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Heart className="w-5 h-5 text-pink-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">Misi Kami</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Memberikan dukungan mental health untuk korban bullying</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">Privasi</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Data Anda aman dan tidak dibagikan ke pihak lain</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="pb-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-3 px-4 rounded-2xl font-medium hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
          >
            <LogOut className="w-5 h-5" />
            <span>Keluar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;