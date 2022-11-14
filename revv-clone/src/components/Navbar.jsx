import { Box, Button, Flex, Image, Input, Spacer,Text, VStack} from '@chakra-ui/react'
import {  Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, ModalBody } from '@chakra-ui/react'
import {  FaFacebook, FaGoogle } from 'react-icons/fa';


import React from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const model2=useDisclosure();
  const [email, setEmail]=useState("");
  const [data, setData]=useState("");
  // const navigate=useNavigate();
  const [login, setLogin]=useState(false);
  
 
  // const handleSignup=()=> {
  //   model2.onOpen();
  //   // onClose();
  // }
  const handleLogin=()=>{
    // onClose()
      
    if(!email)
    {
      alert("put valid email")
    }

      else if(!login && email)
      {
        setData(email);
        setLogin(true);
        alert('logged in')
        onClose()
       
      }
      else{
        alert("Allready logged in");
        onClose();
      }
      

  }

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
    <Flex gap={"20px"} padding="5px 8%" boxShadow='md' width="100%"  justifyContent={"center"}
     alignItems='center'  position={"fixed"} zIndex="1"  top="0"
     overflow="hidden" opacity="revert"
     bgColor="white"
     >
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

        {/* login part */}
        <Box >
           
                    <Button onClick={onOpen} variant="ghost">
                       {login? <Image src="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-nav.svg" />
                       :
                        <Image  src='https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg'/>
                       }

                          <Text fontWeight={'medium'} ml="5px" > {login ? data : "Login or Signup"}</Text>
              
                    </Button>

                    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size="xs">
                         <ModalOverlay />
                      <ModalContent>
                        <ModalHeader color="#828282" textAlign="center">LOGIN</ModalHeader>
                        <ModalCloseButton size="lg"/>
                        <ModalBody>


                          <Input type="email" placeholder='Enter Email'variant='flushed' mt="20px" onChange={(e)=>setEmail(e.target.value)}/>
                          {/* <Input type="email" placeholder='Enter Password' variant='flushed' mt="20px"/>
                          <Text color="#0ebaba">Send a new password to my email ID</Text> */}
                          <Box display="flex" gap="10px" justifyContent="center" mt="20px" >
                              <Button bgColor="#0ebaba " onClick={handleLogin} size="lg" width="40%" color="white" >Login</Button>
                          </Box>

                          {/* signup part */}

                          {/* <Box display="flex" gap="10px" justifyContent="center" mt="20px" > */}
                            {/* <Text color="#828282" >Don't have a account yet?</Text> */}
                            {/* <Button variant="ghost" color="#0ebaba" size="xs" onClick={handleSignup} >Sign Up</Button> */}
                                
                          
                              {/* 2nd modal */}
                              {/* <Modal isOpen={model2.isOpen} onClose={model2.onClose} size="xs">
                                <ModalOverlay />
                                <ModalContent>
                                  <ModalHeader textAlign="center" color="#828282">Sign Up</ModalHeader>
                                  <ModalCloseButton />
                                  <ModalBody>
                                  <VStack mt="20px" mb="20px">
                                    <Button  colorScheme='red' size="lg" width="70%" leftIcon={<FaGoogle />}>
                                    google
                                    </Button>
                                    <Button colorScheme='facebook'  size="lg" width="70%" textAlign="right" leftIcon={<FaFacebook />}>
                                      Facebook
                                    </Button>
                                  </VStack>

                                  <Input type="email" placeholder='Enter Email' variant='flushed' mt="20px"
                                    onChange={(e)=>setEmail(e.target.value)}
                                  />
                                  <Box display="flex" gap="10px" justifyContent="center" mt="20px" mb="10px" >
                                     <Button bgColor="#0ebaba " size="md" width="40%" color="white" onClick={handleProceed} >Proceed</Button>
                                  </Box>
                                  </ModalBody>
                                </ModalContent>
                              </Modal> */}

                              {/* end */}
                          
                          
                          {/* </Box> */}
                          
                          <Box borderBottom="1px solid #e2e8f0 " height="10px"></Box>
                           <VStack mt="20px" mb="20px">
                              <Button  colorScheme='red' size="lg" width="70%" leftIcon={<FaGoogle />}>
                               google
                              </Button>
                              <Button colorScheme='facebook'  size="lg" width="70%" textAlign="right" leftIcon={<FaFacebook />}>
                                Facebook
                              </Button>
                            </VStack>

                        </ModalBody>
                      </ModalContent>
                     </Modal>
                    

                

        </Box>

       
                          
                          
                

       
    </Flex>
  )
}
