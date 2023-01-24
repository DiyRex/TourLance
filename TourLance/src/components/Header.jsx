import React from 'react'
import '../styles/Header.css'
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
    <>
      <logo>
        <img className='logo' src="https://img.icons8.com/color/48/null/tlauncher.png"/>
      </logo>
      <div className='buttons'>
        <Button className='nav-btn'>Home</Button>
        <Button className='nav-btn'>Pricing</Button>
        <Button className='nav-btn'>Booking</Button>
        <Button className='nav-btn'>Login</Button>
      </div>
      <div>
        <p>
        Are you going to visit Sri Lanka ?
Here is the best tourist guide for your reference. We have introduced day based tour plans. You can explore them and select those packages. as well as packages we provide transport for your packages. All you need to do is select a package and make a request for vehicle owners. Once they will accept your request you're good to go.
        </p>
      </div>
    </>
  )
}
