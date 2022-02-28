import { useEffect, useState } from "react";
import React from 'react'
import { Delete } from "./Delete";
const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((result)=>result.json())
    .then((info)=>setdata(info))
  }, []);
  console.log(data)

    return (
      <div className='App'>
        { data.map((el)=>{
          return(
    //<Delete/>
            <>
            <h2>{el.name}</h2>
            <h3>{el.email}</h3>
            </>
          )
        })}
      </div>
      )
}

export default App