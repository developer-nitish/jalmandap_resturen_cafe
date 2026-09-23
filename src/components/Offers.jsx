import React from 'react';

export default function Offers() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#FFF', marginBottom: '25px' }}>Offer Details & Special Discounts</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div style={{ backgroundColor: '#131C31', padding: '25px', borderRadius: '15px', border: '1px solid rgba(212,175,55,0.3)' }}>
          <span style={{ padding: '4px 12px', backgroundColor: '#D4AF37', color: '#000', fontWeight: 'bold', borderRadius: '20px', fontSize: '11px' }}>FLAT 20% OFF</span>
          <h3 style={{ color: '#FFF', margin: '15px 0 5px 0' }}>Weekday Dining Offer</h3>
          <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '15px' }}>Use code <strong style={{ color: '#F3E5AB' }}>JAL20OFF</strong> on total bill above ₹999.</p>
          <button onClick={() => alert('Coupon Copied: JAL20OFF')} style={{ width: '100%', padding: '10px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Claim Offer</button>
        </div>
        <div style={{ backgroundColor: '#131C31', padding: '25px', borderRadius: '15px', border: '1px solid rgba(212,175,55,0.3)' }}>
          <span style={{ padding: '4px 12px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', borderRadius: '20px', fontSize: '11px' }}>FREE MOCKTAIL</span>
          <h3 style={{ color: '#FFF', margin: '15px 0 5px 0' }}>Birthday Special Treat</h3>
          <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '15px' }}>Complimentary Blue Lagoon mocktail for birthday guests.</p>
          <button onClick={() => alert('Birthday Offer Claimed!')} style={{ width: '100%', padding: '10px', backgroundColor: '#D4AF37', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Claim Birthday Offer</button>
        </div>
      </div>
    </div>
  );
}