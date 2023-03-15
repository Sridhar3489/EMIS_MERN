import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard= () => {
  return (
    <>
    <NavLink className="aaa" to="/addStudent">Add Student</NavLink>
    <NavLink className="aaa" to="/allStudents">All Students</NavLink>
    </>
  )
}

export default Dashboard