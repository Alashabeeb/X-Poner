import { useEffect, useRef } from 'react';

const services = [
  {
    icon: '📢',
    title: 'Above-The-Line Marketing',
    description:
      'Strategic mass media campaigns across TV, radio, and print that amplify your brand message to the widest possible audience with maximum impact.',
    number: '01',
  },
  {
    icon: '🌐',
    title: 'Digital Marketing Strategy',
    description:
      'Comprehensive digital campaigns leveraging SEO, PPC, email marketing, and programmatic advertising to reach and convert your target audience.',
    number: '02',
  },
  {
    icon: '🤖',
    title: 'Social AI & Automation',
    description:
      'Harness the power of artificial intelligence to automate social interactions, analyze sentiment, and deliver personalized content at scale.',
    number: '03',
  },
  {
    icon: '🔍',
    title: 'SEO & SEM',
    description:
      'Dominate search engine results with advanced optimization techniques and strategic paid search campaigns that drive qualified traffic.',
    number: '04',
  },
  {
    icon: '✏️',
    title: 'Content Creation',
    description:
      'Compelling storytelling and visual content that captures attention, builds trust, and drives engagement across all digital platforms.',
    number: '05',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    description:
      'End-to-end social media strategy, content planning, community engagement, and performance analytics across all major platforms.',
    number: '06',
  },
  {
    icon: '📈',
    title: 'Data Analytics & Insights',
    description:
      'Transform raw data into actionable insights with advanced analytics, custom dashboards, and strategic recommendations.',
    number: '07',
  },
  {
    icon: '🎨',
    title: 'Brand Identity & Design',
    description:
      'Craft distinctive brand identities with cohesive visual systems that resonate with your target market and stand out from competition.',
    number: '08',
  },
  {
    icon: '💻',
    title: 'Web Development',
    description:
      'Build high-performance, responsive websites and applications that deliver exceptional user experiences and drive conversions.',
    number: '09',
  },
];

function Services() {
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
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-header animate-on-scroll">
        <span className="section-label">What We Do</span>
        <h2 className="section-title">Our Core Services</h2>
        <p className="section-subtitle">
          We deliver end-to-end marketing solutions powered by creativity,
          technology, and data-driven strategy to help your brand thrive in the
          digital age.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="service-card-glow"></div>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-card-number">{service.number}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
