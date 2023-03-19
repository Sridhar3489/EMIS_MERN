import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './style.css'


const FacultyHomePage = () => {
  const {id,type}=useParams()
  
  return (
    <NavLink to={`http://localhost:3000/addvideo/${type}/${id}`}>Add Video</NavLink>
    
  )
}

export default FacultyHomePage