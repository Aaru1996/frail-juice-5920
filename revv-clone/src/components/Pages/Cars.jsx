import { Box, Button, Heading, HStack, Image, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useSyncExternalStore } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Cars({inputData}) {
  
     const dataArr=[
      {
          id:1,
          car:"Hyundai",
          model:"Santro MT",
          image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvSANTRO.png",
          drive:"Manual",
          engine:"Petrol",
          seat:5,
          price:2768,
          perKmCharge:8

      },
      {
          id:2,
          car:"Maruti",
          model:"Alto K10",
          image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Altok10.png",
          drive:"Automatic",
          engine:"Diesel",
          seat:5,
          price:2208,
          perKmCharge:7

      },
      {
          id:3,
          car:"Mahindra",
          model:"Scorpio",
          image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/scorpio.png",
          drive:"Automatic",
          engine:"Diesel",
          seat:7,
          price:5280,
          perKmCharge:14

      },
      {
          id:4,
          car:"Honda",
          model:"City (P)",
          image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/honda+city.png",
          drive:"Manual",
          engine:"Petrol",
          seat:5,
          price:4448,
          perKmCharge:12

      },
      {
          id:5,
          car:"Toyota",
          model:"Innova Crysta",
          image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/InnovaWEBPAGE.png",
          drive:"Manual",
          engine:"Diesel",
          seat:7,
          price: 7488,
          perKmCharge:15

      },
      {
          id:6,
          car:"Ford",
          model:"Innova EscoSport (P)",
          image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/InnovaWEBPAGE.png",
          drive:"Manual",
          engine:"Petrol",
          seat:5,
          price: 4224,
          perKmCharge:13

      },
       {
          id:7,
          car:"Hyundai","model":"Santro MT",
          image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvSANTRO.png",
          drive:"Manual",
          engine:"Petrol",
          seat:5,
          price:2668,
          perKmCharge:8

      },
      
      {
         id:8,
         car:"Hyundai",
         model:"Santro MT",
         image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvSANTRO.png",
         drive:"Manual",
         engine:"Petrol",
         seat:5,
         price:2768,
         perKmCharge:8

     },
     {
         id:9,
         car:"Maruti",
         model:"Alto K10",
         image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Altok10.png",
         drive:"Automatic",
         engine:"Diesel",
         seat:5,
         price:2208,
         perKmCharge:7

     },
     {
         id:10,
         car:"Mahindra",
         model:"Scorpio",
         image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/scorpio.png",
         drive:"Automatic",
         engine:"Diesel",
         seat:7,
         price:5280,
         perKmCharge:14

     },
     {
         id:11,
         car:"Honda",
         model:"City (P)",
         image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/honda+city.png",
         drive:"Manual",
         engine:"Petrol",
         seat:5,
         price:4448,
         perKmCharge:12

     },
     {
         id:12,
         car:"Toyota",
         model:"Innova Crysta",
         image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/InnovaWEBPAGE.png",
         drive:"Manual",
         engine:"Diesel",
         seat:7,
         price: 7488,
         perKmCharge:15

     },
     {
         id:13,
         car:"Ford",
         model:"Innova EscoSport (P)",
         image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/InnovaWEBPAGE.png",
         drive:"Manual",
         engine:"Petrol",
         seat:5,
         price: 4224,
         perKmCharge:13

     },
      {
         id:14,
         car:"Hyundai","model":"Santro MT",
         image:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvSANTRO.png",
         drive:"Manual",
         engine:"Petrol",
         seat:5,
         price:2668,
         perKmCharge:8

     }
                   
                    ]
    const [data, setData]=useState(dataArr);
   
    const navigate=useNavigate();
    const {input}=inputData
 
    const handleFilter=(e)=>{
            var selected=e.target.value;
            if(selected==='hyundai')
            {
                 var updatedData=dataArr.filter((elem)=> {
                         if(elem.car=='Hyundai')
                         return elem
                 })
                 setData(updatedData);
            }
            if(selected==='mahindra')
            {
                 var updatedData=dataArr.filter((elem)=> {
                         if(elem.car=='Mahindra')
                         return elem
                 })
                 setData(updatedData);
            }
            if(selected==='toyota')
            {
                 var updatedData=dataArr.filter((elem)=> {
                         if(elem.car=='Toyota')
                         return elem
                 })
                 setData(updatedData);
            }
            if(selected==='all')
            {
                
                 setData(dataArr);
            }
    }

    const handleChange=(e)=>{
      
        const selected=e.target.value;
      
         if(selected==='lth')
         {
            data.sort((a,b)=>{
                   return (a.price - b.price)
            })
         }
         if(selected==='htl')
         {
            data.sort((a,b)=>{
                   return (b.price - a.price)
            })
         }
         if(selected==='perkm_lth')
         {
            data.sort((a,b)=>{
                   return (a.perKmCharge - b.perKmCharge)
            })
         }
         if(selected==='perkm_htl')
         {
            data.sort((a,b)=>{
                   return (b.perKmCharge - a.perKmCharge)
            })
         }
         
         setData([...data])
    }

    const handleBook=()=>{
         alert("Car is Booked Successfully!");
         navigate("/")
    }

   

  return (
    <Box>
      
      {/* sorting and filtering part */}

      <Box display='flex' justifyContent="space-around" alignItems="center">
        <Box display='flex' alignItems="center">
           <Box>

            <Text fontSize='25px' textAlign='left' mr='10px' fontWeight='bold'>Filter By Car</Text>
           </Box>
           <Box>

            <Select defaultValue="popularity" variant="flushed" onChange={handleFilter}>
                <option value="all">All</option>
                <option value="hyundai">Hyundai</option>
                <option value="mahindra">Mahindra</option>
                <option value="toyota">Toyota </option>
               
            </Select>
           </Box>
        </Box>
        <Box display='flex'>
            <Box alignItems="center">
               <Text fontSize='25px' textAlign='left' mr='10px' fontWeight='bold'>Sort By</Text>
            </Box>
            <Box>

            <Select defaultValue="popularity" variant="flushed" onChange={handleChange}>
                <option value="popularity">Polularity</option>
                <option value="lth">Price: Low to High</option>
                <option value="htl">Price: High to Low</option>
                <option value="perkm_lth">Extra per Km charges: Low to High </option>
                <option value="perkm_htl">Extra per Km charges: High to Low</option>
            </Select>
            </Box>
        </Box>
      </Box>

    {/* car data */}
     <Box w="90%" m="auto" p="10px 0px" borderRadius={"10px"} display="flex" bgColor={"#f1f1f1"} 
     justifyContent={"space-around"} alignItems="center" mt="20px">
        <Box>City: {input.city}</Box>
        <Box>Start Date: {input.startDate}</Box>
        <Box>End Date: {input.endDate}</Box>
     </Box>

   

    <Box  display='grid' gridTemplateColumns='repeat(3,1fr)' gridTemplateRows='auto'  
    gap='1%' m="1% 5%">
    {data?.map((elem)=>(

        <Box key={elem.id} boxShadow="md" bgColor='#f1f1f1' border='1px solid #c6c7d6' _hover={{bgColor:'white'}} 
           borderRadius="5px">
           <Box gap="5px" display='flex' justifyContent='center' alignItems='center' mt="20px">
              <Text><b>{elem.car}</b></Text>
              <Text><b>{elem.model}</b></Text>
           </Box>
           <Box display='flex' justifyContent='space-around' alignItems='center'>
              <Image w="200px" h="150px" src={elem.image} />
           </Box>
           <Box display='flex' justifyContent='space-around' alignItems='center' mb="20px">
               <Box  gap='5px' display='flex' justifyContent='center' alignItems='center'>
                  <Box  >
                    <Image src="https://www.revv.co.in/imgs/car-card/automatic.svg" />
                  </Box>
                  <Box>
                    <Text>{elem.drive}</Text>
                  </Box>
               </Box>
               <Box gap='5px'  display='flex' justifyContent='center' alignItems='center'>
                  <Box >
                    <Image src="https://www.revv.co.in/imgs/car-card/petrol.svg" />
                  </Box>
                  <Box>
                     <Text>{elem.engine}</Text>
                  </Box>
               </Box>
               <Box gap='5px' display='flex' justifyContent='center' alignItems='center'>
                  <Box >
                    <Image src="https://www.revv.co.in/imgs/car-card/seat.svg" />
                  </Box>
                  <Box>
                     <Text>{elem.seat} seats</Text>
                  </Box>
               </Box>
           </Box>
           <Box display='flex' justifyContent='space-around' alignItems='center' w="100%" borderTop='1px solid #c6c7d6'  >
              <Box bgColor='white'  p="5px 0px">
                 <Text textAlign="center" color="#0ebaba"><b>₹ {elem.price}</b></Text>
                 <Text textAlign="center" color="#0ebaba"><b>352 kms</b></Text>
              </Box>
             
           </Box>
           <Box display='flex' justifyContent='space-around' alignItems='center' padding="15px 0px" bgColor="white">
              <Box>
                  <Text>Extra km charge @ ₹ {elem.perKmCharge}/km</Text>
              </Box>
              <Box >
                <Button onClick={handleBook} w='120px' bgColor='#0ebaba' color="white">
                    Book
                </Button>
              </Box>
           </Box>
        </Box>
    ))}
    </Box>

    </Box>
  )
}
