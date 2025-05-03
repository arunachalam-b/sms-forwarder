import React from 'react';
import { useDarkMode } from './DarkModeContext';

const TestimonialsSection: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : ''}`}>What Our Users Say</h2>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center max-w-3xl mx-auto mb-16`}>
          Join thousands of users who've improved their messaging experience with SMS Forwarder
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-xl shadow-sm`}>
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 ${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-100'} rounded-full flex items-center justify-center text-xl font-bold ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'} mr-4`}>
                JD
              </div>
              <div>
                <h4 className={`font-bold ${isDarkMode ? 'text-white' : ''}`}>John D.</h4>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              "This app is exactly what I needed. Now I never miss important messages even when I'm away from my main phone."
            </p>
          </div>

          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-xl shadow-sm`}>
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 ${isDarkMode ? 'bg-green-900' : 'bg-green-100'} rounded-full flex items-center justify-center text-xl font-bold ${isDarkMode ? 'text-green-300' : 'text-green-600'} mr-4`}>
                SA
              </div>
              <div>
                <h4 className={`font-bold ${isDarkMode ? 'text-white' : ''}`}>Sarah A.</h4>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              "Great app for forwarding OTP codes to my work phone. The filtering system works perfectly."
            </p>
          </div>

          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-xl shadow-sm`}>
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 ${isDarkMode ? 'bg-purple-900' : 'bg-purple-100'} rounded-full flex items-center justify-center text-xl font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-600'} mr-4`}>
                MK
              </div>
              <div>
                <h4 className={`font-bold ${isDarkMode ? 'text-white' : ''}`}>Mike K.</h4>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              "Excellent SMS forwarding app. I use it for my business to make sure I catch all important client messages."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 