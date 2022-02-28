import React from 'react'
import { useSelector } from 'react-redux'
import Entry from './Entry'

const Entries = () => {
  const entries = useSelector((state) => state.calorie);
  console.log(entries);
  return (
      <div><h1 className='display-5 text-center'>Entries</h1><hr />
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
    </div>
  )
}

export default Entries