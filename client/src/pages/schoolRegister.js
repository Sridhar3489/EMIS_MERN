import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const SchoolRegister = () => {
    const {id}=useParams();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [distr,setDist]=useState('')
    async function registerDist(event){
        event.preventDefault();
        const response=await fetch('http://localhost:1337/api/schoolregister',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            name,
            email,
            password,
            distr
          }),
        })
        const data = await response.json()
        if(data.status==='ok'){
          alert("School Head registered succesfully")
          window.location.href=`/dashboard/${id}`
        }
        else{
            alert("Not registered !!! Check details once again")
        }
      }
  return (
    <div>hii there
        <h1>Register School Head </h1>
        <form onSubmit={registerDist}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Name"></input><br/>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
          <input value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>
           
            <input value={distr} placeholder='District' onChange={(e)=>setDist(e.target.value)} type="text"></input>
            <br></br>
           
            <input type="submit" value="Register" />
            </form>
    </div>
  )
}

export default SchoolRegister