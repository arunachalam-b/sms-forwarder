import React from 'react';
import { useDarkMode } from './DarkModeContext';

const FeaturesSection: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`} id="features">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : ''}`}>Powerful Features</h2>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center max-w-3xl mx-auto mb-16`}>
          Everything you need to track, manage, and improve your financial health
        </p>

        {/* Budget Tracking Feature - Left text, right image */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Budget Tracking</h3>
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Stay on top of your budget</h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Track your budgets with categories and spend limits. Get a clear overview of where your money goes and where to save.
            </p>
            <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-indigo-500">•</div>
                Set monthly spending targets
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-indigo-500">•</div>
                Track progress with visual indicators
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className={`rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <img 
                src="/images/budget-screen.png" 
                alt="Budget tracking interface" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/240x480/indigo/white?text=SMS+Forwarder";
                }}
              />
            </div>
          </div>
        </div>

        {/* Transaction Logging Feature - Right text, left image */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-24">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Transaction Logging</h3>
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Easily log every transaction</h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Upload images, PDFs, screenshots, or bank statements. Let our AI handle the rest automatically.
            </p>
            <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-green-500">•</div>
                Import from multiple sources
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-green-500">•</div>
                Extract transaction details automatically
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className={`rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <img 
                src="/images/transaction-logging.png" 
                alt="Transaction logging interface" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/240x480/indigo/white?text=SMS+Forwarder";
                }}
              />
            </div>
          </div>
        </div>

        {/* Financial Reports Feature - Left text, right image */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Financial Reports</h3>
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Improves your finances</h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Beautiful, easy-to-read reports with AI-powered categorization give you insights to make better financial decisions.
            </p>
            <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-purple-500">•</div>
                95%+ AI categorization accuracy
              </li>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-purple-500">•</div>
                Monthly and yearly breakdown
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-purple-500">•</div>
                Spending trend analysis
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className={`rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <img 
                src="/images/financial-reports.png" 
                alt="Financial reports interface" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/240x480/indigo/white?text=SMS+Forwarder";
                }}
              />
            </div>
          </div>
        </div>

        {/* Transaction History Feature - Right text, left image */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>Transaction History</h3>
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>All transactions in one place</h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Organized, dark-mode friendly transaction history that makes it easy to track your spending on the go.
            </p>
            <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center mb-2">
                <div className="mr-2 text-yellow-500">•</div>
                Edit and recategorize with ease
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-yellow-500">•</div>
                Dark mode for comfortable viewing
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className={`rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <img 
                src="/images/transaction-history.png" 
                alt="Transaction history interface" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/240x480/indigo/white?text=SMS+Forwarder";
                }}
              />
            </div>
          </div>
        </div>

        {/* AI-Powered Features Section */}
        <div className="mt-24 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${isDarkMode ? 'text-white' : ''}`}>AI-Powered Financial Insights</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-16`}>
            Experience the power of AI in every aspect of your financial management
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : ''}`}>Save Hours Monthly</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Automatic categorization saves you hours of manual entry and organization every month.
              </p>
            </div>
            
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : ''}`}>AI Categorization</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our AI automatically categorizes your transactions with high accuracy.
              </p>
            </div>
            
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : ''}`}>Actionable Insights</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Get personalized insights and recommendations to improve your financial health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 