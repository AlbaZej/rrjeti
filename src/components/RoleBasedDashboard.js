import React, { useEffect, useState } from 'react';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';

function RoleBasedDashboard() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  if (role === null) {
    return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Loading dashboard...</p>;
  }

  if (role === 'admin') return <AdminDashboard />;
  if (role === 'user') return <UserDashboard />;

  return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Unauthorized</p>;
}

export default RoleBasedDashboard;
