import { Box } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cars from './Pages/Cars'
import FAQs from './Pages/FAQs/FAQs'

import Home from './Pages/Home'
import Login from './Pages/Login'

export default function AllRoutes() {
    const [input, setInput] = useState({city:'Bangalore', startDate:'',endDate:''})
  return (
    <Box  marginTop="65px" >
        <Routes>
            <Route path='/' element={<Home inputData={{input, setInput}}/>}/>
            <Route path='/faq' element={<FAQs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/car" element={<Cars inputData={{input, setInput}}/>} />
        </Routes>
    </Box>
  )
}
