import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/navbar';
import '../styles/booking.css';

export default function booking() {
  return (
    <div>
      <div className="nav-fix">
            <NavBar />
        </div>
        <div className="content">content</div>
        <Footer />
    </div>
  )
}
