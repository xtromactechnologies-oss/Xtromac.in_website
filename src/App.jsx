import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EnterpriseSection from './components/EnterpriseSection';
import AccountingSection from './components/AccountingSection';
import AndroidAppSection from './components/AndroidAppSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />

      <main>
        <Hero />
        <AccountingSection />
        <AndroidAppSection />
        <EnterpriseSection onContactClick={() => setIsContactModalOpen(true)} />
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
