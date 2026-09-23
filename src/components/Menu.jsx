import React from 'react';

export default function Menu() {
  const menuItems = [
    { name: 'Blue Lagoon Breeze', price: '₹249', desc: 'Mint, lime, curacao & glowing soda effect.', icon: '🍹', cat: 'Mocktail' },
    { name: 'Strawberry Sunset Glow', price: '₹269', desc: 'Fresh strawberries, starfruit & lemonade blend.', icon: '🍓', cat: 'Mocktail' },
    { name: 'Jalmandap Special Royal Platter', price: '₹799', desc: 'Multi-cuisine appetizers with signature dips.', icon: '🥘', cat: 'Food' },
    { name: 'Paneer Lababdar Deluxe', price: '₹429', desc: 'Cottage cheese cubes in rich velvety gravy.', icon: '🍛', cat: 'Food' },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: '26px', color: '#FFF', marginBottom: '25px' }}>Signature Menu & Mocktails</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {menuItems.map((item, idx) => (
          <div key={idx} style={{ backgroundColor: '#131C31', padding: '20px', borderRadius: '15px', border: '1px solid rgba(212,175,55,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '32px' }}>{item.icon}</span>
              <span style={{ fontSize: '11px', padding: '3px 8px', backgroundColor: 'rgba(212,175,55,0.2)', color: '#D4AF37', borderRadius: '4px' }}>{item.cat}</span>
            </div>
            <h3 style={{ color: '#FFF', margin: '12px 0 5px 0' }}>{item.name}</h3>
            <p style={{ color: '#9CA3AF', fontSize: '13px' }}>{item.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
              <span style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '16px' }}>{item.price}</span>
              <button onClick={() => alert(`${item.name} ordered successfully!`)} style={{ padding: '6px 14px', backgroundColor: 'rgba(13,148,136,0.3)', color: '#14B8A6', border: '1px solid #0D9488', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Order Item</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}