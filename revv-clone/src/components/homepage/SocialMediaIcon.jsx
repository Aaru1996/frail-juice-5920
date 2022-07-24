import React from 'react'
import { Box, Button, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function SocialMediaIcon() {
  return (
    <Box  fontFamily="Poppins"mt="50px" >
       
        <Box display="flex" gap="20%" m="auto" mt="30px" h="350px" bgColor="white" boxShadow="md"
          p="40px" borderRadius="10px">
            <Box display="flex"   flexDirection="column" 
                gap="20px"  >
                <Box>

                    <Image w="96px" h='71px'
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/revv-logo.png" />
                </Box>
                <Box>
                   
                    <Text fontSize="14px" textAlign='left'>© 2022 Primemover Mobility Technologies Pvt Ltd. All <br/> rights reserved</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-between' alignItems="center" flexDirection="column" 
                gap="20px" p="5px" >
                
                <Box>
                    <Link to="/">
                        <Text>Home</Text>
                    </Link>
                    <Link to="/faq">
                        <Text>FAQs</Text>
                    </Link>
                    <Text>Policy</Text>
                    <Text>Block</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-between' flexDirection="column"> 
                <Text>Social</Text>
                <Box display="flex" justifyContent='space-between' alignItems="center" mt="10px"  
                    gap="25px" p="5px" >
                        <Box>
                            <Image w="10px" h='20px'  
                            src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/facebook.png" />
                        </Box>   
                        <Box>
                            <Image w="20px" h='20px'  
                            src="	https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/twitter.png" />
                        </Box>   
                        <Box>
                            <Image w="20px" h='20px'  
                            src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/instagram.png" />
                        </Box>   
                        <Box>
                            <Image w="20px" h='20px'  
                            src="	https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/youtube.png" />
                        </Box>   
                        <Box>
                            <Image w="20px" h='20px'  
                            src="	https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/linkedIn.png" />
                        </Box>            
                </Box>
                <Text mt="40px">Download the Revv App!</Text>
                <Box display='flex' gap='5px' border="1px solid #e2e8f0 " p="5px" mt="10px">
                    <Box>
                        <Image w='20px' h="20px" src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/appstore_apple.webp" />
                    </Box>
                    <Box>
                        <Text>Download <b>App Store</b></Text>
                    </Box>
                </Box>
                <Box display='flex' gap='5px' border="1px solid #e2e8f0 " p="5px" mt='10px'>
                    <Box>
                        <Image w='20px' h="20px" src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/playstore_google.webp" />
                    </Box>
                    <Box>
                        <Text>Download <b>Google Play</b> </Text>
                    </Box>
                </Box>
            </Box>    
               
           
        </Box>


    </Box>
  )
}

