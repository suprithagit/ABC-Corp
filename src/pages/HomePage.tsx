import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import WelcomeSection from '../components/WelcomeSection';
import CoreServices from '../components/CoreServices';
import VoiceAssistantSection from '../components/VoiceAssistantSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <WelcomeSection />
          <CoreServices />
          <VoiceAssistantSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;