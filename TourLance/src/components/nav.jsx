import React , {useState} from 'react'
import '../styles/nav.css'

function nav() {
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

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
      setColorchange(!isActive)
    };
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
            <li><a href="/">Home</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Booking</a></li>
            <li><a href="">Login</a></li>
        </ul>
    </div>
    </div>
   </nav>
    </div>
  )
}

export default nav