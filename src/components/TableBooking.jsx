// import React, { useState } from 'react';

// export default function TableBooking() {
//   const [selectedTable, setSelectedTable] = useState(null);
//   const [step, setStep] = useState(1); 
//   const [formData, setFormData] = useState({ 
//     name: '', 
//     phone: '', 
//     date: new Date().toISOString().split('T')[0], 
//     timeSlot: '10:00 AM - 11:00 AM', 
//     guests: '4' 
//   });
//   const [bookingResult, setBookingResult] = useState(null);

//   const tables = [
//     {
//       id: 'water-deck-4',
//       name: '4-Seater Water Deck Table',
//       view: 'Koi Fish Pond & Starry Ceiling View',
//       price: '₹200 Advance Deposit',
//       priceValue: 200,
//       image: '/4 seater.png', 
//       desc: 'Surrounded by indoor swimming koi fish pools with direct water deck ambiance.'
//     },
//     {
//       id: 'water-deck-6',
//       name: '6-Seater Family Water Deck',
//       view: 'Central Pond & Waterfall View',
//       price: '₹250 Advance Deposit',
//       priceValue: 250,
//       image: '/6seater.png', 
//       desc: 'Spacious circular seating right next to the indoor waterfall and water pool.'
//     },
//     {
//       id: 'couple-window',
//       name: 'Couple Window-Side Table',
//       view: 'Romantic City Lights & Arch View',
//       price: '₹200 Advance Deposit',
//       priceValue: 200,
//       image: '/twoseater.png',
//       desc: 'Intimate private arch seating with romantic lighting and window view.'
//     },
//     {
//       id: 'normal-4',
//       name: '4-Seater Normal Dining Table',
//       view: 'Galaxy Dome Hall View',
//       price: '₹150 Advance Deposit',
//       priceValue: 150,
//       image: '/two.png',
//       desc: 'Comfortable luxury seating under the breathtaking cosmic galaxy ceiling.'
//     }
//   ];

//   const hourlySlots = [
//     '10:00 AM - 11:00 AM',
//     '11:00 AM - 12:00 PM',
//     '12:00 PM - 01:00 PM',
//     '01:00 PM - 02:00 PM',
//     '04:00 PM - 05:00 PM',
//     '05:00 PM - 06:00 PM',
//     '07:00 PM - 08:00 PM',
//     '08:00 PM - 09:00 PM',
//     '09:00 PM - 10:00 PM',
//     '10:00 PM - 11:00 PM'
//   ];

//   // Check if specific table and time slot is already booked in localStorage
//   const isSlotAlreadyBooked = (tableName, date, slot) => {
//     const existingBookings = JSON.parse(localStorage.getItem('jalmandapBookings') || '[]');
//     return existingBookings.some(
//       b => b.tableName === tableName && b.date === date && b.timeSlot === slot && b.status === 'Confirmed'
//     );
//   };

//   const handleProceedToPayment = (e) => {
//     e.preventDefault();

//     // Check if table slot is already occupied
//     if (isSlotAlreadyBooked(selectedTable.name, formData.date, formData.timeSlot)) {
//       alert('⚠️ Ye table is date aur time slot par pehle se booked (Housefull) hai! Kripya koi aur slot ya table chunein.');
//       return;
//     }

//     const bookingId = 'JAL-' + Math.floor(100000 + Math.random() * 900000);
//     const newBooking = { 
//       bookingId, 
//       ...formData, 
//       tableName: selectedTable.name, 
//       amount: selectedTable.price, 
//       status: 'Pending Admin Approval' // Default pending jab tak admin confirm na kare
//     };
    
//     const existingBookings = JSON.parse(localStorage.getItem('jalmandapBookings') || '[]');
//     localStorage.setItem('jalmandapBookings', JSON.stringify([newBooking, ...existingBookings]));

//     setBookingResult(newBooking);
//     setStep(3);
//   };

