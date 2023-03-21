import React from 'react'
import { NavLink } from 'react-router-dom'

const Logout = () => {
  return (
    <div className='logout'>
        <NavLink to='/dashboard'>Logout</NavLink>
    </div>
  )
}

export default Logout