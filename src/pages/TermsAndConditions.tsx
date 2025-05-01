import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions for SMS Forwarder</h1>
      <p className="text-gray-600 mb-8">Last updated: May 1, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By downloading, installing, or using the SMS Forwarder application ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
        <p className="text-gray-700 mb-4">
          SMS Forwarder is an application that allows users to automatically forward incoming text messages (SMS) to another phone number based on user-configured filters. The App requires certain permissions to function properly, including:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>READ_CONTACTS</li>
          <li>RECEIVE_SMS</li>
          <li>READ_SMS</li>
          <li>SEND_SMS</li>
          <li>FOREGROUND_SERVICE</li>
          <li>FOREGROUND_SERVICE_DATA_SYNC</li>
          <li>WAKE_LOCK</li>
          <li>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">3.1. You are responsible for:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Ensuring you have the right to forward messages from the source number</li>
            <li>Complying with all applicable laws and regulations regarding SMS forwarding</li>
            <li>Maintaining the security of your device and the App</li>
            <li>Not using the App for any illegal or unauthorized purposes</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">3.2. You acknowledge that:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>The App is provided "as is" without any warranties</li>
            <li>We are not responsible for any misuse of the App</li>
            <li>You are solely responsible for any consequences arising from the use of the App</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Privacy</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>All data, including your forwarding rules and filters, are stored locally on your device only.</li>
          <li>No data is collected, stored, or transmitted to our servers or any third parties.</li>
          <li>If you uninstall the App, all your configurations will be deleted and will need to be reconfigured upon reinstallation.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>We shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of the App.</li>
          <li>We do not guarantee that the App will be error-free or uninterrupted.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
        <p className="text-gray-700">
          We reserve the right to modify these terms at any time. We will notify users of any material changes through the App or via email.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
        <p className="text-gray-700">
          If you have any questions about these Terms and Conditions, please contact us at [Your Contact Email].
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="text-gray-700">
          These terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions; 