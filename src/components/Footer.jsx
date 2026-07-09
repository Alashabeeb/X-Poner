import React from 'react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#footer' },
  ];

  const services = [
    'Digital Marketing',
    'Social AI',
    'SEO & SEM',
    'Content Creation',
    'Data Analytics',
    'ATL Marketing',
  ];

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="X-Poner" className="footer-logo-mark" />
              <span className="footer-logo-word">
                <span>
                  <span className="nav-logo-x">X-P</span>
                  <span className="nav-logo-oner">oner</span>
                </span>
                <span className="nav-logo-tagline">Business Solutions</span>
              </span>
            </div>
            <p>
              Elevating brands in the digital age through pioneering technology
              marketing solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li>📍 4, Okemesi Crescent, Garki II, Abuja, Nigeria</li>
              <li>
                <a href="tel:+2347025000063">📞 +234-70250-00063</a>
              </li>
              <li>
                <a href="mailto:hello@exponer.africa">✉️ hello@exponer.africa</a>
              </li>
            </ul>
            <a
              href="https://wa.me/2347025000063"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem', marginTop: '0.75rem' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2022 - {new Date().getFullYear()} X-Poner (Exponer). All rights reserved.</p>
          <div className="footer-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="X (Twitter)"
            >
              𝕏
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              📷
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
