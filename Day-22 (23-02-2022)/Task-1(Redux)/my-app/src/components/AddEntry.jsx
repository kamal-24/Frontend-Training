import {React,useState} from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from '../actions/Actions'

const AddEntry = () => {
  const dispatch=useDispatch()
  const [item, setitem] = useState("")
  const [cal, setcal] = useState(0)

  const handleADD=(e)=>
  {
    e.preventDefault(); //console.log("hi")
    dispatch(addEntry({item,cal})); 
    setcal(0); 
    setitem("")
    console.log(item,cal)
  }
  return (
     <div>
  <form>
    <div className="form-group">
     <label >Food item</label>
      <input type="text" className="form-control" placeholder="Enter food item" value={item} onChange={(e)=>setitem(e.target.value)}></input>
    </div>
   <div className="form-group">
      <label >Calories</label>
      <input type="text" className="form-control"  placeholder="Calores" value={cal} onChange={(e)=>setcal(e.target.value)}></input>
     </div>
    <button className="btn btn-info" onClick={handleADD}>Add entry</button>
  </form>
    </div>
  )
}

export default AddEntry