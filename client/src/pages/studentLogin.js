import React from 'react'
import { useState } from 'react'

const StudentLogin = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const LoginStudent = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:1337/api/studentlogin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
    
            },
            body: JSON.stringify({ email, password})
        });
        const data = await response.json();
        console.log(data);
         if  (data.user) {
            //save the auth token and redirect
            alert('Login Successful')
          window.location.href='/courseHomePage'
        }
        else{
            alert('Login Fail')
        }
    }
  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={LoginStudent}>
       
        <input value={email}
          onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
        <input value={password}
          onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>
          <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default StudentLogin