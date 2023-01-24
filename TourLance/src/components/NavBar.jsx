import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

function NavBar() {
  return (
    <>
      <Navbar className='nav'>
        <Container >
          <Navbar.Brand href="#home"><span className="logo-title">TourLance</span></Navbar.Brand>
          <Nav className="me-">
            <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-link' href="#pricing">Pricing</Nav.Link>
            <Nav.Link className='nav-link' href="#booking">Booking</Nav.Link>
            <Nav.Link className='nav-link' href="#login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;