import './App.css';
import React,{useState} from 'react';
import Tweets from './components/Twitter/Tweets'

function App() {
  /*const [newName, setnewName] = useState("")
  const [newEmail, setnewEmail] = useState("")
  const [contact, setcontact] = useState([
    {name:"Geoff johns",email:"geoff99@mail.com"},
    {name:"Mark rudd",email:"mark99@mail.com"},
    {name:"Ken adams",email:"adams99@mail.com"},

  ])

  const handleName=(event)=>{
    setnewName(event.target.value)
  }
  const handleEmail=(event)=>{
    setnewEmail(event.target.value)
  }
  const contactSubmit=(e)=>{
    e.preventDefault()
    setcontact([...contact,{name:newName,email:newEmail}]) 
  }
  console.log(contact)
  */
  return (
    /*<div className='main'>
    <div className="App">
      <form>
      <input type="text" className="form-control"  placeholder="Enter name" onChange={handleName}></input>
      <input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail}></input>
      <br />
       <button className="btn btn-primary mt-3" onClick={contactSubmit}>Submit</button>
      </form>
    </div>
   
    </div>*/
    <Tweets/>
  );
}

export default App;
