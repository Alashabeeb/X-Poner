import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import MarketTrends from './components/MarketTrends';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Process />
      <Stats />
      <MarketTrends />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
