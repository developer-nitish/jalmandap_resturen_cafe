import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadedBookings = JSON.parse(localStorage.getItem('jalmandapBookings') || '[]');
    setBookings(loadedBookings);
  }, []);

  // Helper function to trigger automatic WhatsApp message
  const sendWhatsAppMessage = (b, statusType) => {
    let msg = '';
    if (statusType === 'Confirmed') {
      msg = `🎉 *YOUR TABLE IS CONFIRMED! - JALMANDAP* %0A` +
        `----------------------------------%0A` +
        `🆔 *Booking ID:* ${b.bookingId}%0A` +
        `👤 *Guest Name:* ${b.name}%0A` +
        `🏛️ *Table:* ${b.tableName}%0A` +
        `📅 *Date:* ${b.date}%0A` +
        `⏰ *Time Slot:* ${b.timeSlot}%0A` +
        `✅ *Status:* CONFIRMED (Please arrive within 5 mins of slot time)%0A` +
        `----------------------------------%0A` +
        `*See you at Jalmandap Restaurant, Gaya Ji!*`;
    } else {
      // Train ticket style waiting list message
      msg = `⏳ *TRAIN TICKET STYLE WAITING LIST - JALMANDAP* %0A` +
        `----------------------------------%0A` +
        `🆔 *Booking ID:* ${b.bookingId}%0A` +
        `👤 *Guest Name:* ${b.name}%0A` +
        `🏛️ *Table:* ${b.tableName}%0A` +
        `📅 *Date:* ${b.date}%0A` +
        `⏰ *Requested Slot:* ${b.timeSlot}%0A` +
        `🚆 *Status:* WAITING LIST #1 (Table currently busy/occupied. We will notify you as soon as it frees up!)%0A` +
        `----------------------------------%0A` +
        `*Thank you for your patience.*`;
    }

    // Opens WhatsApp automatically with customer's booking phone number
    window.open(`https://wa.me/91${b.phone}?text=${msg}`, '_blank');
  };

  // Admin / Staff action to Confirm or put in Waiting List with auto WhatsApp dispatch
  const updateStatusAndNotify = (bookingId, newStatus) => {
    let updatedBookingTarget = null;

    const updated = bookings.map(b => {
      if (b.bookingId === bookingId) {
        const updatedObj = { ...b, status: newStatus };
        updatedBookingTarget = updatedObj;
        return updatedObj;
      }
      return b;
    });

    setBookings(updated);
    localStorage.setItem('jalmandapBookings', JSON.stringify(updated));

    // Automatically open WhatsApp with the respective message
    if (updatedBookingTarget) {
      if (newStatus === 'Confirmed') {
        sendWhatsAppMessage(updatedBookingTarget, 'Confirmed');
      } else {
        sendWhatsAppMessage(updatedBookingTarget, 'Waiting');
      }
    }

    alert(`Booking status updated to "${newStatus}" and WhatsApp pass dispatched to customer!`);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#111827', fontSize: '28px', fontWeight: '900', marginBottom: '10px' }}>Admin & Staff Table Request Manager</h2>
      <p style={{ color: '#4B5563', fontSize: '14px', marginBottom: '30px' }}>Review incoming table requests. Clicking Accept or Waiting will instantly update the status and dispatch the WhatsApp pass to the customer.</p>

      {bookings.length === 0 ? (
        <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '16px', textAlign: 'center', border: '1px solid #E5E7EB' }}>
          <p style={{ color: '#6B7280', fontSize: '15px' }}>Koi table booking request abhi nahi aayi hai.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {bookings.map((b) => (
            <div key={b.bookingId} style={{ backgroundColor: '#FFFFFF', padding: '20px 25px', borderRadius: '16px', border: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', flexWrap: 'wrap', gap: '15px' }}>
              <div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '5px' }}>
                  <span style={{ fontWeight: '900', color: '#1F2937', fontSize: '16px' }}>{b.name}</span>
                  <span style={{ fontSize: '12px', color: '#6B7280' }}>({b.phone})</span>
                  <span style={{ fontSize: '11px', padding: '2px 8px', backgroundColor: '#F3F4F6', borderRadius: '4px', fontWeight: 'bold' }}>{b.bookingId}</span>
                </div>
                <p style={{ color: '#4B5563', fontSize: '13px', margin: '3px 0' }}>🏛️ <strong>Table:</strong> {b.tableName}</p>
                <p style={{ color: '#4B5563', fontSize: '13px', margin: '3px 0' }}>📅 <strong>Date & Slot:</strong> {b.date} | {b.timeSlot}</p>
                <p style={{ color: '#0D9488', fontSize: '13px', margin: '3px 0', fontWeight: 'bold' }}>📌 Status: {b.status}</p>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  onClick={() => updateStatusAndNotify(b.bookingId, 'Confirmed')} 
                  style={{ padding: '10px 16px', backgroundColor: '#0D9488', color: '#FFF', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(13,148,136,0.3)' }}
                >
                  ✅ Accept & Send Confirmed Pass
                </button>
                <button 
                  onClick={() => updateStatusAndNotify(b.bookingId, 'Waiting List #1 (Table Busy)')} 
                  style={{ padding: '10px 16px', backgroundColor: '#D97706', color: '#FFF', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(217,119,6,0.3)' }}
                >
                  ⏳ Put in Waiting & Send Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}