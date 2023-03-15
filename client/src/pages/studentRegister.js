import React from 'react'
import { useState } from 'react'

const StudentRegister = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [study,setStudy]=useState('')
    const [school,setSchool]=useState('')
    const [aggr,setAggr]=useState('')
    async function registerUser(event){
        event.preventDefault();
        const response=await fetch('http://localhost:1337/api/studentregister',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            name,
            email,
            password,
            study,
            school,
            aggr
          }),
        })
        const data = await response.json()
        if(data.status==='ok'){
          alert("User registered, please Login to continue")
          window.location.href='/studentlogin'
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
            <input value={study} placeholder='Class of Study' onChange={(e)=>setStudy(e.target.value)} type="text"></input>
            <br></br>
            <input value={school} placeholder='School' onChange={(e)=>setSchool(e.target.value)} type="text"></input>
            <br></br>
            <input value={aggr} placeholder='Aggregate' onChange={(e)=>setAggr(e.target.value)} type="number"></input>
            Don't include any symbols in aggregate, if your aggregate is 93%, type 93
            <br></br>
            <input type="submit" value="Register" />
            </form>
    </div>
  )
}

export default StudentRegister