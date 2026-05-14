import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="container hero-container" style={{
        display: 'grid',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        paddingTop: '13rem' // Space for fixed navbar
      }}>
        <div className="fade-in hero-text-container">
          <h1 className="hero-title" style={{
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            letterSpacing: '-1px'
          }}>
            Experience <br className="hide-mobile" />
            <span style={{ color: 'var(--accent)' }}>Premium</span> Living.
          </h1>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '500px',
            lineHeight: '1.8',
            margin: '0 auto 2.5rem auto' // Center if text-align is center
          }} className="hero-desc">
            Discover unparalleled comfort and sophistication at Rayan Service Apartment.
            Where luxury meets convenience in the heart of the city.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#gallery" style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: '600',
              border: '1px solid var(--text-primary)',
              textAlign: 'center',
              flex: '1 1 auto'
            }}>Explore Suites</a>
            <a href="#contact" style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: '600',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
              flex: '1 1 auto'
            }}>Contact Us</a>
          </div>
        </div>

        <div className="fade-in hero-img-wrapper" style={{ position: 'relative', height: '80vh', animationDelay: '0.3s' }}>
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '85%',
            height: '100%',
            backgroundImage: 'url(/assets/IMG_5016.jpg.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '0',
            width: '50%',
            height: '40%',
            backgroundImage: 'url(/assets/IMG_5018.jpg.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            border: '8px solid var(--bg-primary)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
