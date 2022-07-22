import React from 'react'
import { Box, Button, Heading, Image, Spacer, Text } from '@chakra-ui/react'


export default function OurJourney() {
  return (
    <Box >
        <Box display="flex" justifyContent="space-around" m="20px 40px" >
            <Heading textAlign="left" color="#a8b5c0 " fontSize="26px">Our journey so far </Heading>
            <Spacer/>
            <Button variant="ghost" >{"<"}</Button>
            <Button variant="ghost" >{">"}</Button>
        </Box>
        <Box display="flex" justifyContent="space-around" mt="20px" bgColor="white"   p="50px" borderRadius="10px">
            <Box display="flex" justifyContent='space-between' alignItems="center" flexDirection="column" 
                gap="20px" p="5px" >
                <Box>

                    <Image w="50px" h='50px'  
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/revvers.png" />
                </Box>
                <Box>
                    <Heading fontSize="18px" textAlign='center'>1 Mn + </Heading>
                    <Text  textAlign='center'>Happy Revvers</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-between' alignItems="center" flexDirection="column" 
                gap="20px" p="5px" >
                <Box>

                    <Image w="50px" h='50px'  
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/cities.png" />
                </Box>
                <Box>
                    <Heading fontSize="18px" textAlign='center'>22+ cities</Heading>
                    <Text  textAlign='center'>Across India</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-between' alignItems="center" flexDirection="column" 
                gap="20px" p="5px" >
                <Box>

                    <Image w="50px" h='50px'  
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/travel.png" />
                </Box>
                <Box>
                    <Heading fontSize="18px" textAlign='center'>50 Mn +</Heading>
                    <Text  textAlign='center'>Kms travelled</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-between' alignItems="center" flexDirection="column" 
                gap="20px" p="5px" >
                <Box>

                    <Image w="50px" h='50px'  
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/review.png" />
                </Box>
                <Box>
                    <Heading fontSize="18px" textAlign='center'>4.8 / 5</Heading>
                    <Text  textAlign='center'>20K+ reviewers</Text>
                </Box>
            </Box>
        </Box>


    </Box>
  )
}
