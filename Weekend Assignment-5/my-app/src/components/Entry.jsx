import React from 'react'
import { useDispatch } from 'react-redux'
import { delEntry } from '../actions/Actions'


const Entry = (props) => {
    const dispatch=useDispatch()
    const delAlert=()=>{
        alert("Deleted an entry");
    }
    const delClick=()=>{
        dispatch(delEntry(props.entry.id));
        setTimeout(delAlert,500)
    }
  return (
    <>
    <div className="list-group list-group-item list-group-item-info d-flex flex-row justify-content-between mt-3 ">
    <div style={{width:'140px'}}>{props.entry.item}</div>
    <div style={{width:'160px'}}>{parseInt(props.entry.cal)} kcal</div>
    <button className='btn btn-danger btn-close' onClick={delClick} ></button>
    </div>
    </>
  )
}

export default Entry