import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';


const EditSchool = () => {
    const {id,type}=useParams();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [distr,setDist]=useState('')
    const navigat=useNavigate();
    const url='http://localhost:1337/api';
    useEffect(()=>{
    async function get(){
      try{
        let response=await axios.get(`${url}/school/${type}/${id}`);
        setName(response.data[0].name);
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);
        setDist(response.data[0].distr);
      }
      catch(error){
        console.log("error while getting student details in edit",error);
      }
    }
    get();
    },[]);
    async function editSchl(){
      const School={name,email,password,distr};
      console.log("before axios");
      const response=await axios.put(`${url}/editschl/${type}/${id}`,School);
      alert("Updated Successfully");
      //window.location.href=`/alldistrict/${id}`
    }
  return (
    <div>hii there
        <h1>Edit District Head </h1>
        <form onSubmit={editSchl}>
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
           
            <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

export default EditSchool