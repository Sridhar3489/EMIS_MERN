import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  const { id,type } = useParams();
  return (
    <div className='page'>
      <br>
      </br>

      <label for="dis">
        &emsp; District &emsp;-
        <NavLink to={`/districtregister/${type}/${id}`} className="aaa">Add District Head</NavLink>
        <NavLink to={`/alldistrict/${type}/${id}`} className="aaa">All Dsitrict Heads</NavLink>
      </label>
      <br></br>
      <br></br>
      <label for="school">
        &emsp; School &emsp;-
        <NavLink to={`/schoolregister/${type}/${id}`} className="aaa">Add School Head</NavLink>
        <NavLink to={`/allschool/${type}/${id}`} className="aaa">All School Heads</NavLink>
      </label>
      <br></br>
      <br></br>
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

export default Dashboard