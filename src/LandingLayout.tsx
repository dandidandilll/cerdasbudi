import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import HowToStartPage from './pages/HowToStartPage';
import InfoPage from './pages/InfoPage';
import StoryPage from './pages/StoryPage';

function LandingLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-to-start" element={<HowToStartPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/story" element={<StoryPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default LandingLayout;