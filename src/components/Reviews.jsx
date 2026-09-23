import React, { useState } from 'react';

export default function Reviews() {
  const [reviews] = useState([
    { name: 'Rahul Sharma', comment: 'Amazing galaxy ceiling and water pond seating!', rating: '★★★★★' }
  ]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#FFF', marginBottom: '20px' }}>Happy Client Reviews</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
        {reviews.map((rev, idx) => (
          <div key={idx} style={{ backgroundColor: '#131C31', padding: '15px 20px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <strong style={{ color: '#FFF', fontSize: '14px' }}>{rev.name}</strong>
              <span style={{ color: '#D4AF37' }}>{rev.rating}</span>
            </div>
            <p style={{ color: '#D1D5DB', fontSize: '13px', margin: 0 }}>{rev.comment}</p>
          </div>
        ))}
      </div>
      
      <form onSubmit={(e) => { e.preventDefault(); alert('Review submitted successfully!'); }} style={{ backgroundColor: '#131C31', padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ color: '#F3E5AB', fontSize: '15px', margin: 0 }}>Leave Your Feedback</h3>
        <input type="text" required placeholder="Your Name" style={{ padding: '10px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '6px', color: '#FFF' }} />
        <textarea required rows="2" placeholder="Write your experience..." style={{ padding: '10px', backgroundColor: '#0B0F19', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '6px', color: '#FFF' }}></textarea>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Submit Review</button>
      </form>
    </div>
  );
}