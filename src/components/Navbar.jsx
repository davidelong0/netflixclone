import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'; 

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark" style={{ backgroundColor: '#221f1f !important' }}>
      <Container fluid>
       
        <Navbar.Brand href="#">
          <img src="assets/logo.png" alt="Logo" style={{ width: '100px', height: '55px' }} />
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto"> 
            <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
            <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
          </Nav>

        
          <div className="d-flex align-items-center ms-auto">
            <FaSearch className="icons" style={{ fontSize: '1.2em', color: '#f5f5f1' }} />
            <div id="kids" className="fw-bold" style={{ color: '#f5f5f1', fontSize: '0.8em', margin: '0 10px' }}>
              KIDS
            </div>
            <FaBell className="icons" style={{ fontSize: '1.2em', color: '#f5f5f1' }} />
            <FaUserCircle className="icons" style={{ fontSize: '1.2em', color: '#f5f5f1' }} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
