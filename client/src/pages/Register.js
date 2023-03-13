import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    async function registerUser(event){
      event.preventDefault();
      const response=await fetch('http://localhost:1337/api/register',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          name,
          email,
          password,
        }),
      })
      const data = await response.json()
    }
  
    return (
      <div className="App">
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
            <input type="submit" value="Register" />
        </form>
      </div>
    );
  
}

export default Register