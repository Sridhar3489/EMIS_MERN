import React from 'react'
import { NavLink } from 'react-router-dom'

const CoursePage = () => {
  return (
    <div>
        Login as
        <NavLink className="aaa" to="/studentlogin">Student</NavLink>
        <NavLink className="aaa" to="/facultyloginforcourse">Faculty</NavLink>
    </div>
  )
}

export default CoursePage