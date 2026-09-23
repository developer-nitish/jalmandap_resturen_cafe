import React from 'react';

export default function Home({ setActiveTab }) {
  return (
    <div style={{ 
      width: '100vw', 
      marginLeft: 'calc(-50vw + 50%)', 
      marginRight: 'calc(-50vw + 50%)',
      backgroundColor: '#0B0F19', 
      color: '#F3E5AB',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      
      {/* Grand Immersive Cinematic Video Banner (Height Increased to 650px) */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '650px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0,0,0,0.9)',
        borderBottom: '4px solid rgba(212, 175, 55, 0.5)'
      }}>
        
        {/* HTML5 Video Tag */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(0.65) contrast(1.1)'
          }}
        >
          {/* Note: public folder ki file ko direct '/filename.mp4' likhte hain */}
          <source src="/design resturent.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Luxury Dark & Golden Vignette Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(11,15,25,0.3), rgba(11,15,25,0.85)), radial-gradient(circle at center, transparent 40%, rgba(11,15,25,0.8) 90%)',
          zIndex: 2
        }}></div>

        {/* Grand Centered Banner Content */}
        <div style={{ 
          position: 'absolute', 
          top: '52%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          textAlign: 'center', 
          zIndex: 3, 
          width: '100%', 
          maxWidth: '1000px',
          padding: '0 20px',
          boxSizing: 'border-box'
        }}>
          <span style={{ 
            display: 'inline-block',
            padding: '10px 26px', 
            borderRadius: '30px', 
            backgroundColor: 'rgba(13,148,136,0.4)', 
            color: '#14B8A6', 
            fontSize: '13px', 
            border: '1px solid #0D9488',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            boxShadow: '0 0 25px rgba(13,148,136,0.6)',
            backdropFilter: 'blur(10px)',
            marginBottom: '15px'
          }}>
            ✨ Bihar's First Galaxy Starry Ceiling & Koi Pond Theme Restaurant
          </span>

          <h1 style={{ 
            fontSize: '64px', 
            color: '#FFFFFF', 
            margin: '10px 0 15px 0', 
            fontWeight: '900',
            letterSpacing: '1px',
            textShadow: '0 5px 25px rgba(0,0,0,0.9)'
          }}>
            Welcome to <span style={{ color: '#D4AF37', textShadow: '0 0 30px rgba(212,175,55,0.7)' }}>Jalmandap</span>
          </h1>

          <p style={{ 
            color: '#E5E7EB', 
            fontSize: '18px', 
            maxWidth: '780px', 
            margin: '0 auto 30px auto', 
            lineHeight: '1.7',
            textShadow: '0 2px 12px rgba(0,0,0,0.9)',
            fontWeight: '500'
          }}>
            Immerse yourself in high-tech royal dining surrounded by swimming koi fish water decks, breathtaking cosmic skies, and master-crafted signature mocktails.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('tableBooking')} 
              style={{ 
                padding: '16px 30px', 
                backgroundColor: '#0D9488', 
                color: '#FFF', 
                fontWeight: 'bold', 
                borderRadius: '12px', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: '15px',
                boxShadow: '0 8px 25px rgba(13,148,136,0.6)',
                transition: 'transform 0.2s ease'
              }}
            >
              🌊 Book Water Deck Table
            </button>

            <button 
              onClick={() => setActiveTab('partyBooking')} 
              style={{ 
                padding: '16px 30px', 
                backgroundColor: '#D4AF37', 
                color: '#000', 
                fontWeight: 'bold', 
                borderRadius: '12px', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: '15px',
                boxShadow: '0 8px 25px rgba(212,175,55,0.6)',
                transition: 'transform 0.2s ease'
              }}
            >
              🎂 Book Birthday / Party Area
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Action Cards Section */}
      <div style={{ 
        padding: '70px 20px', 
        textAlign: 'center', 
        maxWidth: '1000px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        width: '100%'
      }}>
        <h2 style={{ color: '#F3E5AB', fontSize: '32px', fontWeight: '900', letterSpacing: '1px' }}>
          Experience Royal Hospitality
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', width: '100%' }}>
          
          <div onClick={() => setActiveTab('tableBooking')} style={{ backgroundColor: '#131C31', padding: '30px', borderRadius: '20px', border: '1px solid rgba(212,175,55,0.3)', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', transition: 'transform 0.3s' }}>
            <span style={{ fontSize: '40px' }}>🏛️</span>
            <h3 style={{ color: '#FFF', fontSize: '20px', margin: '15px 0 10px 0' }}>Water Deck Seating</h3>
            <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.5' }}>Dine right above crystal water pools with swimming koi fish and starry ceilings.</p>
          </div>

          <div onClick={() => setActiveTab('menu')} style={{ backgroundColor: '#131C31', padding: '30px', borderRadius: '20px', border: '1px solid rgba(212,175,55,0.3)', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', transition: 'transform 0.3s' }}>
            <span style={{ fontSize: '40px' }}>🍹</span>
            <h3 style={{ color: '#FFF', fontSize: '20px', margin: '15px 0 10px 0' }}>Signature Mocktails</h3>
            <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.5' }}>Try our glowing Blue Lagoon and Strawberry Sunset handcrafted drinks.</p>
          </div>

          <div onClick={() => setActiveTab('partyBooking')} style={{ backgroundColor: '#131C31', padding: '30px', borderRadius: '20px', border: '1px solid rgba(212,175,55,0.3)', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', transition: 'transform 0.3s' }}>
            <span style={{ fontSize: '40px' }}>✨</span>
            <h3 style={{ color: '#FFF', fontSize: '20px', margin: '15px 0 10px 0' }}>Birthday Celebrations</h3>
            <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.5' }}>Complimentary music, cake setup and special decorations for your loved ones.</p>
          </div>

        </div>
      </div>

    </div>
  );
}