import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Booking from './Booking'
import Payment from './Payment'
import Trip from './Trip';
import './FAQs.css'

export default function FAQs() {
  return (
    <div style={{display:"flex"}}>
        <div className='faq' >
          <div >About Revv</div>
          <div >Payments & Refund</div>
          <div >Your Booking</div>
          <div >Your Trip</div>
        </div>
        <div>

        <About/>
        <Booking/>
        <Payment/>
        <Trip/>
        </div>
    </div>
  )
}
