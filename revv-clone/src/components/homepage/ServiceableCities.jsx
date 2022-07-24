import React from 'react'
import { Box, Button, Heading, Image, Spacer, Text } from '@chakra-ui/react'


export default function ServiceableCities() {
  return (
    <Box bgColor="#2a2b36"fontFamily="Poppins" mt="50px" p="40px" boxShadow="xs" borderRadius="15px">
       <Heading color='white'>Serviceable cities</Heading>
        <Box display="flex" gap="200px" mt="20px" borderRadius="20px"  >
            <Box display="flex" gap='10px' alignItems="left" flexDirection="column" 
               color='#808d94  '    >
                  
                    <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Bangalore</Text>
                    <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Hyderabad</Text>
                    <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Mumbai</Text>
                    <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Delhi-NCR</Text>
                    <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Chennai</Text>
                    <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Pune</Text>
                    <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Kolkata</Text>
                    <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Ahmedabad</Text>
               
            </Box>
            <Box display="flex" gap='10px' alignItems="left" flexDirection="column" 
                color='#808d94  '   >

                                <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Bhubaneswar</Text>
                                <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Chandigarh</Text>
                                <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Coimbatore</Text>
                                <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Jaipur</Text>
                                <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Kochi</Text>
                                <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Mangalore</Text>
                                <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Mysore</Text>
                                <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Nagpur</Text>
               
            </Box>
            <Box display="flex" gap='10px' alignItems="left" flexDirection="column" 
               color='#808d94  '   >

                            <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Surat      </Text>
                            <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Tirupati</Text>
                            <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Trivandrum</Text>
                            <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Vadodara</Text>
                            <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Vijayawada</Text>
                            <Text _hover={{color:"white",cursor:"pointer"}}>Car Rental in Vizag</Text>
               
            </Box>
           
        </Box>


    </Box>
  )
}
