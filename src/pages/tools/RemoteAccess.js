import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './RemoteAccess.css';

function RemoteAccess() {
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        company: 'ISPNet Prishtina',
        ip: '102.88.14.22',
        latency: 25,
        lastCheckIn: '2 minutes ago',
        secureTunnel: true,
      },
      {
        company: 'FiberLine Gjakova',
        ip: '102.88.25.109',
        latency: 32,
        lastCheckIn: '10 minutes ago',
        secureTunnel: false,
      },
      {
        company: 'Teleko Suharekë',
        ip: '102.88.34.65',
        latency: 18,
        lastCheckIn: '30 seconds ago',
        secureTunnel: true,
      },
    ];
    setNetworks(dummyData);
  }, []);

  // Simulate latency updates
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworks((prev) =>
        prev.map((net) => ({
          ...net,
          latency: Math.floor(net.latency + Math.random() * 10 - 5),
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleTunnel = (index) => {
    setNetworks((prev) =>
      prev.map((net, i) =>
        i === index ? { ...net, secureTunnel: !net.secureTunnel } : net
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="remote-access-container">
        <h2> Remote Access Monitor</h2>
        <p>ISPs and Admins can remotely view active network nodes and toggle secure tunnels.</p>

        <table className="remote-access-table">
          <thead>
            <tr>
              <th>Client / Network</th>
              <th>IP Address</th>
              <th>Latency</th>
              <th>Last Check-In</th>
              <th>Secure Tunnel</th>
            </tr>
          </thead>
          <tbody>
            {networks.map((net, index) => (
              <tr key={index}>
                <td>{net.company}</td>
                <td>{net.ip}</td>
                <td>{net.latency} ms</td>
                <td>{net.lastCheckIn}</td>
                <td>
                  <button
                    onClick={() => toggleTunnel(index)}
                    className={net.secureTunnel ? 'tunnel-yes' : 'tunnel-no'}
                  >
                    {net.secureTunnel ? 'Enabled' : 'Disabled'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default RemoteAccess;
