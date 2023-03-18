import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const FacultyRegister = () => {
  const { id }=useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [subject,setSubject]=useState('')
    const [school,setSchool]=useState('')
    async function registerUser(event){
        event.preventDefault();
        const response=await fetch('http://localhost:1337/api/facultyregister',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            name,
            email,
            password,
            subject,
            school
          }),
        })
        const data = await response.json()
        if(data.status==='ok'){
          alert("Faculty Registered Succesfully")
          window.location.href='/dashboard/:id'
        }
        else{
          alert("Not registered !!! Kindly check details once again")
        }
      }
  return (
    <div>hii there
        <h1>Faculty Register</h1>
        <form onSubmit={registerUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Name"></input><br/>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
          <input value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>
            
            <input value={subject} placeholder='Subject' onChange={(e)=>setSubject(e.target.value)} type="text"></input>
            <br></br>
            <input value={school} placeholder='School' onChange={(e)=>setSchool(e.target.value)} type="text"></input>
            <br></br>
            <input type="submit" value="Register" />
            </form>
    </div>
  )
}

export default FacultyRegister