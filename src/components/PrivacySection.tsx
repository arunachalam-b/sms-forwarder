import React from 'react';
import { useDarkMode } from './DarkModeContext';

const PrivacySection: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} id="privacy-comparison">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : ''}`}>Your Privacy Matters</h2>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center max-w-3xl mx-auto mb-16`}>
          Why our approach to SMS forwarding puts privacy and control in your hands
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-2xl p-8 relative`}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
              Other Forwarding Apps
            </div>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className={isDarkMode ? 'text-gray-300' : ''}>Access all your messages without explicit permission</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className={isDarkMode ? 'text-gray-300' : ''}>May store your message data on their servers</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className={isDarkMode ? 'text-gray-300' : ''}>Could share your message content with third parties</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className={isDarkMode ? 'text-gray-300' : ''}>Continue tracking in background without your knowledge</span>
              </li>
            </ul>
            <p className={`mt-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} italic`}>
              "Other SMS apps can see everything in your messages, whether you want them to or not."
            </p>
          </div>

          <div className={`${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-50'} rounded-2xl p-8 relative`}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
              SMS Forwarder
            </div>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className={isDarkMode ? 'text-gray-300' : ''}>Only accesses messages when you grant permission</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className={isDarkMode ? 'text-gray-300' : ''}>All data stays locally on your device</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className={isDarkMode ? 'text-gray-300' : ''}>We never share your message data - what's yours stays yours</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className={isDarkMode ? 'text-gray-300' : ''}>Full transparency - only forwards what you explicitly configure</span>
              </li>
            </ul>
            <p className={`mt-6 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'} italic`}>
              "With SMS Forwarder, you decide what messages to forward, when to forward them, and keep complete control over your data."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection; 