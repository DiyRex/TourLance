import React , {useState} from 'react'
import {Link} from 'react-router-dom';
import '../styles/nav.css'

function nav() {
  const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
      setColorchange(true);
    };

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
    <div>
        <nav className={colorChange ? 'nav colorChange' : 'nav'}>
    <div class="nav-container">
    <div class="left">
        <a href="/">
            <span class="logo-title">TourLance</span>
        </a>
    </div>
    
    <div class="right">
        <div class="hamburger-menu" id="hamburgerbtn" onClick={toggleClass}>
            <div class="hamburger"></div>
            <div class="hamburger"></div>
            <div class="hamburger"></div>
        </div>
        <ul className={isActive ? "nav-links active" : "nav-links"}>
            <li><Link className='nav-link' to={"/home"}>Home</Link></li>
            <li><Link className='nav-link' to={"/pricing"}>Pricing</Link></li>
            <li><Link className='nav-link' to={"/booking"}>Booking</Link></li>
            <li><Link className='nav-link' to={"/login"}>Login</Link></li>
        </ul>
    </div>
    </div>
   </nav>
    </div>
  )
}

export default nav