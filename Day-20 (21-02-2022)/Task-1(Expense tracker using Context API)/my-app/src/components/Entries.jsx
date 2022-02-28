import React from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../expense-context'
import Entry from './Entry'

const Entries = () => {
    const {entries}=useContext(ExpenseContext)
  return (
    <div className="mt-3 mx-auto " style={{width:'90%'}}>
        <h4 className="display-6 text-center" >Entries</h4>
        <hr />
        <div className="list-group">
           {entries.map(el=>{
               return <Entry entry={el}></Entry>
           })}
        </div>
    </div>
  )
}

export default Entries