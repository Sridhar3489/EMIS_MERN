import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';


const EditStudent = () => {
    const {id,type}=useParams();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [study,setStudy]=useState('')
    const [school,setSchool]=useState('')
    const [aggr,setAggr]=useState('')
    const [gender,setGender]=useState('')
    const navigat=useNavigate();
    const url='http://localhost:1337/api';
    useEffect(()=>{
    async function get(){
      try{
        let response=await axios.get(`${url}/student/${type}/${id}`);
        setName(response.data[0].name);
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);
        setStudy(response.data[0].study);
        setSchool(response.data[0].school);
        setAggr(response.data[0].aggr);
        setGender(response.data[0].gender);
      }
      catch(error){
        console.log("error while getting student details in edit",error);
      }
    }
    get();
    },[]);
    async function editStud(){
      const Student={name,email,password,study,school,aggr,gender};
      console.log("before axios");
      const response=await axios.put(`${url}/editstud/${type}/${id}`,Student);
      alert("Updated Successfully");
      //window.location.href=`/alldistrict/${id}`
    }
  return (
    <div>hii there
        <h1>Edit Student </h1>
        <form onSubmit={editStud}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Name"></input><br/>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
          <input value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>  
            <input value={study} placeholder='Study' onChange={(e)=>setStudy(e.target.value)} type="Number"></input>
            <br></br>
            <input value={school} placeholder='School' onChange={(e)=>setSchool(e.target.value)} type="text"></input>
            <br></br>
            <input value={aggr} placeholder='Aggregate' onChange={(e)=>setAggr(e.target.value)} type="Number"></input>
            <br></br>
            <input value={gender} placeholder='Gender' onChange={(e)=>setGender(e.target.value)} type="text"></input>
            <br></br>
            <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

export default EditStudent