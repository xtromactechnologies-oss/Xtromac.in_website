import React, { useState, useEffect } from 'react';
import { Menu, X, Globe2 } from 'lucide-react';

const Navbar = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="landing-container nav-content">
        <a href="/" className="nav-logo">
          <div className="logo-icon">X</div>
          <span>XTROMAC</span>
        </a>

        <div className="nav-links desktop-only">
          <a href="#features">Solutions</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#pricing">Pricing</a>
          <a href="#download">Download</a>
          <button onClick={onContactClick} className="nav-contact-btn">
            Get in touch
          </button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
          <a href="#enterprise" onClick={() => setIsMobileMenuOpen(false)}>Enterprise</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <a href="#download" onClick={() => setIsMobileMenuOpen(false)}>Download</a>
          <button onClick={() => { onContactClick(); setIsMobileMenuOpen(false); }} className="nav-contact-btn">
            Get in touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
