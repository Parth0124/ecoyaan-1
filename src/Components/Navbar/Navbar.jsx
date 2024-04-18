import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css'; // Import CSS for styling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          {/* Use Link instead of <a> for internal navigation */}
          <Link to="/" style={{ textDecoration: 'none', color: 'rgb(60, 166, 60)' }}>
            <h2>Ecoyaan</h2>
          </Link>
        </div>
        <button className="navbar-toggler" onClick={toggleNavbar}>
          {/* Apply conditional CSS class for toggler animation */}
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>
        <div className={isOpen ? 'navbar-links active' : 'navbar-links'}>
          {/* Use Link instead of <a> for internal navigation */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Sell on Ecoyaan</Link>
          <Link to="/contact">Careers</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
