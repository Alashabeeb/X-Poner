import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your brand, goals, audience, and competitive landscape.',
    image: '/images/process-1.jpg',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We craft data-driven strategies tailored to your unique needs and objectives.',
    image: '/images/process-2.jpg',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our team implements campaigns across digital, broadcast, and experiential platforms.',
    image: '/images/process-3.jpg',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'We track performance in real-time and optimize for maximum impact and ROI.',
    image: '/images/process-4.jpg',
  },
];

function Process() {
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
    <section className="process" ref={sectionRef}>
      <div className="container">
        <div className="process-header animate-on-scroll">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            Meticulously designed to deliver exceptional results and maximize ROI for our clients.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div
              className="process-step animate-on-scroll"
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="process-step-image">
                <img src={step.image} alt={step.title} />
                <div className="process-step-number">{step.number}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
