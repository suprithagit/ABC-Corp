import React from 'react';
import { Bot, Mic, Users, Building2 } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="text-center mb-16 relative">
      <div className="mb-8 relative">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mb-6 shadow-2xl">
          <Bot className="w-12 h-12 text-white animate-pulse" />
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full opacity-20 animate-ping"></div>
      </div>
      
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4 animate-fadeIn">
        Welcome to ABC Corp
      </h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Meet Alex, Your AI Voice & Chat Assistant
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Alex handles meeting room bookings, company inquiries, and general workplace information 
          to make your work life seamless and efficient.
        </p>
      </div>

      <div className="flex justify-center items-center gap-3 mb-8">
        <Mic className="w-5 h-5 text-blue-500 animate-pulse" />
        <span className="text-blue-600 font-medium">Voice-Enabled</span>
        <Users className="w-5 h-5 text-teal-500 animate-pulse" />
        <span className="text-teal-600 font-medium">24/7 Available</span>
        <Building2 className="w-5 h-5 text-purple-500 animate-pulse" />
        <span className="text-purple-600 font-medium">Enterprise Ready</span>
      </div>
    </div>
  );
};

export default WelcomeSection;