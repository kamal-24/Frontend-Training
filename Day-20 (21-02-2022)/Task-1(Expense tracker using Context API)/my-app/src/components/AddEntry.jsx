import {React} from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../expense-context'

const AddEntry = () => {
    const {addentries,handleChangeone,handleChangetwo,addEntry}=useContext(ExpenseContext)
    
  return (
    <div className="border border-info rounded p-4 mt-5 mx-auto" style={{width:'90%'}}>
        <div className="form form-group">
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" value={addentries.description} onChange={(e)=>handleChangeone(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input type="text" className="form-control" id="amount" value={addentries.amount} onChange={(e)=>handleChangetwo(e.target.value)}/>
            </div>
            <button className="btn-primary mt-3" onClick={addEntry}>Add entry</button>

        </div>
    </div>
  )
}

export default AddEntry