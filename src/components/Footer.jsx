import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      width: '100vw', 
      marginLeft: 'calc(-50vw + 50%)', 
      marginRight: 'calc(-50vw + 50%)',
      backgroundColor: '#070A12', 
      borderTop: '3px solid rgba(212, 175, 55, 0.4)', 
      padding: '60px 20px 30px 20px', 
      color: '#9CA3AF',
      boxSizing: 'border-box',
      boxShadow: '0 -20px 40px rgba(0,0,0,0.8)'
    }}>
      <div style={{ 
        maxWidth: '1100px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '40px',
        textAlign: 'left',
        marginBottom: '40px'
      }}>
        
        {/* Brand Info */}
        <div style={{ spaceY: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #0D9488, #D4AF37)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '20px',
              boxShadow: '0 0 15px rgba(13,148,136,0.6)'
            }}>
              🌊
            </div>
            <span style={{ fontSize: '20px', fontWeight: '900', color: '#F3E5AB', letterSpacing: '1.5px' }}>
              JALMANDAP
            </span>
          </div>
          <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#D1D5DB' }}>
            Bihar's most luxurious high-tech theme restaurant featuring indoor koi fish ponds, swimming water decks, and a breathtaking galaxy dome ceiling.
          </p>
        </div>

        {/* Venue & Location */}
        <div>
          <h4 style={{ color: '#D4AF37', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            📍 Venue Location
          </h4>
          <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#E5E7EB', margin: 0 }}>
            Sita Kund, Near Lord Buddha Multicare Hospital, Gaya Ji, Bihar
          </p>
          <p style={{ fontSize: '13px', color: '#14B8A6', marginTop: '10px', fontWeight: 'bold' }}>
            Open All Days: 11:00 AM – 11:00 PM
          </p>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h4 style={{ color: '#D4AF37', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            📞 Direct Contact & Socials
          </h4>
          <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#FFF', marginBottom: '12px' }}>
            +91 6207141506 | +91 6200454206
          </p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
            <a 
              href="https://www.instagram.com/jalmandap.cafe/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(212,175,55,0.15)',
                color: '#F3E5AB',
                border: '1px solid rgba(212,175,55,0.4)',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              📷 Instagram
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61594296464474" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(13,148,136,0.2)',
                color: '#14B8A6',
                border: '1px solid rgba(13,148,136,0.4)',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              📘 Facebook
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.08)', 
        paddingTop: '20px', 
        textAlign: 'center', 
        fontSize: '12px', 
        color: '#6B7280',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <p style={{ margin: 0 }}>© 2026 Jalmandap Resturent & Cafe, Gaya Ji. All rights reserved. | Designed for Royal Dining.</p>
      </div>
    </footer>
  );
}