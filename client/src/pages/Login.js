import React from 'react'
import { useState } from 'react'

const Login = () => {
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function LoginUser(event){
    event.preventDefault();
    const response=await fetch('http://localhost:1337/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        
        email,
        password,
      }),
    })
    const data = await response.json()
    if(data.user){
      alert('Login Successful')
      window.location.href='/dashboard'
    }
    else{
      alert('Please check login credentials')
    }
  }
  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={LoginUser}>
       
        <input value={email}
          onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
        <input value={password}
          onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>
          <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Login