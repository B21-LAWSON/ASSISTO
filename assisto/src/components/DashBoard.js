import React, { useState } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';

function Dashboard() {
  // États pour afficher/masquer le modale
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  // Fonction pour ouvrir le modale
  const handleShow = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  // Fonction pour fermer le modale
  const handleClose = () => setShowModal(false);

  return (
    <div className="dashboard">
      {/* Section des boutons */}
      <Row className="mb-4">
        <Col xs={6} md={3}>
          <Button variant="primary" className="w-100" onClick={() => handleShow('Cuisine')}>Cuisine</Button>
        </Col>
        <Col xs={6} md={3}>
          <Button variant="primary" className="w-100" onClick={() => handleShow('SDB')}>SDB</Button>
        </Col>
        <Col xs={6} md={3}>
          <Button variant="primary" className="w-100" onClick={() => handleShow('Douche')}>Douche</Button>
        </Col>
        <Col xs={6} md={3}>
          <Button variant="primary" className="w-100" onClick={() => handleShow('Toilette')}>Toilette</Button>
        </Col>
      </Row>

      {/* Modale */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {selectedRoom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
          <Button variant="primary" onClick={handleClose}>Enregistrer</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
