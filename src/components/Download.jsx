import React from 'react';
import { Monitor, Smartphone, Download as DownloadIcon } from 'lucide-react';

const Download = () => {
  return (
    <section id="download" className="section download-section">
      <div className="landing-container">
        <div className="download-box anim-fade-in">
          <h2>Ready to get started?</h2>
          <p>Get the latest version of Xtromac and take full control of your business data today.</p>

          <div className="download-grid">
            <div className="download-option glass">
              <Smartphone size={48} className="icon" />
              <h3>Premium Edition</h3>
              <p>For Android Devices</p>
              <div className="version-info">Build: V3.1.1</div>
              <a
                href="https://drive.google.com/drive/folders/1UmOzb1Sg8bzX0-kaJySuHaoy26ZD21X-"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Premium APK
                <DownloadIcon size={18} />
              </a>
            </div>

            <div className="download-option glass">
              <Smartphone size={48} className="icon" />
              <h3>Mini Edition</h3>
              <p>For Android Devices</p>
              <div className="version-info">Build: Latest</div>
              <a
                href="https://drive.google.com/drive/folders/1UmOzb1Sg8bzX0-kaJySuHaoy26ZD21X-"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Mini APK
                <DownloadIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
