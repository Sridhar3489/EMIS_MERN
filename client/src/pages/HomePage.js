import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const HomePage = () => {
  return (
    <>
    <h1>
        EMIS
    </h1>
    
    <NavLink className="aaa" to="/register">Register</NavLink>
    
    <NavLink className="aaa" to="/login">Login</NavLink>

    <NavLink className="aaa" to="/learninghomepage">Learning Platform</NavLink>
    
    </>
  )
}

export default HomePage