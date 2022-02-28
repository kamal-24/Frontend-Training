import React from 'react'
import { useContext } from 'react';
import { ExpenseContext } from '../expense-context';

const Summary = () => {
    
    const {entries}=useContext(ExpenseContext)
    let income=0;
    let expense=0;
    entries.forEach((entry)=>{
        if(entry.amount>0){
            income+=entry.amount
        }
        else{
            expense+=entry.amount
        }
    })
  return (
    <div>
        <div className="row mt-3">
            <div className="col-sm-5 mx-auto">
                <div className="card border-success" style={{border:'inset'}}>
                    <div className="card-body text-center">
                        <h5 className="card-title">Income</h5>
                        <h4>${income}</h4>
                    </div>
                </div>
            </div>
            <div className="col-sm-5 mx-auto">
                <div className="card border-danger" style={{border:'inset'}}>
                    <div className="card-body text-center">
                        <h5 className="card-title">Expense</h5>
                        <h4>${expense}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary