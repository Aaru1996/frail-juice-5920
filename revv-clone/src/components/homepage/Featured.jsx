import { Box, Button, Heading, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Featured() {
  return (
    <Box >
        <Box display="flex" justifyContent="space-around" m="20px 40px" >
            <Heading textAlign="left" color="#a8b5c0 " fontSize="26px">Featured</Heading>
            <Spacer/>
            <Button variant="ghost" >{"<"}</Button>
            <Button variant="ghost" >{">"}</Button>
        </Box>
        <Box display="flex" justifyContent="space-evenly" mt="20px" >
            <Box>
                <Image w='366px' h="170" borderRadius='20px' src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offers/Banner-Flat+500+off+blue.png" />
            </Box>
            <Box>
                <Image w='366px' h="170" borderRadius='20px' src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png" />
            </Box>
            <Box>
                <Image w='366px' h="170" borderRadius='20px' src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png" />
            </Box>
        </Box>


    </Box>
  )
}

