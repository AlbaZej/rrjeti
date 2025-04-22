import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './GenerateNetwork.css';

function GenerateNetwork() {
  const [devices, setDevices] = useState('');
  const [users, setUsers] = useState('');
  const [rooms, setRooms] = useState('');
  const [topology, setTopology] = useState('Star');
  const [recommendation, setRecommendation] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();

    let recommendation = {
      topology,
      router: 'Cisco ISR 920',
      switch: 'Layer 2 switch',
      cabling: 'Cat6',
      tips: 'Ideal for small offices, enabling easy central management and scalability.',
      floorGrouping: 'One central switch per room, each connected to main router.'
    };

    const numDevices = parseInt(devices);
    const numUsers = parseInt(users);
    const numRooms = parseInt(rooms);

    if (numDevices > 20 || numUsers > 30) {
      recommendation = {
        topology: 'Mesh',
        router: 'Cisco ISR 4451',
        switch: 'Managed Layer 3 switch',
        cabling: 'Cat6A or Fiber',
        tips: 'Perfect for critical enterprise setups with maximum uptime and performance.',
        floorGrouping: 'Each room should act as a subnet with mesh interconnectivity between floors.'
      };
    } else if (numDevices > 10 || numRooms > 5) {
      recommendation = {
        topology: 'Tree',
        router: 'Cisco ISR 4331',
        switch: 'Layer 3 switch',
        cabling: 'Cat6',
        tips: 'Supports segmented architecture with hierarchical scalability.',
        floorGrouping: 'Core switch connects multiple floor-level aggregation switches.'
      };
    }

    // Rule-based AI Suggestion Engine
    recommendation.reasons = [
      'Supports high-speed data transfer and future-proof infrastructure.',
      'Improves troubleshooting and diagnostics with logical separation.',
      'Recommended layout helps reduce bottlenecks and enhance scalability.',
      'Topology selected based on device/user/room input thresholds aligned with CCNA guidelines.'
    ];

    setRecommendation(recommendation);
  };

  return (
    <>
      <Navbar />
      <div className="generate-container">
        <h2>Network Topology Generator</h2>
        <form onSubmit={handleGenerate} className="topology-form">
          <input type="number" placeholder="Number of Devices" value={devices} onChange={(e) => setDevices(e.target.value)} required />
          <input type="number" placeholder="Number of Users" value={users} onChange={(e) => setUsers(e.target.value)} required />
          <input type="number" placeholder="Number of Rooms" value={rooms} onChange={(e) => setRooms(e.target.value)} required />
          <select value={topology} onChange={(e) => setTopology(e.target.value)}>
            <option value="Star">Star</option>
            <option value="Tree">Tree</option>
            <option value="Mesh">Mesh</option>
          </select>
          <button type="submit">Generate Topology</button>
        </form>

        {recommendation && (
          <div className="recommendation-box">
            <h3>Recommended Network Setup</h3>
            <ul>
              <li><strong>Recommended Topology:</strong> {recommendation.topology}</li>
              <li><strong>Router:</strong> {recommendation.router}</li>
              <li><strong>Switch:</strong> {recommendation.switch}</li>
              <li><strong>Cabling:</strong> {recommendation.cabling}</li>
              <li><strong>Architecture Tips:</strong> {recommendation.tips}</li>
              <li><strong>Floor Plan Strategy:</strong> {recommendation.floorGrouping}</li>
            </ul>

            <div className="recommendation-details">
              <h4>Why this setup?</h4>
              <ul>
                {recommendation.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default GenerateNetwork;
