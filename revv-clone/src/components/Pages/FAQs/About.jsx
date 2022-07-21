import { Accordion,Text, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
    <>
    <Heading size="15px" textAlign="left" margin="10px">ABOUT REVV</Heading>
    <Text textAlign="right" margin="0px 10px -10px 0px"  color="green">Expand All</Text>

    <Accordion defaultIndex={[0]} allowMultiple >
    <AccordionItem  bgColor="#f1f1f1" boxShadow="md" margin="10px">
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign='left' >
          What is Revv?
          </Box>
          {/* <AccordionIcon /> */}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Revv is a self drive car rental service that provides you with all the privacy, fun and convenience of your own car, without the hassles of owning and maintaining one. We drop and pick-up cars from your doorstep, so that you can spend time on the more important 
      thing - your drive! The doorstep drop and pick-up of cars is our standard way of serving you, and is available throughout the areas served by us.
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Am I eligible to use Revv's services?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Revv is a self drive car rental service that provides you with all the privacy, fun and convenience of your own car, without the hassles of owning and maintaining one. We drop and pick-up cars from your doorstep, so that you can spend time on the more important thing - your drive! The doorstep drop and pick-up of cars is our standard
       way of serving you, and is available throughout the areas served by us.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Which are the areas where I can avail Revv's services?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      We are currently serving in Bangalore, Hyderabad, Chennai, Mumbai, Pune, Delhi NCR, Chandigarh, Jaipur, Visakhapatnam, Mysore, Coimbatore, Mangalore,
       Kolkata, Kochi, Ahmedabad, Trivandrum, Surat, Tirupati , Vijayawada, Bhubaneswar, Nagpur & Vadodara.
         <br/>
         <br/>
       Delhi NCR : We are covering most parts of Delhi & Gurgaon and some parts of Noida & Ghaziabad.
       <br/>
       <br/>
       Hyderabad, Bangalore, Mumbai, Pune, Jaipur, Chennai, Visakhapatnam, Mangalore, Kolkata, Kochi, Ahmedabad, Trivandrum, Surat, Tirupati, Vijayawada, Bhubaneswar, Nagpur & Vadodara : We serve the main city and the airport area.      </AccordionPanel>
    </AccordionItem>
   
    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Is there a "Kilometres limit" to how much I can drive?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      This depends on the pricing plan that you select. If you go for the “Unlimited kms” pricing plans (available only without fuel, and only for bookings whose duration is more than 24 hours), there is absolutely no limit to the kilometres that you can drive, and you have complete flexibility of driving the car as much as you want. Revv it up! Other pricing plans have a "Kilometres limit", which varies based on the plan selected. You can still drive beyond the kilometres limit,
       but the additional kilometres clocked will attract an additional charge.
        </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Are there restrictions on where I can travel?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      All of our cars are equipped with an All India Tourist Permit, so you are free to drive anywhere in the country. All India Tourist Permit means that the car is legally permitted to ply in any state in the country, after paying the inter-state taxes at the state borders. However, we do not permit taking Revv vehicles to Leh/Ladakh region, Kaza/Nako region and spiti valley. We also advise you to avoid bad terrains 
      (especially in non- SUV cars) and areas affected by civil unrest.
        <br/>
        <br/>
        Please note: Interstate taxes at the state borders are to be paid and borne by the customer. Our cars are equipped with Fast tag devices for your convenience. The toll charges incurred 
        during your trip will be billed to you in your invoice. 
        </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Do I have to bring the car back to the same location?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      No, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking
       later, however, it will then attract applicable modification charges.
        </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Can I book a one-way trip?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Yes, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking later, 
      however, it will then attract applicable modification charges.
        </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          What is Peak Season? Are the prices different during Peak Season?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Peak season refers to festive periods of very high demand. Our hourly rental tariffs are different for weekdays (Mon-Fri), weekends (Sat-Sun) and the Peak Season. The dates and prices 
      for the Peak Season are dynamically decided based on the demand.
        </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          What kind of cars can I choose from?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      We have a curated selection of cars, which includes block-buster models across segments such as SUVs, ultra-luxury cars, hatchbacks and sedans. We are constantly increasing our portfolio; so keep a close
       watch for your favourite car, just in case we don’t have it already.
        </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          In the event of an accident or damage to the vehicle, what is my maximum liability?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      In the event of damages, your liability is limited to a maximum of Rs 10000. You will need to pay Damage Fee equivalent to the repair cost (as estimated by an authorized dealership) and downtime losses, upto a maximum of Rs 10000. This is independent of the nature and 
      terms of the insurance cover that Revv has on the cars.
      <br/>
      <br/>
      Please note that the maximum liability policy is intended to benefit and protect the responsible user. In situations of irresponsible or unsafe or negligent usage, there could be discretionary exceptions to this policy, whereby the user could be liable for all damages irrespective of whether or not Revv is able to claim insurance in such cases.
       Examples of such situation include, but are not limited to:
       <br/>
       <br/>
       <ul>
          <li>When the User is not in compliance with the laws and/or with terms of the Revv User Agreement</li>
          <li>When the User is found to be under the influence of alcohol/narcotics while driving</li>
          <li>When the User is over-speeding (i.e. above prescribed speed limit of road or 125 Kms/Hr, whichever is lower)
When the User is in violation of traffic rules or of the Motor</li>
       </ul>

       <br/>
       <br/>
       In cases where the estimated damage charges exceed the security 
       deposit, we will request the user to pay the same at the time of 
       returning the car. In cases of non-payment, Revv reserves the right 
       of legal action, reporting to credit bureau and reporting to other 
       authorities or persons, irrespective of their direct relevance to the case.
       <br/>
       <br/>
       In cases of accident, fare for the unused hours will not be refunded.
       <br/>
       <br/>
       Revv typically avoids charging for very minor damages (e.g., minor 
       scratches and dents), and covers the vast
        majority of damage incidents under the maximum liability policy.
        <br/>
       <br/>
       In cases of collision or User failure, towing and impounding charges 
       will be paid by the User. In cases of vehicle failure, towing
        and impounding charges will be paid by us.
        </AccordionPanel>
    </AccordionItem>

  </Accordion>
  </>
  )
}
