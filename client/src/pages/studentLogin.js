import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './loginpage.css'

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
    <div className="page">
      <div className='login-box'>
      <h2>Student Login</h2>
      <form onSubmit={LoginStudent}>
       <label>Email</label>
        <input value={email}
          onChange={(e) => setEmail(e.target.value)} type="email"></input><br/>
          <label>Password</label>
        <input value={password}
          onChange={(e) => setPassword(e.target.value)} type="password"></input><br/>
          <input type="submit" value="Login" />
          <br></br>
      </form>
    </div>
    </div>
  )
}

export default StudentLogin