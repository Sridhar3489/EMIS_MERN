import React from 'react'
import { NavLink } from 'react-router-dom'



const FacultyHomePage = () => {
  return (
    <div>Your Teachings
      <NavLink to="/addCourse">Add course</NavLink>
    </div>
  )
}

export default FacultyHomePage