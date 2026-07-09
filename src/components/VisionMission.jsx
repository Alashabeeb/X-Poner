import { useEffect, useRef } from 'react';

function VisionMission() {
  const sectionRef = useRef(null);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-mission" ref={sectionRef}>
      <div className="container">
        <div className="vm-header animate-on-scroll">
          <div>
            <span className="section-label">How We Think</span>
            <h2 className="section-title">Our Vision &amp; Mission</h2>
            <p className="section-subtitle">
              At Exponer, we are driven by a clear vision and a purposeful mission that
              guide our actions and strategies every day.
            </p>
          </div>
          <div className="vm-header-image">
            <img
              src="/images/vision-mission-header.jpg"
              alt="Brand visibility and audience intelligence across Africa"
            />
          </div>
        </div>

        <div className="vm-grid">
          <div className="vm-card animate-on-scroll">
            <div className="vm-card-image">
              <img src="/images/vision-cloud.jpg" alt="Our Vision" />
            </div>
            <div className="vm-card-body">
              <h4>Vision</h4>
              <p>
                To be the foremost innovator in technology-driven marketing solutions,
                empowering brands to reach their full potential.
              </p>
            </div>
          </div>

          <div className="vm-card animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div className="vm-card-image">
              <img src="/images/mission-cloud.jpg" alt="Our Mission" />
            </div>
            <div className="vm-card-body">
              <h4>Mission</h4>
              <p>
                To deliver cutting-edge marketing strategies that drive engagement,
                growth, and brand loyalty through the intelligent use of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
