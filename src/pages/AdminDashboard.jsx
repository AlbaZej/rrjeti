import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Dashboard.css';

function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const fetchContacts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/contact', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setContacts(data);
        } else {
          setError(data.error || 'Could not fetch contacts.');
        }
      } catch (err) {
        console.error(err);
        setError('Server error.');
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>Admin Dashboard</h2>
        {error && <p className="error">{error}</p>}

        {contacts.length === 0 ? (
          <p>No contact requests yet.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c._id}>
                    <td>{c.name}</td>
                    <td>{c.company}</td>
                    <td>{c.email}</td>
                    <td>{c.message}</td>
                    <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AdminDashboard;
