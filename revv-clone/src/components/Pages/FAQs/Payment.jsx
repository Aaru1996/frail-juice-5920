import { Accordion,Text, AccordionButton, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Payment() {
  return (
    <>
    <br/>
    <br/>
    <Heading size="15px" textAlign="left" margin="10px">PAYMENTS & REFUNDS</Heading>
     <Text textAlign="right" margin="0px 10px -10px 0px"  color="green">Expand All</Text>
    <Accordion defaultIndex={[0]} allowMultiple >
    <AccordionItem  bgColor="#f1f1f1" boxShadow="md" margin="10px">
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign='left' >
          What modes of payments are accepted?
          </Box>
          {/* <AccordionIcon /> */}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      We accept payments by credit cards, debit cards, net-banking, UPI and popular wallets. 
      Payments need to be made in advance through our website or mobile app.
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Do I get any reimbursement for the fuel I fill in my Revv car?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      For “with fuel” pricing: If you need to refuel during your journey, we will reimburse the cost. Just show the fuel bills to our delivery executive at the time of returning the car, and allow him to take a photograph of them.
       Please do NOT hand-over the original bill to the delivery executive, we will not be responsible for loss of bills handed over to the delivery executive. Please note that:
Fuel bills need to be shown to our delivery executive at the time of return, we will NOT be able to reimburse fuel bills shared with us later.
The fuel expense needs to reconcile reasonably with the distance travelled.
The fuel expense needs to reconcile reasonably with the standard fuel efficiency of the car. For the purpose of this reconciliation and for the benefit of the user, we assume a lower mileage than what is defined by ARAI (Automotive Research Association of India).
The date on the fuel bill should fall within the booking period.
Hand-written fuel bills will be considered invalid.
For “without fuel” pricing: We give you a full tank, and we need the same back from you. Hence there is no need for any fuel reimbursements. In the rare instances where we give you less-than- full tank fuel, and you return us more fuel than what you got from us, we will reimburse the difference.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Who pays for parking and tolls/inter-state entry taxes?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      These expenses depend on your usage, hence you need to pay for them.
       <br/>
       <br/>
Our cars are equipped with Fast tag devices for your convenience. The toll charges
 incurred during your trip will be billed to you in your invoice.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          Do I need to pay the fines incurred during my booking, 
          due to parking/traffic violations?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Yes.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          How much time does it take to get my refund back?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      All refunds are typically made within 10 days of completing the bookings. However, in some cases, there might be some procedural delays from the banks. Please do let us know in case your refund has not been credited to your account within 10
       days and we will make sure we do everything we can to expedite it.
      </AccordionPanel>
    </AccordionItem>

   


  </Accordion>
  </>

  )
}