//   const sendToWhatsApp = () => {
//     const text = `🍽️ *NEW TABLE RESERVATION REQUEST - JALMANDAP* %0A` +
//       `----------------------------------%0A` +
//       `🆔 *Booking ID:* ${bookingResult.bookingId}%0A` +
//       `👤 *Guest Name:* ${bookingResult.name}%0A` +
//       `📞 *Mobile:* ${bookingResult.phone}%0A` +
//       `🏛️ *Table Type:* ${bookingResult.tableName}%0A` +
//       `📅 *Date:* ${bookingResult.date}%0A` +
//       `⏰ *Time Slot:* ${bookingResult.timeSlot}%0A` +
//       `💰 *Advance Paid:* ${bookingResult.amount}%0A` +
//       `⏳ *Status:* Pending Admin Confirmation%0A` +
//       `----------------------------------%0A` +
//       `*(Note: Admin approval ke baad hi booking final maani jayegi)*`;

//     window.open(`https://wa.me/916207141506?text=${text}`, '_blank');
//   };

//   return (
//     <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', minHeight: '100vh', backgroundColor: '#FFFFFF', padding: '40px 50px', boxSizing: 'border-box' }}>
      
//       {/* Header */}
//       <div style={{ textAlign: 'center', marginBottom: '45px', width: '100%' }}>
//         <span style={{ padding: '8px 22px', borderRadius: '30px', backgroundColor: 'rgba(13,148,136,0.1)', color: '#0D9488', fontSize: '13px', border: '1px solid #0D9488', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
//           ✨ Royal Table Reservation Desk
//         </span>
//         <h2 style={{ color: '#111827', fontSize: '42px', margin: '15px 0 10px 0', fontWeight: '900', letterSpacing: '0.5px' }}>
//           Choose Your Preferred Table Experience
//         </h2>
//         <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
//           Select your table category, pick an hourly time slot, and secure your booking. Bookings are subject to restaurant confirmation.
//         </p>
//       </div>

//       {/* STEP 1: Table Selection Cards */}
//       {step === 1 && (
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', width: '100%', boxSizing: 'border-box' }}>
//           {tables.map((tbl) => (
//             <div 
//               key={tbl.id} 
//               style={{ 
//                 backgroundColor: '#FAFAFA', 
//                 borderRadius: '24px', 
//                 border: '1px solid #E5E7EB', 
//                 overflow: 'hidden', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'space-between', 
//                 boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
//                 transition: 'all 0.3s ease'
//               }}
//             >
//               <div style={{ height: '240px', backgroundColor: '#F3F4F6', position: 'relative', overflow: 'hidden' }}>
//                 <img 
//                   src={tbl.image} 
//                   alt={tbl.name} 
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   onError={(e) => { e.target.style.display = 'none'; }}
//                 />
//                 <span style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: 'rgba(13, 148, 136, 0.95)', color: '#FFF', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', backdropFilter: 'blur(4px)' }}>
//                   {tbl.view}
//                 </span>
//               </div>

//               <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                 <div>
//                   <h3 style={{ color: '#1F2937', fontSize: '21px', margin: '0 0 10px 0', fontWeight: '900' }}>{tbl.name}</h3>
//                   <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>{tbl.desc}</p>
//                 </div>
                
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '18px' }}>
//                   <span style={{ color: '#B45309', fontWeight: '800', fontSize: '15px' }}>{tbl.price}</span>
//                   <button onClick={() => { setSelectedTable(tbl); setStep(2); }} style={{ padding: '12px 26px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '14px', boxShadow: '0 6px 18px rgba(13,148,136,0.3)' }}>
//                     Select Table
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* STEP 2: Details & Hourly Slots */}
//       {step === 2 && (
//         <div style={{ backgroundColor: '#FAFAFA', padding: '45px', borderRadius: '28px', border: '1px solid #E5E7EB', maxWidth: '750px', margin: '0 auto', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #E5E7EB', paddingBottom: '15px' }}>
//             <div>
//               <span style={{ color: '#B45309', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Selected Category</span>
//               <h3 style={{ color: '#1F2937', fontSize: '21px', margin: '2px 0 0 0', fontWeight: '900' }}>{selectedTable?.name}</h3>
//             </div>
//             <button onClick={() => setStep(1)} style={{ background: 'none', border: '1px solid #0D9488', color: '#0D9488', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>Change Table</button>
//           </div>

