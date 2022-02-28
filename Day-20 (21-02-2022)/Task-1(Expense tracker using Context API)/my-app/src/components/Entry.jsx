import React from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../expense-context'

const Entry = (props) => {
    const {delEntry}=useContext(ExpenseContext)
  return (
    <div>
        <li className="list-group-item list-group-item-action">
            {props.entry.description} <button className="btn-close float-end" onClick={()=>delEntry(props.entry.id)}></button>
            <span className="float-end">{props.entry.amount}$</span>
        </li>
    </div>
  )
} 

export default Entry