import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import IntegrationSection from './components/IntegrationSection';
import TestimonialsSection from './components/TestimonialsSection';
import StatsSection from './components/StatsSection';
import TutorialSection from './components/TutorialSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IntegrationSection />
        <TestimonialsSection />
        <StatsSection />
        <TutorialSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;