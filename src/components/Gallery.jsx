import React from 'react';

const Gallery = () => {
  const images = [
    '/assets/IMG_5017.jpg.jpeg',
    '/assets/IMG_5020.JPG.jpeg',
    '/assets/IMG_5021.jpg.jpeg',
    '/assets/IMG_5023.jpg.jpeg',
    '/assets/IMG_5024.jpg.jpeg',
    '/assets/IMG_5025.jpg.jpeg'
  ];

  return (
    <section id="gallery" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h4 style={{
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '0.9rem',
            marginBottom: '1rem',
            fontFamily: 'Inter, sans-serif'
          }}>Our Spaces</h4>
          <h2 style={{
            fontSize: '2rem',
            color: 'var(--text-primary)'
          }}>Curated Elegance</h2>
        </div>

        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {images.map((src, index) => (
            <div key={index} style={{
              position: 'relative',
              paddingTop: '75%', // 4:3 aspect ratio
              overflow: 'hidden',
              borderRadius: '4px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }}>
              <img
                src={src}
                alt={`Apartment view ${index + 1}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
