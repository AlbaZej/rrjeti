import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Monitoring.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function Monitoring() {
  const [bandwidth, setBandwidth] = useState([]);
  const [devices, setDevices] = useState([]);
  const [timestamp, setTimestamp] = useState([]);
  const [deviceList, setDeviceList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBandwidth = Math.floor(Math.random() * 100) + 10;
      const newDevices = Math.floor(Math.random() * 10) + 1;
      const time = new Date().toLocaleTimeString();

      setBandwidth((prev) => [...prev.slice(-9), newBandwidth]);
      setDevices((prev) => [...prev.slice(-9), newDevices]);
      setTimestamp((prev) => [...prev.slice(-9), time]);

      // Simulate device list updates
      const dummyDevices = [
        { name: 'Workstation A', ip: '192.168.1.101', status: 'Active', usage: '12 Mbps' },
        { name: 'Laptop B', ip: '192.168.1.102', status: 'Idle', usage: '2 Mbps' },
        { name: 'Printer C', ip: '192.168.1.103', status: 'Active', usage: '0.5 Mbps' },
        { name: 'Camera D', ip: '192.168.1.104', status: 'Offline', usage: '0 Mbps' },
      ];
      setDeviceList(dummyDevices);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const bandwidthChart = {
    labels: timestamp,
    datasets: [
      {
        label: 'Bandwidth (Mbps)',
        data: bandwidth,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const devicesChart = {
    labels: timestamp,
    datasets: [
      {
        label: 'Connected Devices',
        data: devices,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="monitoring-container">
        <h2>Real-Time Network Monitoring</h2>

        <div className="charts-section">
          <div className="chart-box">
            <h4>Bandwidth Usage</h4>
            <Line data={bandwidthChart} />
          </div>

          <div className="chart-box">
            <h4>Connected Devices</h4>
            <Line data={devicesChart} />
          </div>
        </div>

        <div className="alerts-section">
          <h4>Alerts</h4>
          <ul>
            {bandwidth[bandwidth.length - 1] > 90 && <li>⚠️ High bandwidth usage detected</li>}
            {devices[devices.length - 1] > 8 && <li>⚠️ Too many connected devices</li>}
          </ul>
        </div>

        <div className="device-table">
          <h4>Connected Devices</h4>
          <table>
            <thead>
              <tr>
                <th>Device Name</th>
                <th>IP Address</th>
                <th>Status</th>
                <th>Bandwidth Usage</th>
              </tr>
            </thead>
            <tbody>
              {deviceList.map((device, index) => (
                <tr key={index}>
                  <td>{device.name}</td>
                  <td>{device.ip}</td>
                  <td>{device.status}</td>
                  <td>{device.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Monitoring;
