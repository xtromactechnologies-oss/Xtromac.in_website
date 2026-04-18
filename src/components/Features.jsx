import React from 'react';
import { LayoutGrid, BarChart3, Database, Zap, ShieldCheck, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Globe2 />,
    title: "Multi-Business Accounting",
    description: "Manage multiple companies, branches, and business units seamlessly within a single unified application."
  },
  {
    icon: <BarChart3 />,
    title: "Advanced Ledgers & Sheets",
    description: "Generate perfectly tallied Trial Balances."
  },
  {
    icon: <Database />,
    title: "Stock & Inventory",
    description: "Real-time stock tracking for single location businesses. Includes Stock Journals and physical inventory reconciliation."
  },
  {
    icon: <Zap />,
    title: "Interest Workings",
    description: "Automated interest calculation engine for outstanding balances and loans with custom rate configurations."
  },
  {
    icon: <ShieldCheck />,
    title: "GST Compliance",
    description: "Generate GST-compliant invoices and statutory financial statements easily."
  },
  {
    icon: <LayoutGrid />,
    title: "Excel/PDF Exports",
    description: "Export all your financial records, reports, and invoices into professional Excel or PDF formats with one click."
  }
];

const Features = () => {
  return (
    <section id="features" className="section features-section">
      <div className="landing-container">
        <div className="section-header anim-fade-in">
          <div className="badge sbm-badge">Solutions for SMBs</div>
          <h2>Powering Small &amp; Medium Businesses</h2>
          <p>Everything you need to manage your business efficiently in one powerful platform.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass anim-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
