import React from 'react';
import { Play, CheckCircle2 } from 'lucide-react';

const EnterpriseSection = ({ onContactClick }) => {
  return (
    <section id="enterprise" className="section enterprise-section">
      <div className="landing-container">
        <div className="enterprise-box glass anim-fade-in">
          <div className="enterprise-info">
            <div className="badge enterprise-badge">Enterprise Edition</div>
            <h2>Inventory Management System <span>V3.0+</span></h2>
            <p>Our flagship solution designed for large-scale operations. Manage multiple locations, complex supply chains, and high-volume transactions with ease.</p>

            <ul className="info-list">
              <li><CheckCircle2 size={18} /> Real-time Stock Tracking</li>
              <li><CheckCircle2 size={18} /> Multi-Warehouse Support</li>
              <li><CheckCircle2 size={18} /> Advanced Reporting &amp; Analytics</li>
              <li><CheckCircle2 size={18} /> Multi user support with access control</li>
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <button onClick={onContactClick} className="btn btn-secondary">
                Contact for Demo &amp; Installation
              </button>
            </div>
          </div>

          <div className="enterprise-video">
            <div className="video-box">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oWmEeZPqDIw"
                title="Xtromac Enterprise Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-caption">Watch our system in action</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
