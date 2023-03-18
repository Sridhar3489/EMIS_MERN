import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  const { id } = useParams();
  return (
    <>
      <br>
      </br>

      <label for="dis">
        &emsp; District &emsp;-
        <NavLink to={`/districtregister/${id}`} className="aaa">Add District Head</NavLink>
        <NavLink to={`/alldistrict/${id}`} className="aaa">All Dsitrict Heads</NavLink>
      </label>
      <br></br>
      <br></br>
      <label for="school">
        &emsp; School &emsp;-
        <NavLink to={`/schoolregister/${id}`} className="aaa">Add School Head</NavLink>
        <NavLink to={`/allschool/${id}`} className="aaa">All School Heads</NavLink>
      </label>
      <br></br>
      <br></br>
      <label for="faculty">
        &emsp; Faculty &emsp;-
        <NavLink to={`/facultyregister/${id}`} className="aaa">Add Faculty</NavLink>
        <NavLink to={`/allfaculty/${id}`} className="aaa">All Faculty</NavLink>
      </label>
      <br></br>
      <br></br>
      <label for="student">
        &emsp; Student&emsp;-
        <NavLink className="aaa" to={`/studentregister/${id}`}>Add Student</NavLink>
        <NavLink className="aaa" to={`/allStudent/${id}`}>All Student</NavLink>
      </label>
    </>
  )
}

export default Dashboard