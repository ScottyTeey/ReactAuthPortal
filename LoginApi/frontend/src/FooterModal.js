import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RegisterModal  from './RegisterModal'; // Import RegisterModal

const FooterModal = () => {
  const [show, setShow] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false); // Add state for RegisterModal

  const handleClose = () => {
    setShow(false);
  };

  const handleJoin = () => {
    setShowRegisterModal(true); // Show the RegisterModal
    handleClose(); // Close the FooterModal
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SPORTS NEW CUSTOMER OFFER!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="bold-text">Get up to $10 in Free Bet</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleJoin}>
            Join Now
          </Button>
        </Modal.Footer>
      </Modal>
      <RegisterModal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} />
    </div>
  );
};

export default FooterModal;
