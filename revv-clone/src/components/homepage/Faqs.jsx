import { Box, Button, Heading, Image, Spacer, Text } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'

export default function Faqs() {
  return (
    <Box>
        <Box display="flex" justifyContent="space-around" m="20px 40px" >
            <Heading textAlign="left" color="#a8b5c0 " fontSize="26px">FAQs</Heading>
            <Spacer/>
            <Link to="/faq" >
                <Heading color="#0ebaba " fontSize="18px"><u>View all</u> </Heading>
            </Link>
        </Box>
        <Box mt="20px" bgColor='white' borderRadius="20px" >
            <Box p="25px" borderBottom="1px solid grey">
                <Heading fontSize="18px">Is there a speed limit?</Heading>
                <Text mt="5px">Revv allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped 
                    with speed governors as per government directives. Revv strictly advises to follow local speed limits.</Text>
            </Box>
            <Box p="25px" borderBottom="1px solid grey">
                <Heading fontSize="18px">Can I extend/ cancel/ modify?</Heading>
                <Text mt="5px">Yes, extensions are possible subject to availability & charges. Cancellations
                 & modifications will attract nominal charges as per our policy.</Text>
            </Box>
            <Box p="25px" borderBottom="1px solid grey">
                <Heading fontSize="18px">Booking criteria & documents?</Heading>
                <Text mt="5px">Min. 21 years old, have valid original government ID (Aadhar, Passport, or PAN only) and a valid driving licence for
                 “Light Motor Vehicles”, which is min. 1 year old at the time of starting the trip.</Text>
            </Box>
            <Box p="25px" >
                <Heading fontSize="18px">Are there any restricted areas?</Heading>
                <Text mt="5px">Leh/Ladhakh, Spiti Valley & Kaza/Nako regions are not permitted to take Revv cars. Customer
                 will be fully liable for any damages incurred to the car in that region.</Text>
            </Box>
        </Box>


    </Box>
  )
}
