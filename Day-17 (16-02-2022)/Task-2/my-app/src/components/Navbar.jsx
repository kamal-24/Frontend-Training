import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Navbar.css'

const Navbar = () => {

    //single object setState
    const [count,setCount]=useState(0)
    const increaseCount=()=>{
        setCount(count+1)
    }
    const decreaseCount=()=>{
        setCount(count-1)
    }

    //individual object setState
    const[num,setNum]=useState({
        num1:0,
        num2:1
    });
    const incOne=()=>{
        setNum({...num,num1:num.num1+1})
        console.log(num)
    } 
    const incTwo=()=>{
        setNum({...num,num2:num.num2+1})
        console.log(num)

    }
  return (
    <>
    <h2>Counter 1</h2>
    <h2>{count}</h2>
    <Button className='btn' variant='contained' onClick={increaseCount}>Increase</Button>
    <Button className='btn' variant='contained' onClick={decreaseCount}>Decrease</Button>
    <br />
    <br />
    <h2>Counter 2</h2>
    <h2>{num.num1}</h2>
    <Button variant='contained' onClick={incOne}>Num1 ++</Button>
    <h2>{num.num2}</h2>
    <Button variant='contained' onClick={incTwo}>Num2 ++</Button>

    </>
    
  )
}

export default Navbar