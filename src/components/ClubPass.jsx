import React, { useState } from 'react';

export default function ClubPass() {
  const [booked, setBooked] = useState(false);

  return (
    <div style={{ backgroundColor: '#131C31', padding: '30px', borderRadius: '20px', border: '1px solid rgba(212,175,55,0.3)', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#FFF', marginBottom: '20px' }}>VIP Club Entry Pass</h2>
      {booked ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3 style={{ color: '#D4AF37' }}>Pass Generated Successfully! 🎟️</h3>
          <p style={{ color: '#D1D5DB', fontSize: '13px' }}>Aapka digital QR pass WhatsApp par bhej diya gaya hai.</p>
          <button onClick={() => setBooked(false)} style={{ marginTop: '15px', padding: '8px 16px', backgroundColor: '#0D9488', color: '#FFF', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Get Another Pass</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input type="text" required placeholder="Guest Name" style={{ padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }} />
          <input type="tel" required placeholder="Phone Number" style={{ padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }} />
          <select style={{ padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }}>
            <option>Weekend Galaxy Night Pass - ₹499 (Includes Mocktail)</option>
            <option>Couples Special Entry - ₹799</option>
          </select>
          <button type="submit" style={{ padding: '12px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Book Club Pass</button>
        </form>
      )}
    </div>
  );
}