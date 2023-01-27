import React from 'react'
import '../styles/visitsl.css'
import Ancient from '../assets/Ancient.png'
import Beach from '../assets/Beach.png'
import Safari from '../assets/Safari.png'
import Hiking from '../assets/Hiking.png'
import Other from '../assets/other.png'
import Camping from '../assets/camping.png'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function VisitSL() {
  return (
    <Container>
        <h1 className='visitsl-title'>Visit sri lanka</h1>
        <div className='rows'>
            <div className='columns'>
                <div className='ancient'>
                    <img src={Ancient} alt="" />
                
                </div>
                <div className='safari'>
                    <img src={Safari} alt="" />

                </div>
            </div>
            <div className='columns-down'>
                <div className='Hiking'>
                    <img src={Hiking} alt="" />

                </div>
                <div className='Camping'>
                    <img src={Camping} alt="" />

                </div>
            </div>
            <div className='columns'>
                <div className='Other'>
                    <img src={Other} alt="" />

                </div>
                <div className='Beach'>
                    <img src={Beach} alt="" />

                </div>
            </div>
        </div>
    </Container>
  )
}

