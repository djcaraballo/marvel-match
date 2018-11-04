import React from 'react'
import { NavLink } from 'react-router-dom'
import './ErrorPage.css'
import HomePage from '../HomePage/HomePage'

const ErrorPage = () => {
  return (
    <div className="error-wrapper">
      <NavLink to='/Home' className='nav'>
        <p className='home-link'>Back To Home</p>
      </NavLink>
      <div className='warning-container'>
        <h1>404: I AM GROOT!</h1>
        <p className='translation'>Translation: Not quite sure where you were headed, friend, but this path leads to Knowhere and you'll never survive the trip!</p>
      </div>
    </div>
  )
}

export default ErrorPage