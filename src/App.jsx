import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import EnterpriseSection from './components/EnterpriseSection';
import Pricing from './components/Pricing';
import Download from './components/Download';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      <main>
        <Hero />
        <EnterpriseSection />
        <Features />
        <Pricing />
        <Download />
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

export default App;
