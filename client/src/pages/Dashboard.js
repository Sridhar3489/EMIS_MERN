import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard= () => {
  return (
    <>
    <NavLink className="aaa" to="/studentregister">Add Student</NavLink>
    <NavLink className="aaa" to="/allStudent">All Student</NavLink>
    </>
  )
}

export default Dashboard