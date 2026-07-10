import { useEffect, useMemo, useRef, useState } from 'react';

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
const VIEW_W = 900;
const LEFT_X = 324;
const RIGHT_X = 576;
const CENTER_X = 450;

function buildSnakePaths(count) {
  const totalHeight = count * ROW_HEIGHT;
  const points = [{ x: CENTER_X, y: 0 }];

  for (let i = 0; i < count; i++) {
    const y = i * ROW_HEIGHT + ROW_HEIGHT / 2;
    const x = i % 2 === 0 ? LEFT_X : RIGHT_X;
    points.push({ x, y });
  }
  points.push({ x: CENTER_X, y: totalHeight });

  const segments = [];
  for (let i = 0; i < points.length - 1; i++) {
    const prev = points[i];
    const curr = points[i + 1];
    const midY = (prev.y + curr.y) / 2;
    segments.push(`M ${prev.x},${prev.y} C ${prev.x},${midY} ${curr.x},${midY} ${curr.x},${curr.y}`);
  }
  return { segments, totalHeight };
}

function Services() {
  const sectionRef = useRef(null);
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const { segments, totalHeight } = useMemo(() => buildSnakePaths(services.length), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const idx = entry.target.dataset.index;
            if (idx !== undefined) {
              setVisibleIndices((prev) => {
                const next = new Set(prev);
                next.add(parseInt(idx, 10));
                return next;
              });
            }
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
            {segments.map((d, i) => (
              <path key={`bg-${i}`} d={d} className="snake-path-bg" />
            ))}
            {segments.map((d, i) => {
              // segment i goes to card i (except the last segment which goes from last card to bottom)
              // If card i is visible (or previous is visible), draw the path.
              // To ensure it draws as the card appears, we link segment i to card i.
              const isVisible = visibleIndices.has(i === segments.length - 1 ? i - 1 : i);
              return (
                <path 
                  key={`fg-${i}`} 
                  d={d} 
                  className={`snake-path-segment ${isVisible ? 'draw-in' : ''}`} 
                />
              );
            })}
          </svg>

          {services.map((service, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';
            return (
              <div
                className="snake-row"
                key={service.number}
                id={`service-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                style={{ height: ROW_HEIGHT, top: index * ROW_HEIGHT }}
              >
                <div
                  className={`snake-node animate-on-scroll node-${side}`}
                  style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
                >
                  {service.number}
                </div>
                <div
                  className={`snake-card animate-on-scroll snake-${side}`}
                  data-index={index}
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
