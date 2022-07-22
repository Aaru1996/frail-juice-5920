import React from 'react'
import { Box, Button, Heading, Image, Spacer, Text } from '@chakra-ui/react'


export default function ServiceableCities() {
  return (
    <Box bgColor="black" mt="50px" p="40px">
       <Heading color='white'>Serviceable cities</Heading>
        <Box display="flex" gap="200px" mt="10px" >
            <Box display="flex" gap='10px' alignItems="left" flexDirection="column" 
               color='white'    >
                  
                    <Text>Car Rental in Bangalore</Text>
                    <Text>Car Rental in Hyderabad</Text>
                    <Text>Car Rental in Mumbai</Text>
                    <Text>Car Rental in Delhi-NCR</Text>
                    <Text>Car Rental in Chennai</Text>
                    <Text>Car Rental in Pune</Text>
                    <Text>Car Rental in Kolkata</Text>
                    <Text>Car Rental in Ahmedabad</Text>
               
            </Box>
            <Box display="flex" gap='10px' alignItems="left" flexDirection="column" 
               color='white'  >

                                <Text>Car Rental in Bhubaneswar</Text>
                                <Text>Car Rental in Chandigarh</Text>
                                <Text>Car Rental in Coimbatore</Text>
                                <Text>Car Rental in Jaipur</Text>
                                <Text>Car Rental in Kochi</Text>
                                <Text>Car Rental in Mangalore</Text>
                                <Text>Car Rental in Mysore</Text>
                                <Text>Car Rental in Nagpur</Text>
               
            </Box>
            <Box display="flex" gap='10px' alignItems="left" flexDirection="column" 
               color='white'  >

                            <Text>Car Rental in Surat      </Text>
                            <Text>Car Rental in Tirupati</Text>
                            <Text>Car Rental in Trivandrum</Text>
                            <Text>Car Rental in Vadodara</Text>
                            <Text>Car Rental in Vijayawada</Text>
                            <Text>Car Rental in Vizag</Text>
               
            </Box>
           
        </Box>


    </Box>
  )
}
