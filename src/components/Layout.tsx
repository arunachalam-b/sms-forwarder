import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            SMS Forwarder
          </Link>
          <div className="space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/privacy-policy" className="text-gray-700 hover:text-indigo-600">Privacy</Link>
            <Link to="/terms-and-conditions" className="text-gray-700 hover:text-indigo-600">Terms</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} SMS Forwarder. All rights reserved.</p>
          <div className="space-x-4">
            <Link to="/privacy-policy" className="text-white hover:text-indigo-400">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-white hover:text-indigo-400">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 