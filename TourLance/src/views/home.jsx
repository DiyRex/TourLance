import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/navbar'
import Seegiriya from '../assets/seegiriya.jpg'
import '../styles/home.css'

export default function home() {
  return (
    <div>
        <div className="nav-fix">
            <NavBar />
        </div>
        <div className="homeimg">
            <img src={Seegiriya} alt="" />
        </div>
        <Footer />
    </div>
  )
}
