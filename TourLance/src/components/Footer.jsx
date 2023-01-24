import React from 'react'
import '../styles/footer.css'
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Linkedin from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import Location from '@mui/icons-material/LocationOn';
import Email from '@mui/icons-material/AlternateEmail';
import Telephone from '@mui/icons-material/Call';

export default function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="top">
                <div className="bl-1">
                    <div className='title'>Tourlance</div>
                    <div className="info">
                        <div className="info-field">
                            <Location />
                            <h3>Sri Lanka</h3>
                        </div>
                        <div className="info-field">
                            <Email />
                            <h3>tourlancelk@gmail.com</h3>
                        </div>
                        <div className="info-field">
                            <Telephone />
                            <h3>+94 77 123 4567</h3>
                        </div>
                    </div>
                </div>
                <div className="bl-2">
                    <h2>Title 1</h2>
                    <ul>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                    </ul>
                    
                </div>
                <div className="bl-3">
                <h2>Title 2</h2>
                    <ul>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                    </ul>
                </div>
                <div className="bl-4">
                    <h2>Contact US</h2>
                    <div className="mail-form">
                    <input type="text" name="" placeholder='Enter Your Email :' id="mail-field" />
                    <button className="mail-send"><SendIcon sx={{ color: "white", fontSize: 24 }}/></button>
                    </div>
                    
                </div>
            </div>
            <div className="line-class">
                <span className="line"></span>
                </div>
            <div className="mid">
                <div className="social">
                    <ul>
                        <li><a href="#" className="links"><Facebook sx={{ color: "white", fontSize: 50 }} /></a></li>
                        <li><a href="#" className="links"><Twitter sx={{ color: "white", fontSize: 50 }} /></a></li>
                        <li><a href="#" className="links"><Linkedin sx={{ color: "white", fontSize: 50 }} /></a></li>
                        <li><a href="#" className="links"><Instagram sx={{ color: "white", fontSize: 50 }} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
            ©Copyright 2022. All Right Reserved
            </div>
        </div>

    </div>
  )
}
