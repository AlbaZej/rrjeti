// src/pages/Contact.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert('Request sent successfully.');
        setForm({ name: '', company: '', email: '', message: '' });
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (error) {
      alert('Server error. Please try again later.');
      console.error(error);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-form">
          <h2>Request Access to Rrjeti</h2>
          <p>Our team will review your request and help onboard your business or ISP.</p>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />

            <label>Company</label>
            <input type="text" name="company" value={form.company} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />

            <label>Message</label>
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />

            <button type="submit">Submit Request</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
