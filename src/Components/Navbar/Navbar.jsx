import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the user is logged in
  const token = localStorage.getItem("token");

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsMenuOpen(false);

    navigate("/login");
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          MedAppointment
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/doctors" onClick={closeMenu}>
          Doctors
        </Link>

        <Link to="/appointments" onClick={closeMenu}>
          Appointments
        </Link>

        <Link to="/instant-consultation" onClick={closeMenu}>
          Instant Consultation
        </Link>

        {/* Authentication Links */}
        {!token ? (
          <>
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>

            <Link to="/signup" onClick={closeMenu}>
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile" onClick={closeMenu}>
              Profile
            </Link>

            <button
              type="button"
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

    </nav>
  );
};

export default Navbar;
