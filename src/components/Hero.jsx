import React from 'react';
import { ArrowRight, Download, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero anim-fade-in">
      <div className="landing-container hero-content">
        <div className="hero-badge">
          <ShieldCheck size={16} />
          <span>Trusted by Professionals and Businesses</span>
        </div>

        <h1>
          Master Your Business with <span>Xtromac</span>
        </h1>

        <p className="hero-subtitle">
          The ultimate Professional Finance &amp; Inventory Management solution for modern enterprises and retail businesses. Streamline your operations with powerful insights.
        </p>



        <div className="hero-visual">
          <div className="visual-placeholder glass" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
