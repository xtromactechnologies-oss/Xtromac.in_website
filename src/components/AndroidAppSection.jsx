import React from 'react';
import { Play, CheckCircle2, Download } from 'lucide-react';

const AndroidAppSection = () => {
  return (
    <section id="android-app" className="section enterprise-section" style={{ paddingTop: '2rem' }}>
      <div className="landing-container">
        <div className="enterprise-box glass anim-fade-in">
          <div className="enterprise-info">
            <div className="badge enterprise-badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', border: '1px solid rgba(16, 185, 129, 0.3)' }}>Premium Edition</div>
            <h2>Xtromac <span>Android App</span></h2>
            <p>Advance Android Accounting App to manage your business on the go. Experience seamless synchronization and robust features available right from your mobile device.</p>
            <div className="price" style={{ margin: '1.5rem 0', display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
              <span className="currency" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₹</span>
              <span className="amount" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>1499</span>
              <span className="period" style={{ fontSize: '1rem', color: '#8b949e' }}>/per annum</span>
            </div>

            <ul className="info-list">
              <li><CheckCircle2 size={18} /> Journal Entries &amp; Invoicing</li>
              <li><CheckCircle2 size={18} /> Stock/Inventory (Single Location)</li>
              <li><CheckCircle2 size={18} /> GST Ready Sales Reports</li>
              <li><CheckCircle2 size={18} /> Full Trial Balance Reporting</li>
            </ul>

            <div style={{ marginTop: '2rem' }}>
              <a 
                href="https://play.google.com/store/apps/details?id=com.xtromac.app" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#10B981', color: '#fff', border: 'none' }}
              >
                Download on Play Store
                <Download size={20} />
              </a>
            </div>
          </div>

          <div className="enterprise-video">
            <div className="video-box">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YJVtsgqPQP4"
                title="Xtromac Android App Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-caption">Watch our app tutorial</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndroidAppSection;
