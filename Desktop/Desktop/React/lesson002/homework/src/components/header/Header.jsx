import React from 'react'
import './Header.scss'
import { NAV__LI } from '../../static'
import Hero from '../hero/Hero'

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <nav className="navbar">
          <p className="nav__logo">Escape.</p>
          <ul>
            {
              NAV__LI?.map((item,index)=>(
                <li key={index}>
                  <span>{item}</span>
                </li>
                
              ))
            }
          </ul>
        </nav>
      </div>
      <Hero/>
    </div>
  )
}

export default Header