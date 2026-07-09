import { useEffect, useMemo, useRef } from 'react';

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

const ROW_HEIGHT = 240;
const VIEW_W = 700;
const LEFT_X = 175;
const RIGHT_X = 525;
const CENTER_X = 350;

// Build one continuous, smoothly-curving "snake" path that weaves
// left / right through the vertical center of each service row.
function buildSnakePath(count) {
  const totalHeight = count * ROW_HEIGHT;
  const points = [{ x: CENTER_X, y: 0 }];

  for (let i = 0; i < count; i++) {
    const y = i * ROW_HEIGHT + ROW_HEIGHT / 2;
    const x = i % 2 === 0 ? LEFT_X : RIGHT_X;
    points.push({ x, y });
  }
  points.push({ x: CENTER_X, y: totalHeight });

  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x},${midY} ${curr.x},${midY} ${curr.x},${curr.y}`;
  }
  return { d, totalHeight };
}

function Services() {
  const sectionRef = useRef(null);
  const { d: pathD, totalHeight } = useMemo(() => buildSnakePath(services.length), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll, .snake-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="services-header animate-on-scroll">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            We deliver end-to-end marketing solutions powered by creativity,
            technology, and data-driven strategy to help your brand thrive in the
            digital age.
          </p>
        </div>

        <div className="services-hero-image animate-on-scroll">
          <img src="/images/services-hero.jpg" alt="Digital marketing touchpoints" />
        </div>

        <div className="services-snake" style={{ height: totalHeight }}>
          <svg
            className="services-snake-path"
            viewBox={`0 0 ${VIEW_W} ${totalHeight}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={pathD} className="snake-path-bg" />
            <path d={pathD} className="snake-path-fg" />
          </svg>

          {services.map((service, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';
            const nodeStyle = side === 'left' ? { left: '25%' } : { right: '25%' };
            return (
              <div
                className="snake-row"
                key={service.number}
                style={{ height: ROW_HEIGHT, top: index * ROW_HEIGHT }}
              >
                <div className="snake-node" style={nodeStyle}>
                  {service.number}
                </div>
                <div
                  className={`snake-card animate-on-scroll snake-${side}`}
                  style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
                >
                  <div className="service-card-glow"></div>
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
