import { Box, Button, Flex, Image, Spacer,Text} from '@chakra-ui/react'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const activeStyle={
        textDecoration:"none",
        display:"flex",
        color:"green"
       
    }
    const inactiveStyle={
        display:"flex",
        color:'black',
        _hover:"green"
    }
  return (
    <Flex gap={"20px"} padding="5px 8%" boxShadow='md' justifyContent={"center"} alignItems='center'>
        <Box>
            <NavLink to="/"  >
              <Image src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" />
              <Text fontSize={"15px"} fontFamily="poppins" mt='-15px' ml='25px'>Sanitized safe</Text>
            </NavLink>
        </Box>
        <Spacer/>

        <Box>

            <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>
                 <Button>

                     <Image width="144px" heigth="14px" src="https://www.revv.co.in/grapheneImages/hyundai/hyundai-logo-sub@2x.png" />
                 </Button>
            </NavLink>
        </Box>
        <Box>
          <NavLink to='/' style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>

            <Button>
                 
                <Image width="144px" heigth="14px" src="https://www.revv.co.in/grapheneImages/hyundai/mahindra-logo-sub@2x.png" />
            </Button>
          </NavLink>
        </Box>
        <Box>
            <NavLink to="/faq" style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>
              <Text fontSize={"14px"} fontWeight="medium">FAQs</Text>
            </NavLink>
        </Box>
        <Box  >
            <NavLink to="/login" style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>

                   <Image  src='https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg'/>

                    <Text fontWeight={'medium'} ml="5px" >  Login or Signup</Text>
               
            </NavLink>
        </Box>
       
    </Flex>
  )
}
