import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = "Hello Rayans apartment i would like to know about your service...";
  const whatsappUrl = `https://wa.me/917591900909?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header style={{
      position: 'fixed', // Fixed instead of sticky to always stay at top
      top: 0,
      width: '100%',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Bar */}
      <div style={{
        backgroundColor: 'var(--accent)',
        color: '#fff',
        padding: '0.5rem 0',
        fontSize: '0.85rem'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <span style={{ fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.5px' }}>+91 75919 00909</span>
          </div>

          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <span>inforayanapartment@gmail.com</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span>Perinthalmanna</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        padding: scrolled ? '0.5rem 0' : '1rem 0',
        background: '#000000',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src="/assets/logo.jpeg"
              alt="Rayan Logo"
              style={{ height: '40px', borderRadius: '4px' }}
            />

          </div>

          <ul className="nav-links" style={{
            fontSize: '0.9rem',
            fontWeight: '500',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#ffffff'
          }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="tel:+917591900909" style={{
              display: 'inline-block',
              padding: '0.8rem 1.5rem',
              backgroundColor: 'var(--accent)',
              color: '#fff',
              borderRadius: '2px',
              fontSize: '0.8rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textDecoration: 'none'
            }}>Book Now</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
