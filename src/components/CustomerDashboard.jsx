import React, { useState } from 'react';

export default function CustomerDashboard() {
  const [phoneInput, setPhoneInput] = useState('');
  const [customerData, setCustomerData] = useState(null);

  return (
    <div style={{ backgroundColor: '#131C31', padding: '30px', borderRadius: '20px', border: '1px solid rgba(212,175,55,0.3)', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#FFF', marginBottom: '15px' }}>Customer VIP Dashboard</h2>
      <p style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '13px', marginBottom: '20px' }}>Check loyalty points, reward history & occasion reminders.</p>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input type="tel" placeholder="Enter Mobile Number" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} style={{ flex: 1, padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }} />
        <button onClick={() => setCustomerData({ name: 'Nitish Kumar', visits: 5, points: 450, tier: 'Gold VIP', lastVisit: '10 days ago' })} style={{ padding: '12px 18px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Search</button>
      </div>

      {customerData && (
        <div style={{ backgroundColor: '#0B0F19', padding: '20px', borderRadius: '12px', border: '1px solid #0D9488' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: '#F3E5AB', fontWeight: 'bold' }}>Welcome, {customerData.name}</span>
            <span style={{ padding: '2px 8px', backgroundColor: 'rgba(212,175,55,0.2)', color: '#D4AF37', borderRadius: '4px', fontSize: '11px' }}>{customerData.tier}</span>
          </div>
          <p style={{ color: '#D1D5DB', fontSize: '13px', margin: '5px 0' }}>Total Visits: <strong style={{ color: '#FFF' }}>{customerData.visits}</strong></p>
          <p style={{ color: '#D1D5DB', fontSize: '13px', margin: '5px 0' }}>Reward Points: <strong style={{ color: '#14B8A6' }}>{customerData.points} pts</strong></p>
          
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(13,148,136,0.15)', borderRadius: '8px', borderLeft: '3px solid #14B8A6' }}>
            <p style={{ color: '#14B8A6', fontSize: '12px', fontWeight: 'bold', margin: 0 }}>automated Reminder / Thank You Message:</p>
            <p style={{ color: '#FFF', fontSize: '12px', margin: '4px 0 0 0' }}>"Thank you for visiting Jalmandap recently! We remember your special anniversary coming up next month. Enjoy a complimentary dessert on your next booking!"</p>
          </div>
        </div>
      )}
    </div>
  );
}