import React from 'react';
import { useDarkMode } from './DarkModeContext';

const HeroSection: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={`${isDarkMode ? 'bg-gradient-to-br from-indigo-900 via-gray-800 to-indigo-900' : 'bg-gradient-to-br from-indigo-50 via-white to-indigo-50'} py-24`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight mb-6`}>
              Take Control of Your <span className="text-indigo-600">SMS</span> with AI
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
              Forward important messages, auto-filter spam, and simplify your messaging with SMS Forwarder
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="[Your Google Play Store Link]"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get it on Google Play
              </a>
              <a
                href="#features"
                className={`inline-flex items-center justify-center border-2 border-indigo-600 ${isDarkMode ? 'text-indigo-400 hover:bg-indigo-900' : 'text-indigo-600 hover:bg-indigo-50'} px-6 py-3 rounded-lg font-semibold transition-colors`}
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center text-gray-500">
              <div className="flex mr-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <span>4.7 (250+) | 5,000+ happy users</span>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className={`relative z-10 rounded-xl shadow-2xl overflow-hidden ${isDarkMode ? 'border-8 border-gray-800' : 'border-8 border-white'} max-w-sm mx-auto`}>
              <img
                src="/app-screenshot.png"
                alt="SMS Forwarder App Screenshot"
                className="w-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/240x480/indigo/white?text=SMS+Forwarder';
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-indigo-600 rounded-full opacity-10 z-0"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-purple-600 rounded-full opacity-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 