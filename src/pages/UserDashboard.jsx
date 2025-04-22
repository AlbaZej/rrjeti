import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './UserDashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function UserDashboard() {
  const navigate = useNavigate();
  const [bandwidthData, setBandwidthData] = useState([]);
  const [activeDevices, setActiveDevices] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newUsage = +(Math.random() * 100).toFixed(2);
      setBandwidthData((prev) => [...prev.slice(-9), newUsage]);
      setActiveDevices(Math.floor(Math.random() * 50) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: Array.from({ length: bandwidthData.length }, (_, i) => `T-${bandwidthData.length - i}s`),
    datasets: [
      {
        label: 'Bandwidth (Mbps)',
        data: bandwidthData,
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Bandwidth Usage (Live)', color: '#333', font: { size: 16 } },
    },
    scales: {
      x: {
        ticks: { color: '#555' },
        grid: { color: '#eee' },
      },
      y: {
        ticks: { color: '#555' },
        grid: { color: '#eee' },
      },
    },
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="logo">Rrjeti</div>
        <nav>
          <ul>
            <li onClick={() => navigate('/dashboard')}>Dashboard</li>
            <li onClick={() => navigate('/generate-network')}>Network Design</li>
            <li onClick={() => navigate('/monitor')}>Monitoring</li>
            <li onClick={() => navigate('/remote-access')}>Remote Access</li>
            <li onClick={() => navigate('/security-checkup')}>Security</li>
            <li onClick={() => navigate('/settings')}>Settings</li>
            <li onClick={handleLogout} className="logout">Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Welcome to Rrjeti</h1>

        <div className="network-summary">
          <div className="summary-box">
            <h4>Bandwidth Usage</h4>
            <p>{bandwidthData.at(-1) || 0} Mbps</p>
          </div>
          <div className="summary-box">
            <h4>Active Devices</h4>
            <p>{activeDevices}</p>
          </div>
        </div>

        <div className="dashboard-chart-fixed">
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="dashboard-cards">
          <div className="card" onClick={() => navigate('/generate-network')}>
            <h3>Network Layout</h3>
            <p>Design topologies instantly for your business.</p>
          </div>
          <div className="card" onClick={() => navigate('/monitor')}>
            <h3>Real-Time Monitoring</h3>
            <p>Track bandwidth, devices, and traffic live.</p>
          </div>
          <div className="card" onClick={() => navigate('/remote-access')}>
            <h3>ISP Remote Access</h3>
            <p>Enable secure monitoring by your service provider.</p>
          </div>
          <div className="card" onClick={() => navigate('/security-checkup')}>
            <h3>Security Guidance</h3>
            <p>Get recommendations for network hardening.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;
