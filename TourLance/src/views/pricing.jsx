import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/navbar';
import '../styles/pricing.css';

export default function pricing() {
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
