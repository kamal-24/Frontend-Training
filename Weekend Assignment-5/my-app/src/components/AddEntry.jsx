import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from '../actions/Actions'


const AddEntry = () => {
    const [item, setitem] = useState("")
    const [cal, setcal] = useState(0)
    const dispatch=useDispatch()

    const handleItem=(e)=>{
        setitem(e.target.value)
    }
    const handleCal=(e)=>{
        setcal(e.target.value)
    }
    const addAlert=()=>{
        alert("Added entry successfully !")
    }
    const addClick=(e)=>{
        e.preventDefault();
        dispatch(addEntry({item,cal}));
        setitem("");
        setcal(0);
        setTimeout(addAlert,500)
    }
   


  return (
    <div className='mt-3 mb-3 mx-auto' style={{width:'60%'}}>
    <form>
    <div className="form-group mt-2">
      <label >Food Item</label>
      <input type="text" className="form-control" placeholder="Enter food item" onChange={handleItem} value={item}></input>
    </div>
    <div className="form-group mt-2">
      <label className='mt-2'>Calorie</label>
      <input type="text" className="form-control" placeholder="Enter calorie" onChange={handleCal} value={cal}></input>
    </div>
    <div className='text-center'><button onClick={addClick} className="btn btn-light mt-3 " style={{color:'black'}}>Add Entry</button></div>
    
  </form>
  </div>
  )
}

export default AddEntry