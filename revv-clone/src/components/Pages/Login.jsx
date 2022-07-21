import { Button, Modal,Text, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, ModalBody } from '@chakra-ui/react'
import React from 'react'

export default function Login() {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
        <>
        login
          {/* <Button onClick={onOpen}>Open Modal</Button> */}
    
          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight='bold' mb='1rem'>
                  You can scroll the content behind the modal
                </Text>
                {/* <Lorem count={2} /> */}
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <button variant='ghost'>Secondary Action</button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
  

