import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Olumide Fagbohun',
    avatar: '/images/testimonial-olumide.jpg',
    quote:
      'X-Poner transformed our digital presence and significantly increased our online engagement. Their innovative strategies and dedicated support have been instrumental in our growth.',
    stars: 5,
  },
  {
    name: 'Eleanor Fitzgerald',
    avatar: '/images/testimonial-eleanor.jpg',
    quote:
      'Their expertise in SEO and content marketing is unmatched. We\'ve seen a remarkable improvement in our website traffic and search rankings since partnering with X-Poner.',
    stars: 5,
  },
];

const caseStudies = [
  {
    client: 'Henrietta Mitchell',
    image: '/images/case-study-1.jpg',
    metric: '200%',
    metricLabel: 'Increase in Website Traffic',
    description:
      'A leading e-commerce company that saw a 200% increase in website traffic within six months. Our comprehensive SEO and content marketing strategy boosted their online visibility and attracted more qualified leads.',
  },
  {
    client: 'Henry Obinna',
    image: '/images/case-study-3.jpg',
    metric: '150%',
    metricLabel: 'Boost in Social Media Engagement',
    description:
      'A prominent tech startup that experienced a 150% boost in social media engagement. By leveraging targeted social media campaigns and influencer partnerships, we enhanced their brand presence and user interaction.',
  },
];

function Testimonials() {
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

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="testimonials-header animate-on-scroll">
          <span className="section-label">What People Say</span>
          <h2 className="section-title">Client Testimonials &amp; Success Stories</h2>
        </div>

        {/* Testimonials Row */}
        <div className="testimonials-row animate-on-scroll">
          {testimonials.map((t, i) => (
            <div className="testimonial-card glass-card" key={i}>
              <span className="testimonial-quote-mark">&ldquo;</span>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-footer">
                <div className="testimonial-person">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <span className="testimonial-name">{t.name}</span>
                </div>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <span className="star" key={si}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Row */}
        <div className="case-studies-row animate-on-scroll">
          {caseStudies.map((cs, i) => (
            <div className="case-study-card glass-card" key={i}>
              <div className="case-study-image">
                <img src={cs.image} alt="" aria-hidden="true" />
              </div>
              <div className="case-study-accent-bar"></div>
              <div className="case-study-content">
                <div className="case-study-metric-badge">
                  <span className="case-study-metric">{cs.metric}</span>
                  <span className="case-study-metric-label">{cs.metricLabel}</span>
                </div>
                <p className="case-study-description">{cs.description}</p>
                <span className="case-study-client">&mdash; {cs.client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
