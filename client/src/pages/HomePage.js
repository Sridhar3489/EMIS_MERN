import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const HomePage = () => {
  return (
    <>
    <h1>
        EMIS
    </h1>

    <h2>
      Login as
    </h2>
    
    <NavLink className="aaa" to="/login">Admin</NavLink>
    <br>
    </br>
    <br></br>
    <NavLink className="aaa" to="/districtlogin">District Head</NavLink>
    
    <NavLink className="aaa" to="/login">Login</NavLink>

    <NavLink className="aaa" to="/learninghomepage">Learning Platform</NavLink>
    
    </>
  )
}

export default HomePage