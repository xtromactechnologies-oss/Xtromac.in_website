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
          <span>XTROMAC<sup style={{ fontSize: '0.5em' }}>&trade;</sup></span>
        </a>

        <div className="nav-links desktop-only">
          <a href="https://www.youtube.com/@Xtromac" target="_blank" rel="noopener noreferrer">Tutorial Videos</a>
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
          <a href="https://www.youtube.com/@Xtromac" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Tutorial Videos</a>
          <button onClick={() => { onContactClick(); setIsMobileMenuOpen(false); }} className="nav-contact-btn">
            Get in touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
