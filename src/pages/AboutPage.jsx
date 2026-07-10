import React from 'react';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import Team from '../components/Team';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <About />
        <VisionMission />
        <Team />
        <CTA />
      </div>
    </>
  );
};

export default AboutPage;
