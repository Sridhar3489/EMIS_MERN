import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './style.css'


const FacultyHomePage = () => {
  const {id}=useParams()
  
  return (
    <NavLink to={`addvideo/${id}`}>Add Video</NavLink>
    
  )
}

export default FacultyHomePage