import { Box, Button, Heading, Image, Spacer } from '@chakra-ui/react'

import React from 'react'

export default function Sanitized() {
  return (
    <Box >
        <Box display="flex" justifyContent="space-around" m="20px 40px" >
            <Heading textAlign="left" color="#a8b5c0 " fontSize="26px">Sanitized & safe cars</Heading>
            <Spacer/>
            <Button variant="ghost" >{"<"}</Button>
            <Button variant="ghost" >{">"}</Button>
        </Box>
        <Box display="flex" justifyContent="space-around" mt="20px" >
            <Box>
                <Image w='270px' h="142.5" borderRadius='20px'
                 src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png" />
            </Box>
            <Box>
                <Image w='270px' h="142.5" borderRadius='20px'
                 src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_01-min.jpg" />
            </Box>
            <Box>
                <Image w='270px' h="142.5" borderRadius='20px' 
                src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg" />
            </Box>
            <Box>
                <Image w='270px' h="142.5" borderRadius='20px' 
                src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg" />
            </Box>
        </Box>


    </Box>
  )
}
