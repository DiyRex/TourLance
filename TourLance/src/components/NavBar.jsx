import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

function NavBar() {
  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <Navbar className={colorChange ? 'nav colorChange' : 'nav'}>
        <Container >
          <Navbar.Brand href="#home"><span className="logo-title">TourLance</span></Navbar.Brand>
          <Nav className="">
            <Nav.Link className='nav-link' href="#home"><Link className='nav-link' to={"/home"}>Home</Link></Nav.Link>
            <Nav.Link className='nav-link' href="#pricing"><Link className='nav-link' to={"/pricing"}>Pricing</Link></Nav.Link>
            <Nav.Link className='nav-link' href="#booking"><Link className='nav-link' to={"/booking"}>Booking</Link></Nav.Link>
            <Nav.Link className='nav-link' href="#login"><Link className='nav-link' to={"/login"}>Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;