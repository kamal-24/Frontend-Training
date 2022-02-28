import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Navbar.css'

const Counter = () => {

    const[count,setCount]=useState({
        count1:0,
        count2:4
    })
    const handleClick=(countValue)=>{
        if(countValue===1){
            setCount({...count,count1:count.count1+1})
        }
        else if(countValue===2){
            setCount({...count,count2:count.count1+2})
        }
        console.log(count)
    }


  return (
    <>
    <h2>Counter 3</h2>
    <h2>{count}</h2>
    <Button className='btn' variant='contained' onClick={()=>handleClick(1)}>+1</Button>
    <Button className='btn' variant='contained' onClick={()=>handleClick(2)}>Decrease</Button>
    </>
  )
}

export default Counter