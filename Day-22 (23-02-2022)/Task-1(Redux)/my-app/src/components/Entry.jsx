import React from 'react'
import { useDispatch } from 'react-redux'
import { delEntry } from '../actions/Actions';

const Entry = (props) => {
  const dispatch=useDispatch();
  const handleDel=()=>{
    dispatch(delEntry(props.entry.id))
  }

  return (
  <>
    <div className="list-group-item list-group-item-action d-flex justify-content-between mt-2">
      
      <div >{props.entry.item}</div>
      <div >{props.entry.cal} kcal</div>
      <button className="btn-danger" onClick={handleDel}> X </button>
    </div>
    </>
  )
}

export default Entry