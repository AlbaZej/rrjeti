import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import GenerateNetwork from './pages/tools/GenerateNetwork';
import Monitoring from './pages/tools/Monitoring';
import RemoteAccess from './pages/tools/RemoteAccess';
import SecurityCheckup from './pages/tools/SecurityCheckup';
import Settings from './pages/tools/Settings';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/generate-network" element={<GenerateNetwork />} />
        <Route path="/monitor" element={<Monitoring />} /> 
        <Route path="/remote-access" element={<RemoteAccess />} />
       <Route path="/security-checkup" element={<SecurityCheckup />} />
       <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;
