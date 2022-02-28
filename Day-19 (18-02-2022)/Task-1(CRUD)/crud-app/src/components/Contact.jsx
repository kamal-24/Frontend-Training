import React from 'react'

const Contact = (props) => {
  return (
    <>
    <div className="list-group">
        {props.contacts.map(item=>{
            return(
                <div className='taskList'>
                    <li className="list-group-item mt-1">
                        {item.Name} <br/>
                        {item.Email} <br/>
                    <button className='btn btn-danger mt-1 mx-1' onClick={()=>props.deleteContact(item.Name)}>Delete </button>
                    <button className='btn btn-info mt-1 mx-1' onClick={()=>props.editContact(item.Name)}>Edit </button>
                    </li>

                </div>
            )
        })}
    </div>
    </>
  )
}

export default Contact