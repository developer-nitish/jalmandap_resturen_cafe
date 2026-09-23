import React, { useState } from 'react';

export default function StaffDashboard() {
  const [staffTasks] = useState([
    { id: 1, task: 'Prepare Blue Lagoon for Table 3', status: 'In Progress' },
    { id: 2, task: 'Birthday setup for Table 6', status: 'Pending' }
  ]);

  return (
    <div style={{ backgroundColor: '#131C31', padding: '30px', borderRadius: '20px', border: '1px solid rgba(212,175,55,0.3)', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#FFF', marginBottom: '20px' }}>Staff Portal & Live Table Tasks</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {staffTasks.map((t) => (
          <div key={t.id} style={{ backgroundColor: '#0B0F19', padding: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(212,175,55,0.2)' }}>
            <div>
              <span style={{ color: '#FFF', fontWeight: 'bold', fontSize: '14px', display: 'block' }}>{t.task}</span>
              <span style={{ color: '#14B8A6', fontSize: '11px' }}>Status: {t.status}</span>
            </div>
            <button onClick={() => alert('Task marked as completed!')} style={{ padding: '6px 12px', backgroundColor: '#0D9488', color: '#FFF', border: 'none', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Mark Done</button>
          </div>
        ))}
      </div>
    </div>
  );
}