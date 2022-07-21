import { Accordion,Text, AccordionButton, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Booking() {
  return (
    <>
    <Heading size="15px" textAlign="left" margin="10px">YOUR BOOKINGS</Heading>
    <Text textAlign="right" margin="0px 10px -10px 0px"  color="green">Expand All</Text>

    <Accordion defaultIndex={[0]} allowMultiple >
    <AccordionItem  bgColor="#f1f1f1" boxShadow="md" margin="10px">
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign='left' >
          How do I make a booking?
          </Box>
          {/* <AccordionIcon /> */}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Booking with us is quick and easy. You can make a booking through our app (android or iOS), website or by giving us a call at +91-9250035555. Just select your city, date and time of your trip, key in your location and choose the type of car you want. Then enter your payment details,
       confirm payment and you are ready to go!
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          What if I need to modify or cancel my booking?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      You can modify or cancel your booking through either our app, website or by calling us. Our ability to modify/cancel the booking and the relevant charges depend upon your time of informing us and availability of cars. Please refer to our Fee policy for 
      more details on the allowable modifications and applicable charges.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          What happens if I return the car late?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      We understand that sometimes there can be last-minute changes in your plans, and we will try our best to accommodate them. But in situations where it can cause trouble to the next user (ie, the person whose booking starts after your ends), we cannot allow late returns. Please refer to our 
      Fee policy for more details on late fees and extension charges
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          If I return the car before the scheduled end time of my 
          booking, do I get any refunds?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      In case of shortening, we can try arranging an earlier pickup of the car, if you inform us at least 3 hours before your preferred pick-up time. However, no charges or refunds 
      will be applicable on the base fare for the original trip.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          What all is included in my booking?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Our prices include the rental charge, insurance and GST. You have the option of “with fuel” and “without fuel” pricing. In “with fuel” pricing, prices include fuel. In “without fuel” pricing, prices exclude fuel.
        <br />
        <br/>
Our prices do not include tolls, inter-state taxes and parking. No hidden charges!
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Is fuel included in my booking?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      For “with fuel” pricing: Prices include fuel. If you need to refuel during your journey, we will reimburse the cost. Just show the fuel bills to our delivery executive at the time of 
      returning the car, and allow him to take a photograph of them. Please do NOT hand-over the original bill to the delivery executive, we will not be responsible for loss of bills handed over to the delivery executive. Please note that:
Fuel bills need to be shown to our delivery executive at the time of return, we will NOT be able to reimburse fuel bills shared with us later.
The fuel expense needs to reconcile reasonably with the distance travelled.
The fuel expense needs to reconcile reasonably with the standard fuel efficiency
 of the car. For the purpose of this reconciliation and for the benefit of the user, we assume a lower mileage than what is defined by ARAI (Automotive Research Association of India).
The date on the fuel bill should fall within the booking period.
Hand-written fuel bills will be considered invalid.
For “without fuel” pricing: Prices exclude fuel. In case you are
 returning the car at a lower fuel level than what was received, we will charge a flat Rs 500 refuelling service charge + actual fuel cost to get the tank to the same level as what was received.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          You can only use one offer/promo per booking
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      You can only use one offer/promo per booking.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Can I create a booking with Revv if I have international DL?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      A person who is having an International DL, can definitely 
      create a booking with Revv under the condition that He/She must have an IDP (International Driving Permit)
       alongwith International DL and passport.
      </AccordionPanel>
    </AccordionItem>


  

    
   
    


  </Accordion>
  </>

  )
}
