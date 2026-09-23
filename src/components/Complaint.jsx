import React from 'react';

export default function Complaint() {
  return (
    <div style={{ backgroundColor: '#131C31', padding: '30px', borderRadius: '20px', border: '1px solid rgba(212,175,55,0.3)', maxWidth: '450px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#FFF', marginBottom: '20px' }}>Restaurant Team & Complaint Desk</h2>
      <form onSubmit={(e) => { e.preventDefault(); alert('Alert sent to Floor Manager successfully!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" required placeholder="Table Number (e.g. Table 4)" style={{ padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }} />
        <select style={{ padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }}>
          <option>Service Speed / Captain Assistance</option>
          <option>Food Quality Feedback</option>
          <option>Table Cleanliness</option>
        </select>
        <textarea required rows="3" placeholder="Describe your issue..." style={{ padding: '12px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', color: '#FFF' }}></textarea>
        <button type="submit" style={{ padding: '12px', backgroundColor: '#DC2626', color: '#FFF', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Send Alert to Manager</button>
      </form>
    </div>
  );
}