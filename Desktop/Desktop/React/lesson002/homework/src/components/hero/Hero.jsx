import React from 'react'
import './Hero.scss'


const Hero = () => {
  return (
    <div className='container'>
      <div className="hero">
        <p>Let's do it together.</p>
        <p className='hero__text'>We travel the world in search of   stories. Come along for the ride.</p>
        <button className='hero__btn'>View Latest Posts</button>
      </div>
    </div>
  )
}

export default Hero