import React from 'react';
import HeroSection from '../components/HeroSection';
import PrivacySection from '../components/PrivacySection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <PrivacySection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </div>
  );
};

export default Home; 