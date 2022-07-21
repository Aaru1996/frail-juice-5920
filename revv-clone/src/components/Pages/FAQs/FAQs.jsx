import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Booking from './Booking'
import Payment from './Payment'
import Trip from './Trip';
import './FAQs.css'
import { position } from '@chakra-ui/react'

export default function FAQs() {
  return (
    <div style={{display:"flex", width:"100%"}}>
        <div className='faq' >
          <div >About Revv</div>
          <div >Payments & Refund</div>
          <div >Your Booking</div>
          <div >Your Trip</div>
        </div>


        <div className='faq2'>

        <About/>
        <Booking/>
        <Payment/>
        <Trip/>
        </div>
    </div>
  )
}
