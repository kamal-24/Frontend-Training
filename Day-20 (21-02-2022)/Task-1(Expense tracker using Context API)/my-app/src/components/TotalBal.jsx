import React from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../expense-context'

const TotalBal = () => {
    const {entries}=useContext(ExpenseContext);
    const totalBal=entries.reduce((previousVal,currentVal)=>previousVal + currentVal.amount,0)
  return (
    <div>
        <h1 className='display-6 text-center mt-3 mb-3'> Total Balance ${totalBal}</h1>
    </div>
  )
}

export default TotalBal