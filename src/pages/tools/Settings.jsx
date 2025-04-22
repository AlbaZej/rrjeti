import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Settings.css';

function Settings() {
  const [email, setEmail] = useState('user@rrjeti.com');
  const [language, setLanguage] = useState('en');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setMessage('Settings saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="settings-container">
        <h2>User Settings</h2>
        <p>Manage your account preferences below.</p>

        <form className="settings-form" onSubmit={handleSave}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

          <label>Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="al">Shqip</option>
          </select>

          <button type="submit">Save Settings</button>
          {message && <p className="save-msg">{message}</p>}
        </form>

        <div className="account-info">
          <h4>Account Info</h4>
          <p><strong>Role:</strong> User</p>
          <p><strong>Last Login:</strong> Sep 14, 2025</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Settings;