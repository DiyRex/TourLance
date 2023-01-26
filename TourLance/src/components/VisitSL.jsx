import React from 'react'
import '../styles/visitsl.css'
import Ancient from '../assets/sri-lanka-ancient-ruins-1024x682.jpg'
import Beach from '../assets/IMG_6106-1000x750.jpg'
import Safari from '../assets/11.jpg'
import Hiking from '../assets/cover-image-e1470286833146.jpg'
import Other from '../assets/db8a210249f3cd9b44dc5cd3416cadca.jpg'
import Camping from '../assets/camping-soulful-experience.jpg'

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
