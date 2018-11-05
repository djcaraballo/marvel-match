import React from 'react'
import { NavLink } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <h1 className="marvel">MARVEL</h1>
        <h2 className="match">MATCH</h2>
      </div>
      <img className="gif" src="../../assets/Images/comic-flip.gif" alt=""/>
      <div className="links-container">
        <NavLink 
          to='/login'
          className='landing-nav'>
          <h3>login</h3>
        </NavLink>
        <p><span className="line-span"></span>OR<span className="line-span"></span></p>
        <NavLink 
          to='/signup'
          className='landing-nav'>
          <h3>signup</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default LandingPage