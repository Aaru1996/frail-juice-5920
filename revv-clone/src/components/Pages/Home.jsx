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
import SocialMediaIcon from '../homepage/SocialMediaIcon';
import Footer from '../homepage/Footer';


export default function Home({inputData}) {
 
 return (
  <Box bgColor="#f1f4f8" >
      <Search inputData={inputData} />
      <Box p="6%">
          <Featured />
          <Sanitized/>
          <WhyRevv/>
          <Faqs />
          <HappyCustomer/>
          <OurJourney/>
          <Investers/>
          <ServiceableCities/>
          <SocialMediaIcon/>
          <Footer/>
      </Box>
  </Box>
 )
}

