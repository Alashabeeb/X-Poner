import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Background Image */}
      <div className="hero-bg-image">
        <img src="/images/hero-bg.png" alt="" aria-hidden="true" />
      </div>
      
      {/* Background Elements */}
      <div className="hero-bg-elements">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
        <div className="hero-particles">
          <div className="hero-particle" style={{ top: '12%', left: '8%', animationDelay: '0s' }}></div>
          <div className="hero-particle" style={{ top: '28%', left: '75%', animationDelay: '1s' }}></div>
          <div className="hero-particle" style={{ top: '55%', left: '20%', animationDelay: '2s' }}></div>
          <div className="hero-particle" style={{ top: '70%', left: '85%', animationDelay: '0.5s' }}></div>
          <div className="hero-particle" style={{ top: '40%', left: '50%', animationDelay: '1.5s' }}></div>
          <div className="hero-particle" style={{ top: '85%', left: '35%', animationDelay: '3s' }}></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Technology Marketing
        </div>

        <h1 className="hero-title">
          Elevating Brands in
          <br />
          <span className="hero-title-gradient">the Digital Age</span>
        </h1>

        <p className="hero-description">
          We are a pioneering technology marketing firm specializing in cutting-edge
          strategies that merge innovation, creativity, and data-driven insights to
          propel brands to new heights.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/2347025000063"
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat With Us
          </a>
          <a href="#services" className="btn btn-secondary">
            Our Services
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
