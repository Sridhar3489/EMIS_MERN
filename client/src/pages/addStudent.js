import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const AddStudent = () => {

  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [school, setSchool]=useState('')
    const [clas, setClas]=useState('')
    
    async function addStud(event){
      event.preventDefault();
      const response=await fetch('http://localhost:1337/api/addstudent',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          name,
          email,
          password,
          school,
          clas
        }),
      })
      const data = await response.json()
      if(data.status==='ok'){
        alert("User registered")
        window.location.href='/dashboard'
      }
    }
  return (
    
    <div className="App">
        <h1>Add Student</h1>
        <form onSubmit={addStud}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Name"></input><br/>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
          <input value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>
            <input
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            type="text" placeholder="School"></input><br/>
            <input
            value={clas}
            onChange={(e) => setClas(e.target.value)}
            type="text" placeholder="Class"></input><br/>
            <input type="submit" value="Register" />
        </form>
      </div>
  )
}

export default AddStudent