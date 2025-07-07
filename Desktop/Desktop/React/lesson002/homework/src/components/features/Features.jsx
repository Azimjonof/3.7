import React from 'react'
import "./Features.scss"
import { FEATURES__LI } from '../../static/index'

const Features = () => {
  return (
    <div className='container'>
      <div className="features">
        <ul>
          {
            FEATURES__LI?.map((item,index)=>(
               <li key={index}>
                 <span>{item}</span>
               </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Features