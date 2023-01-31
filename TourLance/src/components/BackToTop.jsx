import React from 'react';
import { useEffect, useState } from "react";
import '../styles/BackToTop.css'
import UpIcon from '../assets/up.png'

function BackToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
        });
    };
  return (
    <div>
        {showButton && (
        // <button onClick={scrollToTop} className="back-to-top">
            <img src={UpIcon} onClick={scrollToTop} className="back-to-top"/>
        // </button>
      )}
    </div>
  )
}

export default BackToTop