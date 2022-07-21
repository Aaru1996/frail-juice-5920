import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FAQs from './Pages/FAQs/FAQs'

import Home from './Pages/Home'
import Login from './Pages/Login'

export default function AllRoutes() {
  return (
    <Box  marginTop="80px" >
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/faq' element={<FAQs/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </Box>
  )
}
