import { Box, Button, Heading, Image, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useSyncExternalStore } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Cars() {
    const [data, setData]=useState([]);
    const [value, setValue]=useState('')
 
    const getdata=()=>{
        axios.get("https://revv-server.herokuapp.com/data")
        .then((res)=>{
             setData(res.data)
            //  console.log(res.data);
        })
    }

    useEffect(()=>{
          getdata();
    },[]);



    const handleChange=(e)=>{
      // setData([]);
        const selected=e.target.value;
       
       let view;
       let q;
        
        if(selected==='lth')
        {
        
         view="price";
         q='ASC'
        }
        else if(selected==='htl')
        {
        
        view="price";
        q='DESC'
        }
        else if(selected==='perkm_lth')
        {
         
         view="perKmCharge";
        q='ASC'
       
        }
        else if(selected==='perkm_htl')
        {
        
        view="perKmCharge";
        q='DESC'
        }
        else
        {
         getdata();
        }

        console.log(view, q)
     sorting(view,q)
       
    }

// https://revv-dbjson3.herokuapp.com
    const sorting=(view,q)=>{
        axios.get(`https://revv-server.herokuapp.com/data?_sort=${view}&_order=${q}`)
        .then((res)=>{
             setData( res.data)
            //  console.log(res.data);
        })
    }


  return (
    <Box>
      
      {/* sortingpart */}

      <Box display='flex' justifyContent='space-around' alignItems="center">
        <Box>
            <Heading>Filters</Heading>
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

    {/* car data */}
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
              <Box bgColor='white' w='33.33%'  p="5px 0px">
                 <Text textAlign="center" color="#0ebaba"><b>₹ {elem.price}</b></Text>
                 <Text textAlign="center" color="#0ebaba"><b>352 kms</b></Text>
              </Box>
              <Box  w='33.33%'  p="5px 0px" bgColor='#f1f1f1'>
                 <Text textAlign="center"> <b>₹ </b></Text>
                 <Text textAlign="center"> <b>352 kms</b></Text>
              </Box>
              <Box  w='33.33%' p="5px 0px" bgColor='#f1f1f1'>
                 <Text textAlign="center"> <b>₹ </b></Text>
                 <Text textAlign="center"><b>352 kms</b></Text>
              </Box>
           </Box>
           <Box display='flex' justifyContent='space-around' alignItems='center' padding="15px 0px" bgColor="white">
              <Box>
                  <Text>Extra km charge @ ₹ {elem.perKmCharge}/km</Text>
              </Box>
              <Box >
                <Button w='120px' bgColor='#0ebaba' color="white">
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
