import { useState, useEffect } from "react";

export const Delete=()=>{
    const [data, setdata] = useState([])
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((result)=>result.json())
      .then((info)=>setdata(info))
},[]);

const deleteItem=(id)=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:"DELETE"
    })
};

return(
    <div>
        { data.map((El)=>{
            return(
                <>
                <div>
                <h2>{El.name}</h2>
                <button onClick={()=>deleteItem(El.id)}>Delete</button>
                </div>
                </>
            )
        })}
    </div>
)

}