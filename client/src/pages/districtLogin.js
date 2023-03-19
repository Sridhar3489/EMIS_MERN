import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const DistrictLogin = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const type="distr";
    const LoginDistrict = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:1337/api/distlogin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
    
            },
            body: JSON.stringify({ email, password})
        });
        const data = await response.json();
        console.log(response['facultyobj']);
        console.log(data.facultyobj)
         if  (data.user!='') {
            //save the auth token and redirect
            alert('Login Successful')
          window.location.href=`/districtdashboard/${type}/${data.user[0]._id}`
        }
        else{
            alert('Login Fail')
        }
    }
  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={LoginDistrict}>
       
        <input value={email}
          onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
        <input value={password}
          onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>
          <input type="submit" value="Login" />
          <br></br>
      </form>
    </div>
  )
}


export default DistrictLogin