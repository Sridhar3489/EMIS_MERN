import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const FacultyRegister = () => {
  const { id, type } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [subject, setSubject] = useState('')
  const [school, setSchool] = useState('')
  const [alldist,setAllDist]=useState([]);
  const [allschl,setAllSchl]=useState([]);
  const [dist,setDist]=useState('')
  const [distid,setDistId]=useState('')
  const [schoolid,setSchoolID]=useState('')
  useEffect(() => {
    async function getDists() {
      try {

        let response = await axios.get(`http://localhost:1337/api/alldistricts/${type}/${id}`);

        setAllDist(response.data)
      }
      catch (error) {
        console.log("Error while fetching all districts", error)
      }
    }
    getDists();
  }, []);

  async function getDist(id) {
    let response;
    try {
      response = await axios.get(`http://localhost:1337/api/district/${type}/${id}`);
      return response.data[0].dist;

    }
    catch (error) {
      console.log("Error while fetching district", error)
    }

  }
  async function getSchools(id){
    try {
      const x="distr";
      let response = await axios.get(`http://localhost:1337/api/allschools/${x}/${id}`);
      
      setAllSchl(response.data)
    }
    catch (error) {
      console.log("Error while fetching all schools", error)
    }
  }

  async function getSchl(id) {
    let response;
    try {
      response = await axios.get(`http://localhost:1337/api/school/${type}/${id}`);
      return response.data[0].name;

    }
    catch (error) {
      console.log("Error while fetching school", error)
    }

  }
  
  async function registerUser(event) {
    
    event.preventDefault();
    getSchl(schoolid).then(val=>setSchool(val))
    getDist(distid).then(val=>setDist(val))
    const response = await fetch(`http://localhost:1337/api/facultyregister/${type}/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        subject,
        school,
        schoolid,
        dist,
        distid
      }),
    })
    const data = await response.json()
    if (data.status === 'ok') {
      alert("Faculty Registered Succesfully")
      window.location.href = `/dashboard/${type}/${id}`
    }
    else {
      alert("Not registered !!! Kindly check details once again")
    }
  }
  return (
    <div>hii there
      <h1>Faculty Register</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" placeholder="Name"></input><br />
        <input value={email}
          onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br />
        <input value={password}
          onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br />

        <input value={subject} placeholder='Subject' onChange={(e) => setSubject(e.target.value)} type="text"></input>
        <br></br>
        <select value={distid} onChange={(e) => { setDistId(e.target.value);getSchools(distid);console.log(allschl)}}>
          {alldist.map((d) => (
            <option value={d._id} key={d._id}>{d.dist}</option>
          ))}
        </select>
        <br></br>
        
        {distid &&
        <select value={schoolid} onChange={(e) => { setSchoolID(e.target.value) }}>
          {allschl.map((d) => (
            <option value={d._id} key={d._id}>{d.name}</option>
          ))}
        </select>}
        <br></br>
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default FacultyRegister