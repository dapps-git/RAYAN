import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 0' }}>
      <div className="container">
        <div className="contact-layout" style={{
          backgroundColor: 'var(--bg-primary)',
          borderRadius: '4px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          marginBottom: '4rem'
        }}>
          <div className="contact-inner-pad" style={{
            backgroundColor: 'var(--text-primary)',
            color: 'var(--bg-primary)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>Get in Touch</h2>
            <p style={{ opacity: 0.8, marginBottom: '3rem', lineHeight: '1.8' }}>
              Experience the pinnacle of service apartment living. Contact us to inquire about availability or schedule a viewing.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h5 style={{ textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, fontSize: '0.8rem', marginBottom: '0.5rem' }}>Email Us</h5>
              <a href="mailto:inforayanapartment@gmail.com" style={{ fontSize: '1.2rem', color: 'var(--accent)' }}>inforayanapartment@gmail.com</a>
            </div>

            <div>
              <h5 style={{ textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, fontSize: '0.8rem', marginBottom: '0.5rem' }}>Location</h5>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Gandhi Nagar St, beside Moulana hospital,<br />
                Perinthalmanna, Kerala 679322
              </p>
            </div>
          </div>

          <div className="contact-inner-pad">
            <form onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;
              const mailtoLink = `mailto:inforayanapartment@gmail.com?subject=New Contact Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`;
              window.location.href = mailtoLink;
            }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                <input type="text" name="name" required style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '2px',
                  fontFamily: 'inherit'
                }} placeholder="Your full name" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                <input type="email" name="email" required style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '2px',
                  fontFamily: 'inherit'
                }} placeholder="Your email address" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                <textarea rows="4" name="message" required style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '2px',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }} placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" style={{
                padding: '1rem 2rem',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: '1rem',
                borderRadius: '2px'
              }}>Send Message</button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div style={{ borderRadius: '4px', overflow: 'hidden', height: '400px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4233816773356!2d76.22271811480132!3d10.972365992189688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d2fe9485b0d5%3A0x6e268cc02604b73b!2sMoulana%20Hospital%20Perinthalmanna!5e0!3m2!1sen!2sin!4v1684307525330!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
