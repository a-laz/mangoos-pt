import React, { useState, useEffect, useRef } from 'react';
import '../style/Navbar.css';
import logo from '../assets/logo.png'; // Ensure this path is correct
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Mongoos PT Logo" />
        </Link>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="/services" onClick={closeMenu}>Our Services</a></li>
          <li><a href="/insurance" onClick={closeMenu}>Insurance & Payments</a></li>
          <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
          <li><a href="/book" className="book-button" onClick={closeMenu}>Book Appointment</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;