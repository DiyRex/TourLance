import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/nav';
import Seegiriya from '../assets/seegiriya2.jpg'
import '../styles/home.css'
import VisitSL from '../components/VisitSL'

export default function home() {
  return (
    <div className='home-page'>
        <div className="nav-fix">
            <Nav />
        </div>
        <div className="homeimg">
            <img className='main-img' src={Seegiriya} alt="" />
        </div>
        <VisitSL />
        <Footer />
    </div>
  )
}
