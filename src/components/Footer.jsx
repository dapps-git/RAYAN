import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000000',
      color: '#fff',
      padding: '5rem 0 2rem 0',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '3rem',
          marginBottom: '2rem'
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img
                src="/assets/logo.jpeg"
                alt="Rayan Logo"
                style={{ height: '50px', borderRadius: '4px' }}
              />

            </div>
            <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.8' }}>
              Experience the pinnacle of service apartment living. Where luxury meets convenience in the heart of the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.8, fontSize: '0.95rem' }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif", color: 'var(--accent)' }}>Contact Information</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.9, fontSize: '0.95rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <span style={{ marginTop: '0.3rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </span>
                <span>Gandhi Nagar St, beside Moulana hospital,<br />Perinthalmanna, Kerala 679322</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </span>
                <a href="tel:+917591900909" style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--accent)' }}>+91 75919 00909</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </span>
                <a href="mailto:inforayanapartment@gmail.com">inforayanapartment@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', opacity: 0.5, fontSize: '0.8rem' }}>
          <p>&copy; {new Date().getFullYear()} Rayan Service Apartment. All rights reserved.</p>
          <p>Designed for Premium Living</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
