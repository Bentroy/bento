import React from 'react';
import './App.css';

function App() {
  return (
    <div className="funnel-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="logo">COVE.</h1>
        <a href="https://wa.me/yourwhatsappnumber" className="contact-btn" target="_blank" rel="noreferrer">
          WhatsApp Us
        </a>
      </header>

      {/* The Bento Grid Section */}
      <main className="bento-grid">
        {/* Box 1: The Hero Image (Takes up 2 columns) */}
        <div className="bento-item hero-box">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" 
            alt="Luxury Architecture" 
            className="bento-img"
          />
          <div className="bento-overlay">
            <h2>Lekki Phase 1 Residence</h2>
          </div>
        </div>

        {/* Box 2: Stats or Text */}
        <div className="bento-item stat-box">
          <h3>50+</h3>
          <p>Premium Projects Delivered</p>
        </div>

        {/* Box 3: Secondary Image (Tall) */}
        <div className="bento-item tall-box">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80" 
            alt="Interior Render" 
            className="bento-img"
          />
        </div>

        {/* Box 4: Another Secondary Image */}
        <div className="bento-item small-box">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" 
            alt="Living Room" 
            className="bento-img"
          />
        </div>

        {/* Box 5: The Call to Action Box */}
        <div className="bento-item cta-box">
          <h2>Ready to Build?</h2>
          <p>Secure your slot for Q3.</p>
          <button className="primary-btn">Book Consultation</button>
        </div>
      </main>
    </div>
  );
}

export default App;