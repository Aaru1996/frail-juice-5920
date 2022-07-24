import React from 'react'
import { Box, Button, Heading, Image, Spacer, Text } from '@chakra-ui/react'


export default function Investers() {
  return (
    <Box  fontFamily="Poppins"mt="50px" >
        <Box display="flex" justifyContent="space-around" m="20px 40px" >
            <Heading textAlign="left" color="#a8b5c0 " fontSize="26px">Our Investers </Heading>
            <Spacer/>
            <Button variant="ghost" >{"<"}</Button>
            <Button variant="ghost" >{">"}</Button>
        </Box>
        <Box display="flex" justifyContent="space-around" mt="20px" bgColor="white" boxShadow="xs"  p="50px" borderRadius="10px">
            <Box display="flex" justifyContent='space-between' alignItems="center" flexDirection="column" 
                gap="20px" p="5px" >
                <Box>

                    <Image w="142.5px" h='100px'
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/hyundai.webp" />
                </Box>
                <Box>
                   
                    <Text  textAlign='center'>Hyundai Motor Company</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-between' alignItems="center" flexDirection="column" 
                gap="20px" p="5px" >
                <Box>

                    <Image w="142.5px" h='100px' 
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/edelweissFinancialServices.webp" />
                </Box>
                <Box>
                    
                    <Text  textAlign='center'>Edelweiss Financial Services</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-between' alignItems="center" flexDirection="column" 
                gap="20px" p="5px" >
                <Box>

                    <Image w="142.5px" h='100px'  
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/dreamIncubator.webp" />
                </Box>
                <Box>
                    
                    <Text  textAlign='center'>Dream Incubator</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent='space-between' alignItems="center" flexDirection="column" 
                gap="20px" p="5px" >
                <Box>

                    <Image w="142.5px" h='100px'  
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/beenext.webp" />
                </Box>
                <Box>
                   
                    <Text  textAlign='center'>Beenext</Text>
                </Box>
            </Box>
        </Box>


    </Box>
  )
}