//           <form onSubmit={handleProceedToPayment} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//             <div>
//               <label style={{ display: 'block', color: '#374151', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>Full Name *</label>
//               <input type="text" required placeholder="Enter your full name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '14px', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', borderRadius: '10px', color: '#111827', boxSizing: 'border-box', fontSize: '14px' }} />
//             </div>

//             <div>
//               <label style={{ display: 'block', color: '#374151', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>Mobile Number (For WhatsApp Pass) *</label>
//               <input type="tel" required placeholder="10-digit mobile number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '14px', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', borderRadius: '10px', color: '#111827', boxSizing: 'border-box', fontSize: '14px' }} />
//             </div>

//             <div style={{ display: 'flex', gap: '15px' }}>
//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', color: '#374151', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>Reservation Date *</label>
//                 <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} style={{ width: '100%', padding: '14px', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', borderRadius: '10px', color: '#111827', boxSizing: 'border-box', fontSize: '14px' }} />
//               </div>

//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', color: '#374151', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>Hourly Time Slot *</label>
//                 <select value={formData.timeSlot} onChange={(e) => setFormData({...formData, timeSlot: e.target.value})} style={{ width: '100%', padding: '14px', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', borderRadius: '10px', color: '#111827', boxSizing: 'border-box', fontSize: '14px' }}>
//                   {hourlySlots.map((slot, idx) => {
//                     const alreadyBooked = isSlotAlreadyBooked(selectedTable?.name, formData.date, slot);
//                     return (
//                       <option key={idx} value={slot} disabled={alreadyBooked} style={{ color: alreadyBooked ? '#9CA3AF' : '#111827' }}>
//                         {slot} {alreadyBooked ? '❌ [ALREADY BOOKED / HOUSEFULL]' : '✅ [Available]'}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </div>
//             </div>

//             <div style={{ backgroundColor: '#FEF2F2', borderLeft: '4px solid #DC2626', padding: '12px 16px', borderRadius: '8px' }}>
//               <p style={{ color: '#991B1B', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
//                 ⚠️ <strong>Late Arrival Policy:</strong> Tables are held strictly for <strong>5 minutes</strong> past your booked hourly slot.
//               </p>
//             </div>

//             <div style={{ backgroundColor: '#F3F4F6', padding: '18px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
//                 <span style={{ color: '#4B5563', fontSize: '14px' }}>Advance Reservation Fee:</span>
//                 <span style={{ color: '#B45309', fontWeight: '900', fontSize: '18px' }}>{selectedTable?.price}</span>
//               </div>
//               <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>✅ 100% adjustable against your final food bill at Jalmandap Restaurant, Gaya Ji.</p>
//             </div>

//             <button type="submit" style={{ padding: '16px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '16px', boxShadow: '0 8px 25px rgba(13,148,136,0.3)', marginTop: '5px' }}>
//               Proceed to QR Payment & Request Confirmation
//             </button>
//           </form>
//         </div>
//       )}

//       {/* STEP 3: QR Code & WhatsApp Dispatch (Pending Admin Confirmation State) */}
//       {step === 3 && bookingResult && (
//         <div style={{ backgroundColor: '#FAFAFA', padding: '45px', borderRadius: '28px', border: '2px solid #0D9488', maxWidth: '650px', margin: '0 auto', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
//           <div style={{ fontSize: '50px', marginBottom: '10px' }}>⏳</div>
//           <h3 style={{ color: '#B45309', fontSize: '24px', margin: '0 0 8px 0', fontWeight: '900' }}>Booking Pending Admin Approval</h3>
//           <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '20px' }}>Aapki request receive ho gayi hai. Jab tak restaurant team se **Confirm** nahi kiya jata, tab tak slot hold par hai.</p>
          
