import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import LandingLayout from './LandingLayout'; // Berisi halaman: HomePage, InfoPage, StoryPage
import ChatApp from './ChatApp'; // Berisi halaman: Onboarding, Chat, Music, Reminder, Settings

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Route utama untuk aplikasi chat (dengan tab dan onboarding internal) */}
          <Route path="/chat/*" element={<ChatApp />} />

          {/* Semua route lain akan masuk ke Landing Page layout */}
          <Route path="/*" element={<LandingLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
