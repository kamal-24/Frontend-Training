import React from 'react'

const Post = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState(0)
    const data={name,email,mobile}
    

    const handleClick=()=>{
      console.log(data);
      fetch('https://jsonplaceholder.typicode.com/posts',{
          method:"POST",
          body:JSON.stringify(data)
    }).then((res)=>console.log(res))
    }
    
    
      return (
        <>
        <input type="text" name="" id="" placeholder='name' value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="text" name="" id="" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" name="" id="" placeholder='mobile' value={mobile} onChange={(e)=>setmobile(e.target.value)}/>
       <button onClick={handleClick} style={{margin:"50px auto"}}>click</button>
        </>
        )
}

export default Post