//           <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '16px', display: 'inline-block', border: '2px dashed #0D9488', marginBottom: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
//             <div style={{ width: '160px', height: '160px', backgroundColor: '#111827', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', borderRadius: '10px', fontSize: '13px', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}>
//               [ UPI QR CODE ]<br/>Jalmandap Cafe<br/>Gaya Ji, Bihar
//             </div>
//             <p style={{ color: '#B45309', fontSize: '13px', marginTop: '10px', fontWeight: 'bold' }}>UPI ID: jalmandap@oksbi</p>
//           </div>

//           <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '14px', textAlign: 'left', border: '1px solid #E5E7EB', marginBottom: '25px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <span style={{ color: '#6B7280', fontSize: '13px' }}>Booking ID:</span>
//               <strong style={{ color: '#111827', fontSize: '13px' }}>{bookingResult.bookingId}</strong>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <span style={{ color: '#6B7280', fontSize: '13px' }}>Guest Name & Mobile:</span>
//               <strong style={{ color: '#111827', fontSize: '13px' }}>{bookingResult.name} ({bookingResult.phone})</strong>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <span style={{ color: '#6B7280', fontSize: '13px' }}>Table & Slot:</span>
//               <strong style={{ color: '#B45309', fontSize: '13px' }}>{bookingResult.tableName} | {bookingResult.timeSlot}</strong>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <span style={{ color: '#6B7280', fontSize: '13px' }}>Approval Status:</span>
//               <strong style={{ color: '#DC2626', fontSize: '13px' }}>{bookingResult.status}</strong>
//             </div>
//           </div>

//           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             <button 
//               onClick={sendToWhatsApp} 
//               style={{ padding: '16px', backgroundColor: '#25D366', color: '#FFF', fontWeight: 'bold', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '15px', boxShadow: '0 6px 20px rgba(37,211,102,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
//             >
//               💬 Send Payment Screenshot to Admin WhatsApp (+91 6207141506)
//             </button>

//             <button 
//               onClick={() => { setStep(1); setBookingResult(null); setSelectedTable(null); }} 
//               style={{ padding: '12px', backgroundColor: '#E5E7EB', color: '#374151', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '13px' }}
//             >
//               Book Another Table
//             </button>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

import React, { useState } from 'react';

