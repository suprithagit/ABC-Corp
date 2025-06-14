import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-bounce" 
           style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-500/10 rounded-full animate-bounce" 
           style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-purple-500/10 rounded-full animate-bounce" 
           style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500/10 rounded-full animate-bounce" 
           style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
      
      {/* Floating Squares */}
      <div className="absolute top-60 left-1/4 w-8 h-8 bg-blue-400/10 rotate-45 animate-spin" 
           style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-32 right-1/3 w-6 h-6 bg-teal-400/10 rotate-45 animate-spin" 
           style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-teal-400/5 to-blue-400/5 rounded-full blur-xl animate-pulse" 
           style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default AnimatedBackground;