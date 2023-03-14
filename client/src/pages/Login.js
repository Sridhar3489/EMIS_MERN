import React from 'react'
import { useState } from 'react'

const Login = () => {
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role,setRole]=useState('')
  
 /* async function LoginUser(event){
    event.preventDefault();
    const response=await fetch('http://localhost:1337/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        
        email,
        password,
        role,
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
  }*/
  
  const LoginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1337/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({ email, password, role })
    });
    const json = await response.json();
    console.log(json);
     if  (json.success || role === "admin") {
        //save the auth token and redirect
        alert('Login Successful')
      window.location.href='/dashboard'
    }
     else if  (json.success || role === "employee") {
         //save the auth token and redirect
         alert('Login Successful')
      window.location.href='/'
    }
     else if  (json.success || role === "publisher") {
         //save the auth token and redirect
         alert('Login Successful')
      window.location.href='/student'
    }
    else{
        alert("Invalid")
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
          <input value={role}
          onChange={(e) => setRole(e.target.value)} type="text" placeholder="Role"></input><br/>
          <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login