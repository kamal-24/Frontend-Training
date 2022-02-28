import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const Even=()=>{

  return (
    <App/>  
    //returns App component
  )

  /* 
  //Odd or even task

  let a=10;
  if (a%2==0){
    return <p>The number {a} is even</p> 
  }
  else {
    return <p>The number {a}is not even</p>
  }
  */

  //Array task

  /*
  const arr=[1,2,3,4,5];
   return arr.map((i)=><h1>{i}</h1>)
   */
  
}
ReactDOM.render(<Even/>,document.getElementById('root'))