import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="landing-container">
        <div className="section-header anim-fade-in">
          <h2>Product Plans</h2>
          <p>Transparent pricing tailored for every stage of your business growth.</p>
        </div>

        <div className="pricing-container dual-product">
          {/* Xtromac Mini */}
          <div className="pricing-card glass anim-fade-in">
            <div className="card-header">
              <h3>Xtromac Mini</h3>
              <p>Essential Accounting for Startups</p>
            </div>

            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">1999</span>
              <span className="period">/one-time</span>
            </div>

            <ul className="price-features">
              <li><Check size={18} /> Full Ledger Management</li>
              <li><Check size={18} /> Automated Interest Workings</li>
              <li><Check size={18} /> Multi-Business Accounting</li>
              <li><Check size={18} /> Payments &amp; Receipts Tracking</li>
              <li><Check size={18} /> Reports in Excel/PDF</li>
              <li className="disabled-feature"><X size={18} /> Stock &amp; Inventory</li>
            </ul>

            <a href="#download" className="btn btn-secondary full-width">Choose Mini</a>
          </div>

          {/* Xtromac Premium */}
          <div className="pricing-card featured anim-fade-in">
            <div className="card-popular">Coming Soon to Play Store</div>
            <div className="card-header">
              <h3>Xtromac Premium</h3>
              <p>Advance Android Accounting App</p>
            </div>

            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">1499</span>
              <span className="period">/per annum</span>
            </div>

            <div className="old-price-container">
              <span className="old-price">₹2499</span>
              <span className="discount-badge">SAVE ₹1000</span>
            </div>

            <ul className="price-features">
              <li><Check size={18} /> Everything in Mini</li>
              <li><Check size={18} /> Journal Entries &amp; Invoicing</li>
              <li><Check size={18} /> Stock/Inventory (Single Location)</li>
              <li><Check size={18} /> Stock Journal &amp; Reconciliation</li>
              <li><Check size={18} /> GST Ready Sales Reports</li>
              <li><Check size={18} /> Full Trial Balance Reporting</li>
            </ul>

            <a href="#download" className="btn btn-primary full-width">Go Premium</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
