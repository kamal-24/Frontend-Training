import React from 'react'
import { useContext, useState } from 'react'
import { Bankcontext, BankProvider } from './bank-context'

const Banking = () => {
    const{statement,balance,dispatch}=useContext(Bankcontext);
    const [amount, setamount] = useState("")
  return (
      
        <div style={{margin:'50px auto',width:'50%'}}>
            <div className="card">
                <div className="card-body"><h3>{statement} {balance}</h3></div> 
            </div>
            <hr />
        <input className='input-group input-group-text mt-3' type="text" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="Enter amount" /><br />
        <button className='btn btn-primary mx-3 mt-3' onClick={()=>{dispatch({ type: "WITHDRAW", amount }); const resetInput=()=>{
            setamount(0)
        }; resetInput(); }} >Withdraw</button>
        <button className='btn btn-primary mx-3 mt-3' onClick={()=>{dispatch({ type: "DEPOSIT", amount }); const resetInput=()=>{
            setamount(0)
        }; resetInput(); }} >Deposit</button><br />
        <button className='btn btn-primary mx-3 mt-3' onClick={()=>{dispatch({ type: "FD", amount }); const resetInput=()=>{
            setamount(0)
        }; resetInput(); }}>Fixed Deposit</button><br />
        <button className='btn btn-danger mx-3 mt-3' onClick={()=>{dispatch({ type: "DELETE" }) }} >Delete Account</button>
        </div>
    
  )
}

export default Banking