import React from 'react'
import img from '../assets/images/logo.svg';
import arrow from '../assets/images/icon-arrow.svg';

import './Left.css'

const Left = () => {
  return (
    <div className='main'>
        <div className='image'><img src={img} /></div>
        <p>We're</p>
        <p><strong>Coming</strong></p>
        <p><strong>Soon</strong></p>
        <p className='caption'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolore repellendus adipisci laborum. Perferendis voluptate nulla, explicabo hic eveniet maiores.
        </p>
        <span><input type="text" placeholder='email address'/><button><img src={arrow} alt="" /></button></span> 
    </div>
  )
}

export default Left