import { Box, Button, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function WhyRevv() {
  return (
    <Box fontFamily="Poppins"mt="50px">
        <Box display="flex" justifyContent="space-around" m="20px 40px" >
            <Heading textAlign="left" color="#a8b5c0 " fontSize="26px">Why Revv?</Heading>
            <Spacer/>
            <Button variant="ghost" >{"<"}</Button>
            <Button variant="ghost" >{">"}</Button>
        </Box>
        <Box display="flex" justifyContent="space-around" mt="20px"  >
            <Box display="flex" justifyContent='space-around' alignItems="center" boxShadow="xs" p="5px" w='366px' h="103.96" borderRadius="10px" bgColor="white">
                <Box>

                    <Image w="50px" h='50px'  
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/home.png" />
                </Box>
                <Box>
                    <Heading fontSize="18px">Home delivery & return </Heading>
                    <Text>On-time doorstep service at your preferred location and Time</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-around' alignItems="center" boxShadow="xs" p="5px" w='366px' h="103.96"borderRadius="10px" bgColor="white">
                <Box>

                    <Image  w="50px" h='50px' borderRadius='20px' 
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/price.png" />
                </Box>
                <Box>
                    <Heading  fontSize="18px">Home delivery & return </Heading>
                    <Text>On-time doorstep service at your preferred location and Time</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-around' alignItems="center" boxShadow="xs" p="10px" gap='5px' w='366px'
             h="103.96" borderRadius="10px" bgColor="white">
                <Box >

                    <Image borderRadius='20px'  w="50px" h='50x' 
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/maintained.png" />
                </Box>
                <Box>
                    <Heading  fontSize="18px">Home delivery & return </Heading>
                    <Text>On-time doorstep service at your preferred location and Time</Text>
                </Box>
            </Box>
        </Box>


    </Box>
  )
}

