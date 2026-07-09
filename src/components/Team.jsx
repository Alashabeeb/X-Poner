import React, { useEffect, useRef } from 'react';

const teamMembers = [
  {
    name: 'El-Talib Abdulsalam',
    role: 'CEO & Founder',
    image: '/images/team-ceo.jpg',
  },
  {
    name: 'Tioluwalogo Olakunbi-Black',
    role: 'Chief Marketing Officer',
    image: '/images/team-cmo.jpg',
  },
  {
    name: 'Lateepha Abdul',
    role: 'Head of Digital Strategy',
    image: '/images/team-digital.jpg',
  },
  {
    name: 'Overcomer Idemudia',
    role: 'Lead Data Analyst',
    image: '/images/team-analyst.jpg',
  },
];

const Team = () => {
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
    <section id="team" className="team" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet the Minds Behind X-Poner</h2>
          <p className="section-subtitle">
            A diverse and talented team of professionals driving innovation
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
          }}
          className="team-grid"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="animate-on-scroll team-member-card"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                animationDelay: `${index * 0.15}s`,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--accent-blue)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(46,125,186,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="team-member-image" style={{ overflow: 'hidden' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: '16px 16px 0 0',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              <div style={{ padding: '24px', textAlign: 'center' }}>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--accent-blue)',
                    fontWeight: 500,
                    marginBottom: '16px',
                  }}
                >
                  {member.role}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                  }}
                >
                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-blue)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="#"
                    aria-label={`${member.name} Twitter`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-blue)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="#"
                    aria-label={`${member.name} Email`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-blue)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4l-10 8L2 4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
