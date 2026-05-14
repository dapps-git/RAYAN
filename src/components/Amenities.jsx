import React from 'react';

const Amenities = () => {
  const amenitiesList = [
    { title: 'Plush Bedding', icon: '🛏️', desc: 'Premium mattresses and high-thread-count linens for perfect rest.' },
    { title: 'Modern Kitchen', icon: '🍳', desc: 'Fully equipped with state-of-the-art appliances and essentials.' },
    { title: 'High-Speed WiFi', icon: '📶', desc: 'Seamless connectivity for work and entertainment.' },
    { title: 'Climate Control', icon: '❄️', desc: 'Advanced air conditioning for your optimal comfort.' },
    { title: 'Smart Entertainment', icon: '📺', desc: 'Large flat-screen TVs with premium streaming services.' },
    { title: 'Daily Housekeeping', icon: '✨', desc: 'Impeccable cleanliness maintained by our dedicated staff.' }
  ];

  return (
    <section id="amenities" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h4 style={{
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '0.9rem',
            marginBottom: '1rem',
            fontFamily: 'Inter, sans-serif'
          }}>Features</h4>
          <h2 style={{
            fontSize: '2rem',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}>Exceptional Amenities</h2>
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            fontSize: '1.1rem'
          }}>
            Every detail in our apartments has been carefully considered to provide you with a luxurious and effortless living experience.
          </p>
        </div>

        <div className="amenities-grid-custom" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {amenitiesList.map((item, index) => (
            <div key={index} style={{
              padding: '2.5rem 2rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '4px',
              border: '1px solid var(--border-color)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign: 'center'
            }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
