import './App.css';
import React,{useState} from 'react';
function App() {
  const [info, setinfo] = useState("")
  const [infoTwo, setinfoTwo] = useState("");
  const [infoThree, setinfoThree] = useState("");
  const [infoFour, setinfoFour] = useState("");

  const handleClick=(e)=>{
    e.preventDefault();
    console.log(info,infoTwo,infoThree,infoFour)
  }
  return (
    <div className="App">
     <form>
       <input type="text" placeholder="Enter first name" onChange={(e)=>{setinfo(e.target.value)}} value={info}></input>
       <input type="text" placeholder="Enter last name" onChange={(e)=>{ setinfoTwo(e.target.value) }} value={infoTwo}></input>
       <input type="text" placeholder="Enter age" onChange={(e)=>{setinfoThree(e.target.value)}} value={infoThree}></input>
       <input type="email" placeholder="Enter email" onChange={(e)=>{setinfoFour(e.target.value)}} value={infoFour}></input><br></br>
       <button onClick={handleClick}>Submit</button>
     </form>
    </div>
  );
}

export default App;
/*
const [infoTwo, setinfoTwo] = useState("");
  const [infoThree, setinfoThree] = useState("");
  const [infoFour, setinfoFour] = useState("");

  const handleChange=(e)=>{
    setinfo(e.target.value)
  }

  const handleChange2=(e)=>{
    setinfoTwo(e.target.value)
  }

  const handleChange3=(e)=>{
    setinfoThree(e.target.value)
  }

  const handleChange4=(e)=>{
    setinfoFour(e.target.value)
  }

*/