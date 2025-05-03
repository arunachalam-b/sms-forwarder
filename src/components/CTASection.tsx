import React from 'react';
import { useDarkMode } from './DarkModeContext';

const CTASection: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-600'} text-white`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Forwarding Smarter. Download SMS Forwarder Today.</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Join thousands of users who are taking control of their messaging with our powerful forwarding app. Available on Android.
        </p>
        <a
          href="[Your Google Play Store Link]"
          className={`inline-flex items-center justify-center ${isDarkMode ? 'bg-white/90 hover:bg-white' : 'bg-white hover:bg-gray-100'} text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg`}
        >
          <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          Get it on Google Play
        </a>
        <div className="flex justify-center mt-10 space-x-8">
          <div className={`w-10 h-10 ${isDarkMode ? 'bg-indigo-800' : 'bg-white/20'} rounded-full flex items-center justify-center`}>AT</div>
          <div className={`w-10 h-10 ${isDarkMode ? 'bg-indigo-800' : 'bg-white/20'} rounded-full flex items-center justify-center`}>SC</div>
          <div className={`w-10 h-10 ${isDarkMode ? 'bg-indigo-800' : 'bg-white/20'} rounded-full flex items-center justify-center`}>MR</div>
          <div className={`w-10 h-10 ${isDarkMode ? 'bg-indigo-800' : 'bg-white/20'} rounded-full flex items-center justify-center`}>JD</div>
        </div>
        <p className={`mt-4 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-200'}`}>Joined by 5,000+ users worldwide</p>
      </div>
    </section>
  );
};

export default CTASection; 