import React from 'react'
import '../styles/footer.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="top">
                <div className="bl-1">
                    <p className="logo">Tourlance</p>
                </div>
                <div className="bl-2"></div>
                <div className="bl-3"></div>
                <div className="bl-4"></div>
            </div>
            <div className="mid">
                <div className="social">
                    <ul>
                        <li><a href="#" className="links"><FacebookRoundedIcon sx={{ color: "white", fontSize: 50 }} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <p className="copyright">©Copyright 2022. All Right Reserved</p>
            </div>
        </div>

    </div>
  )
}
