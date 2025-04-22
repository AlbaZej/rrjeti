import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-container">
          <h1>Build Smarter Networks with Confidence</h1>
          <p>Rrjeti delivers automated network design, real-time analytics, and security recommendations for ISPs and businesses in Kosovo.</p>
          <a href="/login" className="primary-btn">Login to Platform</a>
        </div>
      </section>

      <section className="section about">
        <div className="container">
          <h2>What is Rrjeti?</h2>
          <p>
            Rrjeti is an intelligent network management platform designed for modern infrastructure.
            Whether you’re a small business or an ISP, we help you generate optimal network layouts,
            monitor usage, detect security issues, and streamline your infrastructure — all in one dashboard.
          </p>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <h2>Core Capabilities</h2>
          <div className="grid">
            <div className="feature-box">
              <h3>Automatic Network Layouts</h3>
              <p>Design network topologies in seconds based on business requirements, device types, and user needs.</p>
            </div>
            <div className="feature-box">
              <h3>Real-Time Monitoring</h3>
              <p>Live analytics of traffic, bandwidth, and connected devices with alerting for anomalies.</p>
            </div>
            <div className="feature-box">
              <h3>ISP Remote Access</h3>
              <p>Enable service providers to remotely track client networks and suggest upgrades or fixes.</p>
            </div>
            <div className="feature-box">
              <h3>Security Guidance</h3>
              <p>Receive real-time firewall and security suggestions tailored to your configuration and usage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>1. Log In</h3>
              <p>Access your dashboard securely with your credentials.</p>
            </div>
            <div className="step">
              <h3>2. Define Your Needs</h3>
              <p>Input your devices, users, and site configuration.</p>
            </div>
            <div className="step">
              <h3>3. Review & Optimize</h3>
              <p>Use the tools to generate layouts, monitor live data, and apply suggestions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <h2>Ready to streamline your network?</h2>
          <p>Login or contact our team to get onboarded with Rrjeti today.</p>
          <a href="/contact" className="secondary-btn">Contact Us</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LandingPage;
