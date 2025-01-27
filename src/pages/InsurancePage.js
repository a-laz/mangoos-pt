import React from 'react';
import { Link } from 'react-router-dom';
import '../style/InsurancePage.css';
import Navbar from '../components/Navbar';

function InsurancePage() {
  const insuranceList = [
    "1199",
    "AETNA",
    "AFFINITY",
    "BCBS",
    "CIGNA - ASHLINK",
    "CMO MONTEFIORE CARE MANAGEMENT",
    "ELDERPLAN",
    "EMBLEM HEALTH -GHI",
    "EMBLEM HEALTH MEDICARE",
    "EMPIRE BCBS",
    "FIDELIS - NYNM",
    "HEALTH PLUS",
    "HEALTHFIRST",
    "HUMANA CHOICE POS",
    "MEDICARE",
    "METROPLUS",
    "PALLADAN HIP",
    "UNITED HEALTH CARE",
    "VNSY CHOICE",
    "WELLCARE"
  ];

  return (
    <div className="insurance-page">
      <Navbar />
      <div className="insurance-content">
        <h1>Insurance & Payments</h1>
        <div className="insurance-info">
          <h2>Accepted Insurance Plans</h2>
          <p>We accept most major insurance plans. Below is a list of our currently accepted insurance providers:</p>
          <div className="insurance-list">
            {insuranceList.map((insurance, index) => (
              <div key={index} className="insurance-item">
                {insurance}
              </div>
            ))}
          </div>
          <div className="insurance-note">
            <h3>Please Note:</h3>
            <p>Insurance coverage may vary. We recommend contacting your insurance provider to verify your coverage for physical therapy services. Our staff is also available to help you understand your benefits and coverage.</p>
          </div>
          <Link to="/book">
            <button className="book-button">Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InsurancePage;
