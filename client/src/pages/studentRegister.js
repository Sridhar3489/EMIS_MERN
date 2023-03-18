import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const StudentRegister = () => {
  const {id}=useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [study,setStudy]=useState('')
    const [school,setSchool]=useState('')
    const [aggr,setAggr]=useState('')
    const [gender,setGender]=useState('')
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
            aggr,
            gender
          }),
        })
        const data = await response.json()
        if(data.status==='ok'){
          alert("Student registered succesfully")
          window.location.href=`/dashboard/${id}`
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
            <input value={study} placeholder='Class of Study' onChange={(e)=>setStudy(e.target.value)} type="Number"></input>
            <br></br>
            <input value={school} placeholder='School' onChange={(e)=>setSchool(e.target.value)} type="text"></input>
            <br></br>
            <input value={aggr} placeholder='Aggregate' onChange={(e)=>setAggr(e.target.value)} type="number"></input>
            Don't include any symbols in aggregate, if your aggregate is 93%, type 93
            <br></br>
            <input value={gender} placeholder='Gender' onChange={(e)=>setGender(e.target.value)} type="text"></input>
            <br>
            </br>
            <br></br>
            <input type="submit" value="Register" />
            </form>
    </div>
  )
}

export default StudentRegister