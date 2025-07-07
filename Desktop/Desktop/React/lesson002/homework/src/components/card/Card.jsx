import React from 'react'
import './Card.scss'
import { CARDS } from '../../static/index'
const Card = () => {
  return (
    <div className='body__color'>
        <div className="container">
            <p className='card__text'>Featured Posts</p>
            <div className='chiziq'></div>
            <div className="wrapper__card">
               {
                CARDS?.map((item)=>(
                    <div className='card' key={item.id}>
                        <p>{item.text}</p>
                        <p>{item.comment}</p>
                        <p>{item.username}</p>
                        <p>{item.date}</p>
                    </div>
                ))
               }
            </div>
        </div>
    </div>
  )
}

export default Card