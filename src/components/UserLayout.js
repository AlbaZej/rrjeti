import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/UserDashboard.css'; // ✅ Corrected path

function UserLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="logo">🔌 Rrjeti</div>
        <nav>
          <ul>
            <li onClick={() => navigate('/dashboard')}>📊 Dashboard</li>
            <li onClick={() => navigate('/generate-network')}>🧩 Network Design</li>
            <li onClick={() => navigate('/monitor')}>📡 Monitoring</li>
            <li onClick={() => navigate('/remote-access')}>🌐 Remote Access</li>
            <li onClick={() => navigate('/security-checkup')}>🛡️ Security</li>
            <li onClick={() => navigate('/settings')}>⚙️ Settings</li>
            <li onClick={() => navigate('/help')}>❓ Help</li>
            <li onClick={handleLogout} className="logout">🚪 Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default UserLayout;
