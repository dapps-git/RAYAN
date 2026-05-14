import React from 'react';

const Amenities = () => {
  const amenitiesList = [
    { 
      title: 'Plush Bedding', 
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>, 
      desc: 'Premium mattresses and high-thread-count linens for perfect rest.' 
    },
    { 
      title: 'Modern Kitchen', 
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>, 
      desc: 'Fully equipped with state-of-the-art appliances and essentials.' 
    },
    { 
      title: 'High-Speed WiFi', 
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>, 
      desc: 'Seamless connectivity for work and entertainment.' 
    },
    { 
      title: 'Climate Control', 
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/></svg>, 
      desc: 'Advanced air conditioning for your optimal comfort.' 
    },
    { 
      title: 'Smart TV', 
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>, 
      desc: 'Large flat-screen TVs with premium streaming services.' 
    },
    { 
      title: 'Housekeeping', 
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/></svg>, 
      desc: 'Impeccable cleanliness maintained by our dedicated staff.' 
    }
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
