import React from 'react';
import { X, Send } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <h2>Get in Touch</h2>
          <p>Have a question or need a custom quote? We're here to help.</p>
        </div>

        {/* Using FormSubmit.co for functionality */}
        <form
          action="https://formsubmit.co/xtromactechnologies@gmail.com"
          method="POST"
          className="contact-form"
        >
          {/* Honeypot to prevent spam */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Disable Captcha for better UX */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Success Redirect */}
          <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Phone Number</label>
            <input type="tel" id="mobile" name="mobile" placeholder="+91 00000 00000" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
