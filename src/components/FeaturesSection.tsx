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

        {/* Smart Filtering Feature - Left text, right image */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Smart Filtering</h3>
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Control what gets forwarded</h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Forward only the messages that matter with custom filters based on sender, content, or keywords. Keep the noise out.
            </p>
            <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-indigo-500">•</div>
                Filter by sender or content
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-indigo-500">•</div>
                Custom keyword matching
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] rounded-[40px] shadow-xl border-8 border-gray-200 overflow-hidden bg-gray-100">
              <div className="absolute top-0 w-full h-6 bg-gray-200 rounded-t-[32px]"></div>
              <div className="flex justify-center items-center h-full pb-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-500">SMS Forwarder</div>
                  <div className="text-lg mt-2 text-indigo-600">Smart Filtering</div>
                </div>
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <div className="h-4 w-32 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Focused Feature - Right text, left image */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-24">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Privacy Focused</h3>
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Your data stays private</h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Your data never leaves your device. We don't store your messages on our servers or share them with third parties.
            </p>
            <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-green-500">•</div>
                No cloud storage of messages
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-green-500">•</div>
                End-to-end encrypted forwarding
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] rounded-[40px] shadow-xl border-8 border-gray-200 overflow-hidden bg-gray-100">
              <div className="absolute top-0 w-full h-6 bg-gray-200 rounded-t-[32px]"></div>
              <div className="flex justify-center items-center h-full pb-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-500">SMS Forwarder</div>
                  <div className="text-lg mt-2 text-green-600">Privacy Focused</div>
                </div>
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <div className="h-4 w-32 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Battery Efficient Feature - Left text, right image */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Battery Efficient</h3>
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Light on resources</h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Designed to be light on resources while running in the background. Forward messages without draining your battery.
            </p>
            <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-purple-500">•</div>
                Optimized for low battery usage
              </li>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-purple-500">•</div>
                Intelligent background processing
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-purple-500">•</div>
                Minimal CPU utilization
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] rounded-[40px] shadow-xl border-8 border-gray-200 overflow-hidden bg-gray-100">
              <div className="absolute top-0 w-full h-6 bg-gray-200 rounded-t-[32px]"></div>
              <div className="flex justify-center items-center h-full pb-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-500">SMS Forwarder</div>
                  <div className="text-lg mt-2 text-purple-600">Battery Efficient</div>
                </div>
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <div className="h-4 w-32 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Easy Setup Feature - Right text, left image */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Easy Setup</h3>
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>Ready in minutes</h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Configure your forwarding rules in minutes with our intuitive interface. No technical knowledge required.
            </p>
            <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-yellow-500">•</div>
                Simple guided setup
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-yellow-500">•</div>
                Quick configuration of rules
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] rounded-[40px] shadow-xl border-8 border-gray-200 overflow-hidden bg-gray-100">
              <div className="absolute top-0 w-full h-6 bg-gray-200 rounded-t-[32px]"></div>
              <div className="flex justify-center items-center h-full pb-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-500">SMS Forwarder</div>
                  <div className="text-lg mt-2 text-yellow-600">Easy Setup</div>
                </div>
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <div className="h-4 w-32 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="mt-24 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${isDarkMode ? 'text-white' : ''}`}>Advanced SMS Forwarding</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-16`}>
            Professional features to make message forwarding powerful and flexible
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : ''}`}>Multiple Destinations</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Forward your messages to multiple devices, email addresses, or messaging apps simultaneously.
              </p>
            </div>
            
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : ''}`}>Custom Templates</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Create custom message templates to format your forwarded messages exactly how you want them.
              </p>
            </div>
            
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : ''}`}>Automated Rules</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Set up automated rules for different senders, time periods, or message types to stay organized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 