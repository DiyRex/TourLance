import React from 'react'
import '../styles/visitsl.css'
import Ancient from '../assets/Ancient.png'
import Beach from '../assets/Beach.png'
import Safari from '../assets/Safari.png'
import Hiking from '../assets/Hiking.png'
import Other from '../assets/other.png'
import Camping from '../assets/camping.png'

export default function VisitSL() {
  return (
    <>
      <div className='ancient'>
        <img src={Ancient} alt="" />
      </div>
      <div className='safari'>
        <img src={Safari} alt="" />

      </div>
      <div className='Hiking'>
        <img src={Hiking} alt="" />

      </div>
      <div className='Camping'>
        <img src={Camping} alt="" />

      </div>
      <div className='Other'>
        <img src={Other} alt="" />

      </div>
      <div className='Beach'>
        <img src={Beach} alt="" />

      </div>
    </>
  )
}

