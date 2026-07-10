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

  const highlights = [
    {
      image: '/images/about-founded.jpg',
      title: 'Founded in 2022',
      desc: 'X-Poner has a rich history of success, built on years of experience and industry expertise.',
    },
    {
      image: '/images/about-expertise.jpg',
      title: 'Expertise',
      desc: 'We specialize in ATL, BTL, Digital marketing, Social AI, SEO, Content strategy, Social media management, and Data analytics.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid animate-on-scroll">
          {/* LEFT COLUMN */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img
                src="/images/about-team.jpg"
                alt="The X-Poner team collaborating"
                className="about-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
              />
              <div className="about-float-card">
                <span className="about-float-number">Since 2022</span>
                <span className="about-float-text">Founded</span>
              </div>
            </div>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div className="about-highlight-item" key={i}>
                  <img src={h.image} alt={h.title} />
                  <div>
                    <h5>{h.title}</h5>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-content">
            <span className="section-label animate-on-scroll">Who We Are</span>
            <h2 className="section-title animate-on-scroll">
              Pioneering Technology Marketing Solutions
            </h2>
            <p className="section-subtitle animate-on-scroll">
              X-Poner is a leading technology marketing firm that combines data, media, technology,
              and creativity to build high-impact marketing ecosystems for brands, institutions, and
              campaigns. Our integrated approach enables organizations to deploy targeted messaging
              across digital, broadcast, and experiential platforms while tracking performance in
              real-time analytics and innovative strategies that drive brand visibility and audience
              engagement across multiple platforms.
            </p>

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
