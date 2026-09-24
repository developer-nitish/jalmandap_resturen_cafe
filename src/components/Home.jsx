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
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      
      {/* Grand Immersive Cinematic Video Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(500px, 75vh, 650px)',
        overflow: 'hidden',
        // boxShadow: '0 25px 50px rgba(0,0,0,0.9)',
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
          padding: '0 16px',
          boxSizing: 'border-box'
        }}>
          <span style={{ 
            display: 'inline-block',
            padding: '7px 14px', 
            borderRadius: '30px', 
            backgroundColor: 'rgba(13,148,136,0.4)', 
            color: '#14B8A6', 
            fontSize: 'clamp(9px, 2.2vw, 12px)', 
            border: '1px solid #0D9488',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 0 25px rgba(13,148,136,0.6)',
            backdropFilter: 'blur(10px)',
            marginBottom: '10px',
            maxWidth: '92vw',
            boxSizing: 'border-box'
          }}>
            ✨ Bihar's First Galaxy Starry Ceiling & Koi Pond Theme Restaurant
          </span>

          {/* FIX: Controlled font sizes and proper block stacking to completely stop overlapping */}
          <div style={{ margin: '10px 0 15px 0' }}>
            <h1 style={{ 
              fontSize: 'clamp(28px, 6vw, 54px)', 
              color: '#FFFFFF', 
              margin: '0', 
              fontWeight: '800',
              letterSpacing: '0.5px',
              textShadow: '0 4px 20px rgba(0,0,0,0.9)',
              lineHeight: '1.2'
            }}>
              Welcome to
            </h1>
            <h1 style={{ 
              fontSize: 'clamp(36px, 8vw, 68px)', 
              color: '#D4AF37', 
              margin: '2px 0 0 0', 
              fontWeight: '900',
              letterSpacing: '1px',
              textShadow: '0 0 30px rgba(212,175,55,0.7)',
              lineHeight: '1.1'
            }}>
              Jalmandap
            </h1>
          </div>

          <p style={{ 
            color: '#E5E7EB', 
            fontSize: 'clamp(12px, 2vw, 15px)', 
            maxWidth: '750px', 
            margin: '0 auto 20px auto', 
            lineHeight: '1.5',
            textShadow: '0 2px 12px rgba(0,0,0,0.9)',
            fontWeight: '500',
            padding: '0 10px'
          }}>
            Immerse yourself in high-tech royal dining surrounded by swimming koi fish water decks, breathtaking cosmic skies, and master-crafted signature mocktails.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('tableBooking')} 
              style={{ 
                padding: '12px 20px', 
                backgroundColor: '#0D9488', 
                color: '#FFF', 
                fontWeight: 'bold', 
                borderRadius: '10px', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: 'clamp(12px, 1.8vw, 14px)',
                boxShadow: '0 8px 25px rgba(13,148,136,0.6)',
                width: '100%',
                maxWidth: '240px'
              }}
            >
              🌊 Book Water Deck Table
            </button>

            <button 
              onClick={() => setActiveTab('partyBooking')} 
              style={{ 
                padding: '12px 20px', 
                backgroundColor: '#D4AF37', 
                color: '#000', 
                fontWeight: 'bold', 
                borderRadius: '10px', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: 'clamp(12px, 1.8vw, 14px)',
                boxShadow: '0 8px 25px rgba(212,175,55,0.6)',
                width: '100%',
                maxWidth: '240px'
              }}
            >
              🎂 Book Birthday / Party Area
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Action Cards Section */}
      <div style={{ 
        padding: '40px 16px', 
        textAlign: 'center', 
        maxWidth: '1000px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ color: '#F3E5AB', fontSize: 'clamp(22px, 4.5vw, 30px)', fontWeight: '900' }}>
          Experience Royal Hospitality
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', width: '100%' }}>
          
          <div onClick={() => setActiveTab('tableBooking')} style={{ backgroundColor: '#131C31', padding: '20px', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.3)', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <span style={{ fontSize: '32px' }}>🏛️</span>
            <h3 style={{ color: '#FFF', fontSize: '17px', margin: '10px 0 6px 0' }}>Water Deck Seating</h3>
            <p style={{ color: '#9CA3AF', fontSize: '12px', lineHeight: '1.4' }}>Dine right above crystal water pools with swimming koi fish and starry ceilings.</p>
          </div>

          <div onClick={() => setActiveTab('menu')} style={{ backgroundColor: '#131C31', padding: '20px', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.3)', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <span style={{ fontSize: '32px' }}>🍹</span>
            <h3 style={{ color: '#FFF', fontSize: '17px', margin: '10px 0 6px 0' }}>Signature Mocktails</h3>
            <p style={{ color: '#9CA3AF', fontSize: '12px', lineHeight: '1.4' }}>Try our glowing Blue Lagoon and Strawberry Sunset handcrafted drinks.</p>
          </div>

          <div onClick={() => setActiveTab('partyBooking')} style={{ backgroundColor: '#131C31', padding: '20px', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.3)', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <span style={{ fontSize: '32px' }}>✨</span>
            <h3 style={{ color: '#FFF', fontSize: '17px', margin: '10px 0 6px 0' }}>Birthday Celebrations</h3>
            <p style={{ color: '#9CA3AF', fontSize: '12px', lineHeight: '1.4' }}>Complimentary music, cake setup and special decorations for your loved ones.</p>
          </div>

        </div>
      </div>

    </div>
  );
}