import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './styling/dashboardcss.css'

const SchoolDashboard = () => {
    const { type,id } = useParams();
  return (
    
    <div className='page'>
        <br></br>
        <h2>SCHOOL Dashboard</h2>
        <label for="faculty">
        &emsp; Faculty &emsp;-
        <NavLink to={`/facultyregister/${type}/${id}`} className="aaa">Add Faculty</NavLink>
        <NavLink to={`/allfaculty/${type}/${id}`} className="aaa">All Faculty</NavLink>
      </label>
      <br></br>
      <br></br>
      <label for="student">
        &emsp; Student&emsp;-
        <NavLink className="aaa" to={`/studentregister/${type}/${id}`}>Add Student</NavLink>
        <NavLink className="aaa" to={`/allStudent/${type}/${id}`}>All Student</NavLink>
      </label>
    </div>
  )
}

export default SchoolDashboard