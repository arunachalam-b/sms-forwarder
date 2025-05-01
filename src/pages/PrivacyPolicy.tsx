import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy for SMS Forwarder</h1>
      <p className="text-gray-600 mb-8">Last updated: May 1, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700">
          This Privacy Policy explains how SMS Forwarder ("we", "our", or "us") handles your data. We are committed to protecting your privacy and ensuring you have a positive experience when using our application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Do Not Collect</h2>
        <p className="text-gray-700 mb-4">We want to be completely transparent about our data practices. SMS Forwarder:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Does NOT collect any personal information</li>
          <li>Does NOT store any messages on our servers</li>
          <li>Does NOT share any data with third parties</li>
          <li>Does NOT track your usage patterns</li>
          <li>Does NOT use analytics or tracking tools</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Local Data Storage</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">3.1. All data is stored locally on your device only, including:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Your forwarding rules and filters</li>
            <li>App preferences and settings</li>
            <li>Forwarding history (if enabled)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">3.2. Data Deletion:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>When you uninstall the App, all stored data is automatically deleted</li>
            <li>You will need to reconfigure your settings if you reinstall the App</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Required Permissions</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">4.1. Essential Permissions:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>READ_CONTACTS: To allow you to select contacts for forwarding rules</li>
            <li>RECEIVE_SMS: To detect incoming messages</li>
            <li>READ_SMS: To read message content for filtering</li>
            <li>SEND_SMS: To forward messages to your chosen number</li>
            <li>FOREGROUND_SERVICE: To maintain the forwarding service</li>
            <li>FOREGROUND_SERVICE_DATA_SYNC: Required for Android 14+ compatibility</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">4.2. Optional but Recommended Permissions:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>WAKE_LOCK: To ensure reliable message forwarding</li>
            <li>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: To prevent the App from being killed by battery optimization</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="text-gray-700 mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Access any data stored on your device</li>
          <li>Delete all App data by uninstalling the App</li>
          <li>Control which permissions you grant to the App</li>
          <li>Stop using the App at any time</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
        <p className="text-gray-700">
          This App is not intended for use by children under 13 years of age. We do not knowingly collect any personal information from children under 13.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at [Your Contact Email].
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 