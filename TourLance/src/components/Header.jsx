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
    </>
  )
}
