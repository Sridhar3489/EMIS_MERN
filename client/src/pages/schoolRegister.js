import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const SchoolRegister = () => {
    const {id}=useParams();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alldist,setAllDist]=useState([]);
    const [distr,setDistr]=useState('');
    const [distid,setDistId]=useState('')
    async function getDists(){
      try {
        let response = await axios.get('http://localhost:1337/api/alldistricts');
        
        setAllDist(response.data)
      }
      catch (error) {
        console.log("Error while fetching all districts", error)
      }
    }
    getDists();
    async function getDist(id){
      let response;
      try {
         response = await axios.get(`http://localhost:1337/api/district/${id}`);
        return response.data[0].dist;
      
      }
      catch (error) {
        console.log("Error while fetching district", error)
      }
     
    }
    async function registerScl(event){
        event.preventDefault();
         getDist(distid).then(val=>setDistr(val));
        const response=await fetch('http://localhost:1337/api/schoolregister',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            name,
            email,
            password,
            distr,
            distid
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
        <form onSubmit={registerScl}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Name"></input><br/>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
          <input value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>
           
           <select value={distid} onChange={(e)=>{setDistId(e.target.value)}}>
        {alldist.map((d) => (
          <option value={d._id} key={d._id}>{d.dist}</option>
        ))}
      </select>
            <br></br>
           
            <input type="submit" value="Register" />
            </form>
    </div>
  )
}

export default SchoolRegister