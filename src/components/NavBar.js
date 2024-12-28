import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Mongoos PT Logo" />
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-btn__burger"></div>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/insurance" onClick={toggleMenu}>Insurance & Payments</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Our Services</Link></li>
          <li><Link to="/reviews" onClick={toggleMenu}>Reviews</Link></li>
          <li><Link to="/book" className="book-button" onClick={toggleMenu}>Book Appointment</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;