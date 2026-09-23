import React, { useState } from 'react';

export default function TableBooking() {
  const [booked, setBooked] = useState(false);

  return (
    <div style={{ backgroundColor: '#131C31', padding: '30px', borderRadius: '20px', border: '1px solid rgba(212,175,55,0.3)', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#FFF', marginBottom: '20px' }}>Water Deck Table Reservation</h2>
      {booked ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3 style={{ color: '#D4AF37' }}>Table Booked Successfully! 🎉</h3>
          <p style={{ color: '#D1D5DB', fontSize: '13px' }}>Aapki booking confirm ho gayi hai. SMS & WhatsApp pass bhej diya gaya hai.</p>
          <button onClick={() => setBooked(false)} style={{ marginTop: '15px', padding: '8px 16px', backgroundColor: '#0D9488', color: '#FFF', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>New Booking</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input type="text" required placeholder="Full Name" style={{ padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }} />
          <input type="tel" required placeholder="Phone Number" style={{ padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="date" required style={{ flex: 1, padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }} />
            <input type="time" required style={{ flex: 1, padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }} />
          </div>
          <select style={{ padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }}>
            <option>Water Deck Circular Table (Koi Pond View)</option>
            <option>Galaxy Starry Ceiling Hall</option>
            <option>Private Arch Seating</option>
          </select>
          <button type="submit" style={{ padding: '12px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Confirm Table Booking</button>
        </form>
      )}
    </div>
  );
}