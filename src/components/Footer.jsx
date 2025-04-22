// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Rrjeti</h3>
          <p>Intelligent network automation for businesses and ISPs in Kosovo.</p>
        </div>
        <div className="footer-right">
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Rrjeti. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
