import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('#about .animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: '📡', title: 'ATL & BTL Marketing', desc: 'Mass media to targeted campaigns' },
    { icon: '🤖', title: 'Social AI', desc: 'AI-powered social engagement' },
    { icon: '📊', title: 'Data Analytics', desc: 'Real-time performance tracking' },
    { icon: '🔍', title: 'SEO & Content', desc: 'Visibility and engagement' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid animate-on-scroll">
          {/* LEFT COLUMN */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img
                src="/images/about-team.png"
                alt="X-Poner Team"
                className="about-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
              />
              <div className="about-float-card">
                <span className="about-float-number">Since 2022</span>
                <span className="about-float-text">Founded</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-content">
            <span className="section-label animate-on-scroll">Who We Are</span>
            <h2 className="section-title animate-on-scroll">
              Pioneering Technology Marketing Solutions
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Exponer is a leading technology marketing firm that combines data, media, technology,
              and creativity to build high-impact marketing ecosystems for brands, institutions, and
              campaigns. Our integrated approach enables organizations to deploy targeted messaging
              across digital, broadcast, and experiential platforms while tracking performance in
              real-time analytics and innovative strategies that drive brand visibility and audience
              engagement across multiple platforms.
            </p>
            <p className="section-subtitle animate-on-scroll" style={{ marginTop: '1rem' }}>
              Exponer has a rich history of success, built on years of experience and industry
              expertise. We specialize in Above-the-Line, Below-the-Line, Digital marketing, Social
              Artificial Intelligence, SEO, Content strategy, Social media management, and Data
              analytics, providing a comprehensive suite of services tailored to meet the unique
              needs of our clients.
            </p>

            {/* VISION & MISSION */}
            <div className="about-vision-mission animate-on-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>👁️</div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                  Our Vision
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.85 }}>
                  To be the foremost innovator in technology-driven marketing solutions, empowering
                  brands to reach their full potential.
                </p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🚀</div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                  Our Mission
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.85 }}>
                  To deliver cutting-edge marketing strategies that drive engagement, growth, and
                  brand loyalty through the intelligent use of technology.
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div className="about-features animate-on-scroll">
              {features.map((feature, index) => (
                <div className="about-feature-item" key={index}>
                  <span className="about-feature-icon">{feature.icon}</span>
                  <div>
                    <strong>{feature.title}</strong>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
