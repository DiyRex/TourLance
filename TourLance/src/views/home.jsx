import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/navbar'
import Seegiriya from '../assets/seegiriya2.jpg'
import '../styles/home.css'
import VisitSL from '../components/VisitSL'

export default function home() {
  return (
    <div>
        <div className="nav-fix">
            <NavBar />
        </div>
        <div className="homeimg">
            <img className='main-img' src={Seegiriya} alt="" />
        </div>
        <VisitSL />
        <Footer />
    </div>
  )
}
