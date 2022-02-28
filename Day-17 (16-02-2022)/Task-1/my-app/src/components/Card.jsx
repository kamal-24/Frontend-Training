import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className="container">
    <div className='main'>
        <div className="left">
            <p style={{fontWeight:'bold'}}>{props.title}</p>
            <div className="mini-left">
                <p style={{fontWeight:'bolder'}}>{props.num1}</p>
                <p style={{fontWeight:'bold'}}>{props.num2}</p>
            </div>
        </div>
        <div className="right">
            <div className="box">{props.logo}</div>
        </div>
    </div>
    </div>
  )
}

export default Card