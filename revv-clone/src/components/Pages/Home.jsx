import React from 'react'
import SignUp from './SignUp';
import {  Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
   useDisclosure, ModalBody, Button, Box } from '@chakra-ui/react'
import Search from '../homepage/Search';
import Featured from '../homepage/Featured';
import Sanitized from '../homepage/Sanitized';
import WhyRevv from '../homepage/WhyRevv';
import Faqs from '../homepage/Faqs';
import HappyCustomer from '../homepage/HappyCustomer';
import OurJourney from '../homepage/OurJourney';
import Investers from '../homepage/Investers';
import ServiceableCities from '../homepage/ServiceableCities';


export default function Home() {
 
 return (
  <Box bgColor="#f1f4f8" >
      <Search />
      <Box p="6%">
          <Featured />
          <Sanitized/>
          <WhyRevv/>
          <Faqs />
          <HappyCustomer/>
          <OurJourney/>
          <Investers/>
          <ServiceableCities/>
      </Box>
  </Box>
 )
}

