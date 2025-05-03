import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm fixed w-full top-0 z-50 transition-colors`}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            SMS Forwarder
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors`}>Home</Link>
            <Link to="/privacy-policy" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors`}>Privacy</Link>
            <Link to="/terms-and-conditions" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors`}>Terms</Link>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-4 px-4`}>
            <Link to="/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/privacy-policy" className="block py-2" onClick={() => setIsMenuOpen(false)}>Privacy</Link>
            <Link to="/terms-and-conditions" className="block py-2" onClick={() => setIsMenuOpen(false)}>Terms</Link>
            <button 
              onClick={toggleDarkMode}
              className="flex items-center py-2 focus:outline-none"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              <span className="ml-2">
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        )}
      </header>

      <main className={`flex-grow pt-20 ${isMenuOpen ? 'pt-48' : 'pt-16'}`}>
        {children}
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="text-2xl font-bold text-indigo-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                SMS Forwarder
              </Link>
              <p className="mt-4 text-gray-400">
                Easily forward important messages to any number with customizable filters.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Download</h3>
              <a
                href="[Your Google Play Store Link]"
                className="inline-block bg-gray-700 text-white hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                Get it on Google Play
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SMS Forwarder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 