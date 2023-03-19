import React from 'react'
import { NavLink } from 'react-router-dom'

const CoursePage = () => {
  return (
    <div className='page'>
        Login as
        <NavLink className="aaa" to="/studentlogin">Student</NavLink>
        <NavLink className="aaa" to="/facultyloginforcourse">Faculty</NavLink>
    </div>
  )
}

export default CoursePage