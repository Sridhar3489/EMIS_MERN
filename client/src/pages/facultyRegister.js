import React from 'react'
import { useState } from 'react'

const FacultyRegister = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [subject,setSubject]=useState('')
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
            subject
          }),
        })
        const data = await response.json()
        if(data.status==='ok'){
          alert("User registered, please Login to continue")
          window.location.href='/facultyloginforcourse'
        }
      }
  return (
    <div>hii there
        <h1>Register</h1>
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
            <input type="submit" value="Register" />
            </form>
    </div>
  )
}

export default FacultyRegister