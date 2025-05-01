import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Automate Your SMS Forwarding
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Easily forward important messages to any number with customizable filters. 
                Keep your important messages flowing, even when you're away.
              </p>
              <a
                href="[Your Google Play Store Link]"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Download Now
              </a>
            </div>
            <div className="relative">
              <img
                src="/app-screenshot.png"
                alt="SMS Forwarder App Screenshot"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Smart Filtering</h3>
              <p className="text-gray-600">
                Forward messages based on sender, keywords, or specific content patterns.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Reliable Service</h3>
              <p className="text-gray-600">
                Works in the background with battery optimization to ensure no messages are missed.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Privacy First</h3>
              <p className="text-gray-600">
                All data stays on your device. No data collection or third-party sharing.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Easy Setup</h3>
              <p className="text-gray-600">
                Simple configuration process to get your forwarding rules up and running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Your Privacy Matters</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              We believe in complete transparency and privacy. SMS Forwarder:
            </p>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-2">✓</span>
                Stores all data locally on your device
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-2">✓</span>
                Never collects or shares your data
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-2">✓</span>
                Requires permissions only for essential functionality
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-2">✓</span>
                Deletes all data upon uninstallation
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 