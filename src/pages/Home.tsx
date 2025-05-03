import React from 'react';
import { useDarkMode } from '../components/DarkModeContext';

const Home: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
      {/* Hero Section */}
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

      {/* Your Privacy Matters Section */}
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

      {/* Features Section */}
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

      {/* Testimonials */}
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

      {/* CTA Section */}
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
    </div>
  );
};

export default Home; 