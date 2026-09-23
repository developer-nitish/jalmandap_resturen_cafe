import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import TableBooking from './components/TableBooking';
import PartyBooking from './components/PartyBooking';
import ClubPass from './components/ClubPass';
import Offers from './components/Offers';
import Reviews from './components/Reviews';
import Complaint from './components/Complaint';
import CustomerDashboard from './components/CustomerDashboard';
import StaffDashboard from './components/StaffDashboard';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ backgroundColor: '#0B0F19', color: '#F3E5AB', minHeight: '100vh', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{ padding: '30px 15px', maxWidth: '1000px', margin: '0 auto', width: '100%', flexGrow: 1 }}>
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'menu' && <Menu />}
        {activeTab === 'tableBooking' && <TableBooking />}
        {activeTab === 'partyBooking' && <PartyBooking />}
        {activeTab === 'clubPass' && <ClubPass />}
        {activeTab === 'offers' && <Offers />}
        {activeTab === 'reviews' && <Reviews />}
        {activeTab === 'complaint' && <Complaint />}
        {activeTab === 'customerPortal' && <CustomerDashboard />}
        {activeTab === 'staffPortal' && <StaffDashboard />}
        {activeTab === 'adminPortal' && <AdminDashboard />}
      </main>

      <Footer />
    </div>
  );
}