import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/nav';
import '../styles/pricing.css';

export default function pricing() {
  return (
    <div>
      <div className="nav-fix">
            <Nav />
        </div>
        <div className="content">content</div>
        <Footer />
    </div>
  )
}
