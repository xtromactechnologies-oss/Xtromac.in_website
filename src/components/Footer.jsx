import React from 'react';
import { Mail, Phone, MapPin, Globe2, Share2, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="landing-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="/" className="nav-logo">
              <div className="logo-icon">X</div>
              <span>XTROMAC</span>
            </a>
            <p>Empowering businesses with intelligent financial and inventory management solutions. Built for scale, security, and simplicity.</p>

          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <div className="contact-item">
              <Mail size={18} />
              <span>xtromactechnologies@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+91 88026 09700</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Anaj mandi, Safidon, Haryana</span>
            </div>
            <div className="contact-item">
              <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>Xtromac Technologies Private Limited</span>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/privacy.html">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Xtromac Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
