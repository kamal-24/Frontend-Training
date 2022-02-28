import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteAll } from '../actions/Actions';
import './Entries.css'
import Entry from './Entry'
const Entries = () => {
    const dispatch=useDispatch();
    const entries=useSelector((state)=>state.calorie);
  
    const sum=(items,props)=>{
      return items.reduce((a,b)=>{
        return parseInt((a)+parseInt(b[props]));
      },0);
    }
    const totalCal=sum(entries,'cal')
    console.log(totalCal);
    console.log(entries);
    const delAllAlert=()=>{
        alert("Deleted every entry successfully");
    }
    const delAll=()=>{
        dispatch(deleteAll());
        setTimeout(delAllAlert,500)
    }
  return (
    <div className='mt-4'><h1 className='display-6 text-center'>Entries</h1><hr />
          <div className='d-flex justify-content-between'>
              <div className='mx-4'>
                 Item
              </div>
              <div className='mx-5'>
                 Calorie
              </div>
              <div className=''>
                Delete item
          </div>
        </div>
        <hr />
    {entries.map((item)=>{
        return <Entry entry={item}/>
    })}
    <div className="progress mt-3 text-center">
            <div className="progress-bar progress-bar-success " role="progressbar" aria-valuenow={totalCal} aria-valuemin="0" aria-valuemax={1000} style={{width: "50%"}}>
            </div>
            <span className="progress-type">Total calories</span>
            <span className="progress-completed text-left">{totalCal} kcal</span>
        </div>
    <div className='text-center mt-3'><button className='btn btn-warning' onClick={delAll}>Delete All</button></div>
    
    </div>
  )
}

export default Entries