import React, { useState, useEffect } from 'react';
import { MessageCircle, Mic, Volume2, AlertCircle, RefreshCw } from 'lucide-react';

const VoiceAssistantSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'none' | 'voice'>('none');
  const [voiceLoading, setVoiceLoading] = useState(false);
  const [voiceError, setVoiceError] = useState(false);

  useEffect(() => {
    // Add Chatling configuration for chat (this creates the bottom left chat symbol)
    (window as any).chtlConfig = {
      chatbotId: "9634155945"
    };

    // Load Chatling script for chat functionality
    const chatScript = document.createElement('script');
    chatScript.async = true;
    chatScript.setAttribute('data-id', '9634155945');
    chatScript.id = 'chtl-script';
    chatScript.type = 'text/javascript';
    chatScript.src = 'https://chatling.ai/js/embed.js';
    
    document.head.appendChild(chatScript);

    // Cleanup function
    return () => {
      const existingChatScript = document.getElementById('chtl-script');
      if (existingChatScript) {
        document.head.removeChild(existingChatScript);
      }
      // Clean up global config
      delete (window as any).chtlConfig;
    };
  }, []);

  const handleVoiceAssistant = () => {
    setActiveMode('voice');
    setVoiceLoading(true);
    setVoiceError(false);
    
    // Set a timeout to handle loading state
    setTimeout(() => {
      setVoiceLoading(false);
    }, 3000);
  };

  const handleVoiceError = () => {
    setVoiceError(true);
    setVoiceLoading(false);
  };

  const retryVoiceAssistant = () => {
    setVoiceError(false);
    setVoiceLoading(true);
    
    // Force iframe reload by changing key
    const iframe = document.querySelector('#voice-assistant-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
    
    setTimeout(() => {
      setVoiceLoading(false);
    }, 3000);
  };

  const handleChatAssistant = () => {
    // Direct users to use the bottom left chat widget
    const message = "💬 Chat with Alex using the chat icon in the bottom left corner of your screen!";
    
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.innerHTML = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 10000;
      font-weight: 500;
      animation: slideIn 0.3s ease-out;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
          document.body.removeChild(notification);
          document.head.removeChild(style);
        }, 300);
      }
    }, 4000);
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Talk to Alex</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Choose how you'd like to interact with Alex - through voice conversation or text chat
        </p>
        
        <div className="flex justify-center items-center gap-6 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <Mic className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Voice Recognition</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <Volume2 className="w-5 h-5 text-teal-500" />
            <span className="text-sm font-medium text-gray-700">Natural Speech</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <MessageCircle className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">Smart Responses</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {activeMode === 'none' ? (
          <div className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Voice Assistant Button */}
              <button
                onClick={handleVoiceAssistant}
                className="group bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold py-8 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Mic className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Voice Assistant</h3>
                    <p className="text-sm opacity-90">Talk naturally with Alex using voice</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white rounded-2xl blur-xl transform scale-110 transition-all duration-300"></div>
              </button>

              {/* Chat Assistant Button */}
              <button
                onClick={handleChatAssistant}
                className="group bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500 text-white font-semibold py-8 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Chat Assistant</h3>
                    <p className="text-sm opacity-90">Use the chat icon in bottom left corner</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white rounded-2xl blur-xl transform scale-110 transition-all duration-300"></div>
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-blue-800 text-sm">
                💡 <strong>Tip:</strong> Look for the chat icon 💬 in the bottom left corner for instant text chat with Alex!
              </p>
            </div>
          </div>
        ) : activeMode === 'voice' ? (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Alex - AI Voice Assistant
                    </h3>
                    <p className="text-white/80 text-sm">
                      {voiceLoading ? 'Loading voice assistant...' : 'Speak naturally - Alex can hear and respond to you'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {voiceError && (
                    <button
                      onClick={retryVoiceAssistant}
                      className="flex items-center gap-2 text-white/80 hover:text-white text-sm underline transition-colors duration-200"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Retry
                    </button>
                  )}
                  <button
                    onClick={() => setActiveMode('none')}
                    className="text-white/80 hover:text-white text-sm underline transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {voiceLoading && (
                <div className="absolute inset-0 bg-white/90 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading Alex Voice Assistant...</p>
                    <p className="text-gray-500 text-sm mt-2">Please allow microphone access when prompted</p>
                  </div>
                </div>
              )}
              
              {voiceError && (
                <div className="absolute inset-0 bg-white/90 flex items-center justify-center z-10">
                  <div className="text-center p-8">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Voice Assistant Unavailable</h3>
                    <p className="text-gray-600 mb-4">Unable to load the voice assistant. Please try again.</p>
                    <button
                      onClick={retryVoiceAssistant}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}
              
              <div className="min-h-[600px] p-0">
                <iframe 
                  id="voice-assistant-iframe"
                  src="https://app.millis.ai/agents/embedded?id=-OS6t0scd9Sfti0RiYzB&k=pggwtc249Js7LDJKNnMTzoHiESubL65U" 
                  width="100%" 
                  height="600px" 
                  allow="microphone; camera; autoplay; encrypted-media; fullscreen"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-top-navigation"
                  className="border-0 rounded-b-3xl"
                  title="Alex Voice Assistant"
                  onLoad={() => {
                    setVoiceLoading(false);
                    setVoiceError(false);
                  }}
                  onError={handleVoiceError}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">
          Powered by AI • Voice & Chat Enabled • Secure & Private • Available 24/7
        </p>
      </div>
    </div>
  );
};

export default VoiceAssistantSection;