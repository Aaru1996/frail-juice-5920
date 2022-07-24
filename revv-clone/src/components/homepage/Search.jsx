import { Box, Button, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

export default function Search() {
  return (
    <Box fontFamily="Poppins"mt="50px">
    <Box w="100%" h="20px" bgColor="#fff7e2"></Box>
    <Box display='flex' w="100%" >
        <Box    
                backgroundPosition="left"
                backgroundRepeat="no-repeat"
                bgColor="#fff7e2"
                m="0px"
                p="0px"
            w="50%"
            h='90vh'
        >
      <Box backgroundColor="white" display='flex' flexDirection="column"  margin="auto" padding="20px"   minW="200px" height="500px" maxW="500px" ml="100px" 
               boxShadow="lg" borderRadius="20px">
        <Box display="flex" justifyContent="center" borderRadius="20px" bgColor="#0ebaba" m='auto' width="80%" gap="10%"
         
               padding="5px">
            <Box bgColor="white" p="5px" borderRadius='10px'>
                <Text fontSize="20px"><b>Rentals</b></Text>
                  <Text> for hours & days</Text>
            </Box>
            <Box>
                <Text fontSize="20px"><b>Subscriptions</b></Text>
                  <Text> for months & years</Text>
            </Box>
        </Box>
        <Box width="50%" justifyContent="center" m="auto"  >
            <Box display="flex"  justifyContent="center" alignItems="center">

               <Image width="120px" src='https://www.revv.co.in/imgs/logo-rentals.svg' />
            </Box>
            <Box fontSize="20px" >

                Car Rental in Bangalore
            </Box>
        </Box>
        <Box w="80%" m="auto" height='120px' border='1px solid #c6c7d6'   borderRadius="20px">
            <Box display="flex" justifyContent="flex-start" borderBottom='1px solid #c6c7d6' >
                <Box ml="20px" display="flex" justifyContent="center" alignItems="center">

                  <Image w="20px" h="20px" src="https://www.revv.co.in/assets/RentalImages/HomeScreen/locationRental.svg" />
                </Box>
                <Box>

                 <Input border="0px"  _focus={{border:"0px"}}  borderRadius="0px"  h="60px" defaultValue="Bangalore" />
                </Box>
            </Box>
            <Box display="flex" w="100%">
                <Box borderRight='1px solid #c6c7d6'>
                    <Text textAlign="center" mb="-15px">Start Time</Text>
                    <Input type="datetime-local" border="0px" h="50px" w="185px"  />
                </Box>
                <Box>
                <Text mb="-15px" textAlign="center">End Time</Text>
                     <Input type="datetime-local" border="0px" placeholder='End Time' h="50px"  w="183px" />
                </Box>
            </Box>
        </Box>
        <Box display="flex" justifyContent="center">
            <Button width="70%" height="60px" bgColor="#0ebaba" _hover={{color:"none"}}  borderRadius="100px" color="white" fontSize="20px">Search</Button>
        </Box>
      </Box>

       </Box>
            <Box width="50%"  bgColor="#fff7e2 " display="flex" flexDirection="row-reverse" 
            justifyContent="center" alignItems='center' >
                <Image w="80%" src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp" />
            </Box>
     </Box>
    </Box>
  )
}
