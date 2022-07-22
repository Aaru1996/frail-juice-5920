import React from 'react'
import { Box, Button, Heading, Image, Spacer, Text } from '@chakra-ui/react'


export default function HappyCustomer() {
  return (
    <Box >
    <Box display="flex" justifyContent="space-around" m="20px 40px" >
        <Heading textAlign="left" color="#a8b5c0 " fontSize="26px">Happy customers</Heading>
        <Spacer/>
        <Button variant="ghost" >{"<"}</Button>
        <Button variant="ghost" >{">"}</Button>
    </Box>
    <Box display="flex" justifyContent="space-around" mt="20px" >
        <Box display="flex" justifyContent='space-around' alignItems="center" p="5px" w='366px' h="103.96" borderRadius="10px" bgColor="white">
           
            <Box>
                <Heading fontSize="18px">Rohit Ray</Heading>
                <Text>This app is as user friendly as the policies. The process is as easy as nursery rhyme.Nicely maintained cars</Text>
            </Box>
        </Box>
        <Box display="flex" justifyContent='space-around' alignItems="center" p="5px" w='366px' h="103.96"borderRadius="10px" bgColor="white">
           
            <Box>
                <Heading  fontSize="18px">Home delivery & return </Heading>
                <Text>On-time doorstep service at your preferred location and Time</Text>
            </Box>
        </Box>
        <Box display="flex" justifyContent='space-around' alignItems="center" p="10px" gap='5px' w='366px'
         h="103.96" borderRadius="10px" bgColor="white">
           
            <Box>
                <Heading  fontSize="18px">Home delivery & return </Heading>
                <Text>On-time doorstep service at your preferred location and Time</Text>
            </Box>
        </Box>
    </Box>


</Box>

  )
}
