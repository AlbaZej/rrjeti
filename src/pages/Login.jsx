import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Login successful!');
        localStorage.setItem('token', data.token);
        // localStorage.setItem('role', data.role); 
        navigate('/dashboard'); // 🔁 redirect!
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>Login to Rrjeti</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />

            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />

            <button type="submit">Login</button>
          </form>
          <p className="note">
            Don’t have access yet? <a href="/contact">Contact us</a> to request an account.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
