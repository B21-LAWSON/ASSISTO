import React, { useState } from 'react';
import { Row, Col, Button, Modal, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png';
import { CiSettings } from "react-icons/ci";
import PieChart from './Piechar';


function Dashboard() {
  // États pour afficher/masquer le modale
  const [waterConsumption, setWaterConsumption] = useState([300, 150, 100, 50]);

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
    <div className='d-flex max-h-100'>
        <div className='col-md-auto border' style={{ width: '20%' }}>
          <div className='d-flex justify-content-center border-bottom'>
            <Image src={logo} width={200} height={200} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column',  }}>
            <button type="button" className='btn btn-primary mb-3'>Tableau de bord</button>
            <button type="button" className='btn btn-primary'>Notifications</button>
          </div>
        </div>

        <div className='border' style={{ width: '80%', padding: '5px 10px' }}>
          <div className='d-flex justify-content-end align-items-center border-bottom'>
            <h3>Mr. Assist'o</h3>
            <CiSettings style={{ width: '40', height:'40', left: '10px' }} />
          </div>

          <div>
              <Container style={{ width: '1000px', height: '250px' }} className='border' >
                <Row className="justify-content-md-center border h-100 align-items-center" >
                  <Col className='border justify-content-center'> 
                    <div style={{ width: '220px' }} className='d-grid gap-2'>
                      <Button variant="primary" size="lg">Cuisine</Button>
                      <Button variant="primary" size="lg">Douche</Button>
                    </div>
                   </Col>

                   <Col className='border justify-content-center'> 
                    <div style={{ width: '220px' }} className='d-grid gap-2'>
                      <Button variant="primary" size="lg">SDB</Button>
                      <Button variant="primary" size="lg">Toilette</Button>
                    </div>
                   </Col>

                  <Col xs={6} className='border' style={{ height: '170px' }}>
                    Defis
                  </Col>
                </Row>
            </Container>

            <Container style={{ width: '1000px', height: '335px' }} className='border'>
              consommation
              <div>
                <h2>Surveillance de la consommation d'eau</h2>
                <PieChart dataValues={waterConsumption} />
              </div>
            </Container>
          </div>
        </div>
       

      
     {/*  <Row className="mb-4">
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
      </Row> */}

    {/*   <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {selectedRoom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
          <Button variant="primary" onClick={handleClose}>Enregistrer</Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default Dashboard;
