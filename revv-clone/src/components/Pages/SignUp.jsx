import React from 'react'
import {  Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, ModalBody } from '@chakra-ui/react'
import { Box, Button, Image, Input, Text, VStack} from '@chakra-ui/react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'


export default function SignUp() {

    const { isOpen, onOpen, onClose } = useDisclosure()
  return (

    <>
    <Box>
     <Button onClick={onOpen} variant="ghost">

                <Image  src='https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg'/>

                <Text fontWeight={'medium'} ml="5px" >  Login or Signup</Text>

                </Button>

                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size="xs">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader color="#828282" textAlign="center">Sign Up</ModalHeader>
                <ModalCloseButton size="lg"/>
                <ModalBody>


                <Input type="email" placeholder='Enter Email'variant='flushed' mt="20px"/>
                <VStack mt="20px" mb="20px">
                    <Button  colorScheme='red' size="lg" width="70%" leftIcon={<FaGoogle />}>
                    google
                    </Button>
                    <Button colorScheme='facebook'  size="lg" width="70%" textAlign="right" leftIcon={<FaFacebook />}>
                        Facebook
                    </Button>
                 </VStack>
                <Box borderBottom="1px solid #e2e8f0 " height="10px"></Box>

            </ModalBody>
            </ModalContent>
            </Modal>

        </Box>

    </>
  )
}
