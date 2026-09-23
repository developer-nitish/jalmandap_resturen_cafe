import React, { useState } from 'react';

export default function Navbar({ activeTab, setActiveTab, isLoggedIn }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'tableBooking', label: 'Table' },
    { id: 'partyBooking', label: 'Party' },
    { id: 'clubPass', label: 'Club Pass' },
    { id: 'offers', label: 'Offers' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'complaint', label: 'Complaint' },
    { id: 'customerPortal', label: 'Customer' },
    { id: 'staffPortal', label: 'Staff' },
    { id: 'adminPortal', label: 'Admin' },
  ];

  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      width: '100vw', 
      marginLeft: 'calc(-50vw + 50%)', 
      marginRight: 'calc(-50vw + 50%)' 
    }}>
      {/* Full Width 5-Star Luxury Navbar */}
      <nav style={{
        width: '100%',
        background: '#FFFFFF',
        borderBottom: '2px solid rgba(212, 175, 55, 0.35)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>
        
        {/* Brand Logo with 3D Depth */}
        <div 
          onClick={() => setActiveTab('home')} 
          style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '14px'
          }}
        >
          <div style={{ 
            width: '48px', 
            height: '48px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, #0D9488, #D4AF37)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '24px',
            boxShadow: '0 8px 20px rgba(13, 148, 136, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.8)'
          }}>
            🌊
          </div>
          <div>
            <span style={{ 
              fontSize: '22px', 
              fontWeight: '900', 
              background: 'linear-gradient(to right, #0B0F19, #0D9488, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px'
            }}>
              JALMANDAP
            </span>
            <p style={{ fontSize: '9.5px', color: '#0D9488', margin: 0, letterSpacing: '3px', fontWeight: '800', textTransform: 'uppercase' }}>
              Resturent & Cafe
            </p>
          </div>
        </div>

        {/* Navigation Tabs with 3D Luxury Feel */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '9px 15px',
                  borderRadius: '10px',
                  border: isActive ? '1px solid #0D9488' : '1px solid #E5E7EB',
                  cursor: 'pointer',
                  fontWeight: isActive ? '800' : '600',
                  fontSize: '12px',
                  backgroundColor: isActive ? '#0D9488' : '#FAFAFA',
                  color: isActive ? '#FFFFFF' : '#4B5563',
                  boxShadow: isActive ? '0 6px 16px rgba(13, 148, 136, 0.35), inset 0 1px 1px rgba(255,255,255,0.5)' : '0 2px 5px rgba(0,0,0,0.03)',
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.label}
              </button>
            );
          })}

          {/* Login / Auth Button */}
          <button
            onClick={() => setActiveTab('auth')}
            style={{
              padding: '10px 20px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '12px',
              background: 'linear-gradient(135deg, #D4AF37, #AA771C)',
              color: '#FFFFFF',
              marginLeft: '12px',
              boxShadow: '0 6px 18px rgba(212, 175, 55, 0.45)',
              transition: 'transform 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </nav>
    </header>
  );
}