import React from 'react';
import { useDarkMode } from './DarkModeContext';

const FeaturesSection: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`} id="features">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : ''}`}>Powerful Features</h2>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center max-w-3xl mx-auto mb-16`}>
          Everything you need to forward, filter, and manage your messages
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className={`${isDarkMode ? 'bg-indigo-800' : 'bg-indigo-100'} p-4 rounded-2xl mb-4 md:mb-0 md:mr-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Smart Filtering</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Forward only the messages that matter with custom filters based on sender, content, or keywords. Keep the noise out.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <div className={`${isDarkMode ? 'bg-green-800' : 'bg-green-100'} p-4 rounded-2xl mb-4 md:mb-0 md:mr-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isDarkMode ? 'text-green-300' : 'text-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Privacy Focused</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Your data never leaves your device. We don't store your messages on our servers or share them with third parties.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <div className={`${isDarkMode ? 'bg-purple-800' : 'bg-purple-100'} p-4 rounded-2xl mb-4 md:mb-0 md:mr-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Battery Efficient</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Designed to be light on resources while running in the background. Forward messages without draining your battery.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <div className={`${isDarkMode ? 'bg-yellow-800' : 'bg-yellow-100'} p-4 rounded-2xl mb-4 md:mb-0 md:mr-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Easy Setup</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Configure your forwarding rules in minutes with our intuitive interface. No technical knowledge required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 