import { Accordion,Text, AccordionButton, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Trip() {
  return (
    <>
    <Heading size="15px" textAlign="left" margin="10px">YOUR TRIP</Heading>
    <Text textAlign="right" margin="0px 10px -10px 0px"  color="green">Expand All</Text>

    <Accordion defaultIndex={[0]} allowMultiple >
    <AccordionItem  bgColor="#f1f1f1" boxShadow="md" margin="10px">
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign='left' >
          What documents do I need to take the delivery of my Revv car?
          </Box>
          {/* <AccordionIcon /> */}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      While taking the delivery of your car, you 
      will need to show your ORIGINAL Driving License and ID proof (same as the ones whose details you provided while making the booking). These documents will be verified for validity. In case these documents are unavailable/invalid/unverifiable, your booking will be subject to cancellation. Revv’s decision in this matter will be final and binding. Please note that driving license printed on A4 sheet of paper (original or otherwise) will 
      not be considered as a valid document.
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          How do I check-in for my booking?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Our delivery executive will deliver the car to your doorstep. Before he hands- over the car to you, he will share with you a pre-filled checklist that summarises the car’s condition at that time. Please confirm the details in the checklist, sign it and you are good to go. In case any information in the checklist is not correct, please notify
       the delivery executive or call us.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          What do I do if the vehicle breaks down or if I 
          meet with an accident?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      In such cases, please notify us Revv immediately (by calling) and we will guide you through the entire process. We will coordinate with the road-side assistance and insurance. Unless unavoidable, please do not leave the scene of the accident until proper support has arrived. You may be required to file/sign formality
       documents associated with the accident.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          How do I check-out from my booking?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      On your return, please check-out from your booking using our app. You also have the option of calling us to notify. Even if you forget to notify us, you will be charged 
      only till the actual end time of your booking.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          What are the requirements when I drive across a State border?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Each State has different procedures and regulations. Most States will require a commercially registered vehicle to stop at the border RTO station to pay the relevant tolls/taxes. All Revv cars are equipped with original copies of the RC Card, Insurance Note, Self-Drive License, and the All India Permit, which will help you get through this conveniently. For many states,
       the state entry tax can be paid online as well.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          What is the amount that I must pay at 
          a State border crossing?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Prices vary depending on State and vehicle type
       (larger vehicles have higher tolls/taxes).
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bgColor="#f1f1f1" boxShadow="md" margin="10px" >
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
          What if I leave something in Revv's car?
          </Box>
         
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} borderTop="1px solid grey" textAlign="left">
      Well, we will do our best to help you find your belongings if you inform us soon enough. But as you can imagine, we cannot guarantee it since finding it back is not fully in our control. So, please check the car 
      thoroughly before handing it back to us.
      </AccordionPanel>
    </AccordionItem>

   


  </Accordion>
  </>

  )
}
