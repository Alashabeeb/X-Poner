import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';

const ServicesPage = () => {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <Services />
        <Process />
        <CTA />
      </div>
    </>
  );
};

export default ServicesPage;