export default function TableBooking() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    date: new Date().toISOString().split('T')[0], 
    timeSlot: '10:00 AM - 11:00 AM', 
    guests: '4' 
  });
  const [bookingResult, setBookingResult] = useState(null);

  const tables = [
    { id: 'water-deck-4', name: '4-Seater Water Deck Table', view: 'Koi Fish Pond & Starry Ceiling View', price: '₹200 Advance Deposit', priceValue: 200, image: '/4 seater.png', desc: 'Surrounded by indoor swimming koi fish pools with direct water deck ambiance.' },
    { id: 'water-deck-6', name: '6-Seater Family Water Deck', view: 'Central Pond & Waterfall View', price: '₹250 Advance Deposit', priceValue: 250, image: '/6seater.png', desc: 'Spacious circular seating right next to the indoor waterfall and water pool.' },
    { id: 'couple-window', name: 'Couple Window-Side Table', view: 'Romantic City Lights & Arch View', price: '₹200 Advance Deposit', priceValue: 200, image: '/twoseater.png', desc: 'Intimate private arch seating with romantic lighting and window view.' },
    { id: 'normal-4', name: '4-Seater Normal Dining Table', view: 'Galaxy Dome Hall View', price: '₹150 Advance Deposit', priceValue: 150, image: '/two.png', desc: 'Comfortable luxury seating under the breathtaking cosmic galaxy ceiling.' }
  ];

  const hourlySlots = [
    '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 01:00 PM', '01:00 PM - 02:00 PM',
    '04:00 PM - 05:00 PM', '05:00 PM - 06:00 PM', '07:00 PM - 08:00 PM', '08:00 PM - 09:00 PM',
    '09:00 PM - 10:00 PM', '10:00 PM - 11:00 PM'
  ];

  const handleBookingRequest = (e) => {
    e.preventDefault();
    const bookingId = 'JAL-' + Math.floor(100000 + Math.random() * 900000);
    
    // Check kitni bookings already hain is slot ke liye
    const existingBookings = JSON.parse(localStorage.getItem('jalmandapBookings') || '[]');
    const slotBookings = existingBookings.filter(b => b.tableName === selectedTable.name && b.date === formData.date && b.timeSlot === formData.timeSlot);
    
    // Agar slot pehle se full hai toh waiting number assign karo (jaise train ticket)
    let initialStatus = 'Pending (Waiting for Staff Approval)';
    let waitingNo = null;

    if (slotBookings.length >= 2) { // Maan lijiye max 2 tables hain ek category ki
      waitingNo = slotBookings.length - 1; // e.g. Waiting #1, #2
      initialStatus = `Waiting List #${waitingNo} (Table Occupied)`;
    }

    const newBooking = { 
      bookingId, 
      ...formData, 
      tableName: selectedTable.name, 
      amount: selectedTable.price, 
      status: initialStatus,
      waitingNo
    };
    
    localStorage.setItem('jalmandapBookings', JSON.stringify([newBooking, ...existingBookings]));

    setBookingResult(newBooking);
    setStep(3);
  };

  const sendToWhatsApp = () => {
    const text = `🍽️ *TABLE BOOKING REQUEST - JALMANDAP* %0A` +
      `----------------------------------%0A` +
      `🆔 *Booking ID:* ${bookingResult.bookingId}%0A` +
      `👤 *Guest Name:* ${bookingResult.name}%0A` +
      `📞 *Mobile:* ${bookingResult.phone}%0A` +
      `🏛️ *Table:* ${bookingResult.tableName}%0A` +
      `📅 *Date:* ${bookingResult.date}%0A` +
      `⏰ *Slot:* ${bookingResult.timeSlot}%0A` +
      `⏳ *Current Status:* ${bookingResult.status}%0A` +
      `----------------------------------%0A` +
      `*(Staff will verify availability and send final confirmation pass shortly)*`;

    window.open(`https://wa.me/916207141506?text=${text}`, '_blank');
  };

  return (
    <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', minHeight: '100vh', backgroundColor: '#FFFFFF', padding: '40px 50px', boxSizing: 'border-box' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '45px', width: '100%' }}>
        <span style={{ padding: '8px 22px', borderRadius: '30px', backgroundColor: 'rgba(13,148,136,0.1)', color: '#0D9488', fontSize: '13px', border: '1px solid #0D9488', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
          ✨ Royal Table Reservation Desk
        </span>
        <h2 style={{ color: '#111827', fontSize: '42px', margin: '15px 0 10px 0', fontWeight: '900' }}>
          Choose Your Preferred Table Experience
        </h2>
        <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          Select your table and time slot. Staff will check availability and confirm your booking with a ticket status (Confirmed or Waiting Number).
        </p>
      </div>

      {step === 1 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', width: '100%' }}>
          {tables.map((tbl) => (
            <div key={tbl.id} style={{ backgroundColor: '#FAFAFA', borderRadius: '24px', border: '1px solid #E5E7EB', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <div style={{ height: '240px', backgroundColor: '#F3F4F6', position: 'relative', overflow: 'hidden' }}>
                <img src={tbl.image} alt={tbl.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                <span style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: 'rgba(13, 148, 136, 0.95)', color: '#FFF', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold' }}>{tbl.view}</span>
              </div>
              <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ color: '#1F2937', fontSize: '21px', margin: '0 0 10px 0', fontWeight: '900' }}>{tbl.name}</h3>
                  <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>{tbl.desc}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '18px' }}>
                  <span style={{ color: '#B45309', fontWeight: '800', fontSize: '15px' }}>{tbl.price}</span>
                  <button onClick={() => { setSelectedTable(tbl); setStep(2); }} style={{ padding: '12px 26px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Select Table</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {step === 2 && (
        <div style={{ backgroundColor: '#FAFAFA', padding: '45px', borderRadius: '28px', border: '1px solid #E5E7EB', maxWidth: '750px', margin: '0 auto', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #E5E7EB', paddingBottom: '15px' }}>
            <div>
              <span style={{ color: '#B45309', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Selected Category</span>
              <h3 style={{ color: '#1F2937', fontSize: '21px', margin: '2px 0 0 0', fontWeight: '900' }}>{selectedTable?.name}</h3>
            </div>
            <button onClick={() => setStep(1)} style={{ background: 'none', border: '1px solid #0D9488', color: '#0D9488', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Change Table</button>
          </div>

          <form onSubmit={handleBookingRequest} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', color: '#374151', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>Full Name *</label>
              <input type="text" required placeholder="Enter your full name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '14px', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', borderRadius: '10px', color: '#111827', boxSizing: 'border-box' }} />
            </div>

            <div>
              <label style={{ display: 'block', color: '#374151', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>Mobile Number *</label>
              <input type="tel" required placeholder="10-digit mobile number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '14px', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', borderRadius: '10px', color: '#111827', boxSizing: 'border-box' }} />
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>Reservation Date *</label>
                <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} style={{ width: '100%', padding: '14px', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', borderRadius: '10px', color: '#111827', boxSizing: 'border-box' }} />
              </div>

              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>Hourly Time Slot *</label>
                <select value={formData.timeSlot} onChange={(e) => setFormData({...formData, timeSlot: e.target.value})} style={{ width: '100%', padding: '14px', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', borderRadius: '10px', color: '#111827', boxSizing: 'border-box' }}>
                  {hourlySlots.map((slot, idx) => (
                    <option key={idx} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ backgroundColor: '#FEF2F2', borderLeft: '4px solid #DC2626', padding: '12px 16px', borderRadius: '8px' }}>
              <p style={{ color: '#991B1B', fontSize: '13px', margin: 0 }}>⚠️ <strong>Staff Verification Policy:</strong> Your booking will be reviewed by restaurant staff to check table availability. Final confirmation pass will be sent via WhatsApp.</p>
            </div>

            <button type="submit" style={{ padding: '16px', backgroundColor: '#0D9488', color: '#FFF', fontWeight: 'bold', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
              Submit Request to Restaurant Staff
            </button>
          </form>
        </div>
      )}

      {step === 3 && bookingResult && (
        <div style={{ backgroundColor: '#FAFAFA', padding: '45px', borderRadius: '28px', border: '2px solid #0D9488', maxWidth: '650px', margin: '0 auto', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '50px', marginBottom: '10px' }}>⏳</div>
          <h3 style={{ color: '#B45309', fontSize: '24px', margin: '0 0 8px 0', fontWeight: '900' }}>Request Sent to Admin!</h3>
          <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '20px' }}>Staff is checking table availability. Your status is currently: <strong>{bookingResult.status}</strong></p>
          
          <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '14px', textAlign: 'left', border: '1px solid #E5E7EB', marginBottom: '25px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#6B7280', fontSize: '13px' }}>Booking ID:</span><strong style={{ color: '#111827', fontSize: '13px' }}>{bookingResult.bookingId}</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#6B7280', fontSize: '13px' }}>Guest:</span><strong style={{ color: '#111827', fontSize: '13px' }}>{bookingResult.name} ({bookingResult.phone})</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#6B7280', fontSize: '13px' }}>Table & Slot:</span><strong style={{ color: '#B45309', fontSize: '13px' }}>{bookingResult.tableName} | {bookingResult.timeSlot}</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#6B7280', fontSize: '13px' }}>Status:</span><strong style={{ color: '#DC2626', fontSize: '13px' }}>{bookingResult.status}</strong></div>
          </div>

          <button onClick={sendToWhatsApp} style={{ padding: '16px', backgroundColor: '#25D366', color: '#FFF', fontWeight: 'bold', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '15px', width: '100%', marginBottom: '10px' }}>
            💬 Notify Staff on WhatsApp (+91 6207141506)
          </button>
          <button onClick={() => { setStep(1); setBookingResult(null); setSelectedTable(null); }} style={{ padding: '12px', backgroundColor: '#E5E7EB', color: '#374151', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '13px', width: '100%' }}>
            Book Another Table
          </button>
        </div>
      )}

    </div>
  );
}