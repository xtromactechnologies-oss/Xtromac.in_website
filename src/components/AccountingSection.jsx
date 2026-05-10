import React from 'react';
import { Play, CheckCircle2, Download } from 'lucide-react';

const AccountingSection = () => {
  return (
    <section id="accounting" className="section enterprise-section" style={{ paddingTop: '2rem' }}>
      <div className="landing-container">
        <div className="enterprise-box glass anim-fade-in" style={{ direction: 'rtl' }}>
          <div className="enterprise-info" style={{ direction: 'ltr' }}>
            <div className="badge enterprise-badge" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', border: '1px solid rgba(59, 130, 246, 0.3)' }}>Desktop Edition</div>
            <h2>Xtromac Desktop <span>Accounting</span></h2>
            <p>Our powerful accounting solution tailored for precision and speed. Experience lightning-fast data entry, robust financial reporting, and seamless tax compliance.</p>

            <ul className="info-list">
              <li><CheckCircle2 size={18} /> Fast data entry with multi tab system</li>
              <li><CheckCircle2 size={18} /> Comprehensive Financial Reports</li>
              <li><CheckCircle2 size={18} /> GST ready reports</li>
              <li><CheckCircle2 size={18} /> Seamless Excel &amp; PDF Export</li>
              <li><CheckCircle2 size={18} /> Free trial of 60 days</li>
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <a 
                href="https://drive.google.com/drive/folders/1UmOzb1Sg8bzX0-kaJySuHaoy26ZD21X-?usp=drive_link" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Download for Windows
                <Download size={20} />
              </a>
            </div>
          </div>

          <div className="enterprise-video" style={{ direction: 'ltr' }}>
            <div className="video-box" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#161b22' }}>
              <img 
                src="/accounting-app.png" 
                alt="Xtromac Desktop Accounting Application" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23161b22'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%238b949e'%3EPlease place your screenshot in public/accounting-app.png%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <p className="video-caption">View our accounting dashboard</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountingSection;
