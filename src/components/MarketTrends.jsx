import { useEffect, useRef } from 'react';

function MarketTrends() {
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
    <section className="market-trends" ref={sectionRef}>
      <div className="container">
        <div className="mt-grid">
          <div className="mt-images animate-on-scroll">
            <img src="/images/market-trend-2.jpg" alt="Modern glass office towers" className="mt-img mt-img-1" />
            <img src="/images/market-trend-3.jpg" alt="Skyscraper against the sky" className="mt-img mt-img-2" />
            <img src="/images/market-trend-1.jpg" alt="City skyline looking upward" className="mt-img mt-img-3" />
          </div>

          <div className="mt-content animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <span className="section-label">Staying Ahead</span>
            <h2 className="section-title">Current Market Trends</h2>
            <p className="section-subtitle">
              In the fast-paced world of technology marketing, staying ahead of the
              curve is crucial. At Exponer, we continuously monitor and adapt to the
              latest market trends to ensure our clients remain competitive and
              relevant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketTrends;
