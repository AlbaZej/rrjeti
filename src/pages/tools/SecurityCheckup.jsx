import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './SecurityCheckup.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function SecurityCheckup() {
  const [checks, setChecks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const dummySecurityChecks = [
      {
        device: 'Router A',
        status: 'Secure',
        issues: [],
        tips: ['Firewall is active', 'SSH access restricted'],
      },
      {
        device: 'Switch B',
        status: 'Warning',
        issues: ['No port security enabled'],
        tips: ['Enable port security to prevent rogue devices'],
      },
      {
        device: 'Server C',
        status: 'Risk',
        issues: ['Open port 21 (FTP)', 'No firewall detected'],
        tips: ['Close unused ports', 'Install and configure UFW or iptables'],
      },
    ];
    setChecks(dummySecurityChecks);
  }, []);

  const downloadPDF = () => {
    const input = document.querySelector('.security-grid');
    const user = localStorage.getItem('email') || 'Unknown User';
    const now = new Date().toLocaleString();

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.setFontSize(18);
      pdf.text('Rrjeti – Security Checkup Report', 10, 15);

      pdf.setFontSize(11);
      pdf.text(`Generated for: ${user}`, 10, 23);
      pdf.text(`Date: ${now}`, 10, 30);

      pdf.addImage(imgData, 'PNG', 10, 35, pdfWidth - 20, pdfHeight);
      pdf.save(`Security_Report_${user.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`);
    });
  };

  const handleScan = () => {
    setLoading(true);
    setTimeout(() => {
      setChecks([
        {
          device: 'Firewall X',
          status: 'Warning',
          issues: ['Default credentials', 'Ping replies enabled'],
          tips: ['Change login password', 'Disable ICMP echo replies'],
        },
        {
          device: 'IoT Device',
          status: 'Risk',
          issues: ['Open port 23 (Telnet)'],
          tips: ['Disable Telnet', 'Enable firmware auto-updates'],
        },
        {
          device: 'Main Switch',
          status: 'Secure',
          issues: [],
          tips: ['Spanning Tree enabled', 'VLAN segmentation active'],
        },
      ]);
      setLoading(false);
      setScanned(true);
    }, 2500);
  };

  return (
    <>
      <Navbar />
      <div className="security-checkup-container">
        <h2 className="security-title">Security Guidance</h2>
        <p className="security-sub">View your network’s current security posture and expert guidance to improve it.</p>

        <div className="scan-controls">
          <button className="scan-btn" onClick={handleScan} disabled={loading}>
            {loading ? ' Scanning...' : scanned ? ' Scan Again' : ' Scan Now'}
          </button>

          <button className="download-btn" onClick={downloadPDF} disabled={loading}>
             Download PDF Report
          </button>
        </div>

        <div className="security-grid">
          {checks.map((check, index) => (
            <div key={index} className={`security-card ${check.status.toLowerCase()}`}>
              <h3>{check.device}</h3>
              <p className="status-label">Status: <strong>{check.status}</strong></p>
              <div className="card-section">
                <h4>Issues</h4>
                <ul>
                  {check.issues.length > 0 ? check.issues.map((issue, i) => <li key={i}>{issue}</li>) : <li>None</li>}
                </ul>
              </div>
              <div className="card-section">
                <h4>Recommendations</h4>
                <ul>
                  {check.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SecurityCheckup;