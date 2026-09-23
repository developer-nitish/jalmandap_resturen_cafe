import React, { useState } from 'react';

export default function AdminDashboard() {
  const [adminStats] = useState({ totalRevenue: '₹48,500', activeBookings: 14, totalGuests: 62 });
  const [complaints] = useState([
    { id: 1, table: 'Table 4', issue: 'Delay in mocktail service', status: 'Pending' }
  ]);

  return (
    <div style={{ backgroundColor: '#131C31', padding: '30px', borderRadius: '20px', border: '1px solid rgba(212,175,55,0.3)', maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#FFF', marginBottom: '20px' }}>Admin Management Dashboard</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '25px' }}>
        <div style={{ backgroundColor: '#0B0F19', padding: '15px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(212,175,55,0.2)' }}>
          <span style={{ color: '#9CA3AF', fontSize: '12px' }}>Total Revenue</span>
          <h3 style={{ color: '#D4AF37', margin: '5px 0 0 0', fontSize: '18px' }}>{adminStats.totalRevenue}</h3>
        </div>
        <div style={{ backgroundColor: '#0B0F19', padding: '15px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(212,175,55,0.2)' }}>
          <span style={{ color: '#9CA3AF', fontSize: '12px' }}>Active Bookings</span>
          <h3 style={{ color: '#14B8A6', margin: '5px 0 0 0', fontSize: '18px' }}>{adminStats.activeBookings}</h3>
        </div>
        <div style={{ backgroundColor: '#0B0F19', padding: '15px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(212,175,55,0.2)' }}>
          <span style={{ color: '#9CA3AF', fontSize: '12px' }}>Total Guests</span>
          <h3 style={{ color: '#FFF', margin: '5px 0 0 0', fontSize: '18px' }}>{adminStats.totalGuests}</h3>
        </div>
      </div>

      <div style={{ backgroundColor: '#0B0F19', padding: '20px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.2)' }}>
        <h3 style={{ color: '#F3E5AB', fontSize: '14px', marginBottom: '10px' }}>Live Customer Complaints / Requests</h3>
        {complaints.map((c) => (
          <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div>
              <strong style={{ color: '#FFF', fontSize: '13px' }}>{c.table}</strong>: <span style={{ color: '#D1D5DB', fontSize: '13px' }}>{c.issue}</span>
            </div>
            <button onClick={() => alert('Complaint resolved!')} style={{ padding: '4px 10px', backgroundColor: '#DC2626', color: '#FFF', border: 'none', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>Resolve</button>
          </div>
        ))}
      </div>
    </div>
  );
}