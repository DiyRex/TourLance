import React from 'react'
import '../styles/footer.css'
import {Link} from 'react-router-dom';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Linkedin from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import Location from '@mui/icons-material/LocationOn';
import Email from '@mui/icons-material/AlternateEmail';
import Telephone from '@mui/icons-material/Call';

function Footer() {
  return (
    <div>
        <div className="footer">
        <div className="top-container">
            <div className="mobile-view">
                <div className="logo-container">
                    <h3>Tourlance</h3>
                    <div className="data-container">
                        <Location />
                        <p>Sri Lanka</p>
                    </div>
                    <div className="data-container">
                        <Telephone/>
                        <p>+94 11 456 6789</p>
                    </div>
                    <div className="data-container">
                        <Email/>
                        <p>tourlancelk@gmail.com</p>
                    </div>
                </div>
                <div className="mobile-link-list">
                    <h3>Resources</h3>
                    <p><Link className='nav-link' to={"/about"}>About US</Link></p>
                    <p>Our Wiki</p>
                    <p>Hotels</p>
                </div>
            </div>
            <div className="link-list">
                <h3>Resources</h3>
                <p><Link className='nav-link' to={"/about"}>About US</Link></p>
                <p>Our Wiki</p>
                <p>Hotels</p>
            </div>
            <div className="link-list">
                <h3>Title</h3>
                <p>link</p>
                <p>link</p>
                <p>link</p>
            </div>
            <div className="line-container">
                <span className="line"></span>
            </div>
            <div className="contact-form">
                <h3>Contact US</h3>
                <div className="email">
                    <input type="text" name="" id="" placeholder="Enter Your Email"/>
                    <button> <SendIcon sx={{ color: "white", fontSize: 24 }}/>
                    </button>
                </div>
            </div>
        </div>
        <div className="social-container">
            <div className="social-subcontainer">
                <a href="" className="social"><Facebook sx={{ color: "white", fontSize: 30 }}/></a>
                <a href="" className="social"><Twitter sx={{ color: "white", fontSize: 30 }}/></a>
                <a href="" className="social"><Linkedin sx={{ color: "white", fontSize: 30 }}/></a>
                <a href="" className="social"><Instagram sx={{ color: "white", fontSize: 30 }}/></a>
            </div>
        </div>
        <div className="bottom-container">
            <p>©Copyright 2022. All Right Reserved</p>
        </div>
    </div>
    </div>
  )
}

export default Footer