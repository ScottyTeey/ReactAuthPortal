import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal'; // Import RegisterModal
import logo from '../src/img/logo-betway.jpg'; // Import your logo image

const Navbar = () => {
  // State variables to manage the visibility of login and register modals
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Functions to show/hide login modal
  const handleLoginModalShow = () => {
    setShowLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  // Functions to show/hide register modal
  const handleRegisterModalShow = () => {
    setShowRegisterModal(true);
  };

  const handleRegisterModalClose = () => {
    setShowRegisterModal(false);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <BootstrapNavbar bg="black" variant="dark">
        <BootstrapNavbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="My App Logo"
            height="50"
            className="d-inline-block align-top"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar-collapse" />
        <BootstrapNavbar.Collapse id="navbar-collapse">
          {/* No content in the collapse section */}
        </BootstrapNavbar.Collapse>
        <Nav className="ml-auto">
          {/* Buttons for Login and Register */}
          <div className="navbar-buttons">
            <Button
              variant="success"
              onClick={handleLoginModalShow}
              as={Link} to="#"
              className="white-button"
            >
              Login
            </Button>
            <Button
              variant="success"
              onClick={handleRegisterModalShow}
              as={Link} to="#"
              className="white-button"
            >
              Register
            </Button>
          </div>
        </Nav>
      </BootstrapNavbar>

      {/* Dark Banner */}
      <div className={`banner dark-banner`}>
        <div className="banner-links">
          {/* Banner Navigation Links */}
          <Nav className="ml-auto banner-links">
            <Nav.Link as={NavLink} to="/sports">Sports</Nav.Link>
            <Nav.Link as={NavLink} to="/live-real">Live & Real</Nav.Link>
            <Nav.Link as={NavLink} to="/casino">Casino</Nav.Link>
            <Nav.Link as={NavLink} to="/esports">Esports</Nav.Link>
            <Nav.Link as={NavLink} to="/vegas">Vegas</Nav.Link>
          </Nav>
        </div>
      </div>

      {/* Login and Register Modals */}
      <LoginModal show={showLoginModal} onHide={handleLoginModalClose} />
      <RegisterModal show={showRegisterModal} onHide={handleRegisterModalClose} /> {/* Use RegisterModal */}
    </div>
  );
};

export default Navbar;
