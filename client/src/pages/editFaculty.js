import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';


const EditFaculty = () => {
    const {id,type}=useParams();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [subject,setSubject]=useState('')
    const [school,setSchool]=useState('')
    const navigat=useNavigate();
    const url='http://localhost:1337/api';
    useEffect(()=>{
    async function get(){
      try{
        let response=await axios.get(`${url}/faculty/${type}/${id}`);
        setName(response.data[0].name);
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);
        setSubject(response.data[0].subject);
        setSchool(response.data[0].school);
      }
      catch(error){
        console.log("error while getting student details in edit",error);
      }
    }
    get();
    },[]);
    async function editFac(){
      const Faculty={name,email,password,subject,school};
      console.log("before axios");
      const response=await axios.put(`${url}/editfac/${type}/${id}`,Faculty);
      alert("Updated Successfully");
      //window.location.href=`/alldistrict/${id}`
    }
  return (
    <div>hii there
        <h1>Edit Faculty </h1>
        <form onSubmit={editFac}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Name"></input><br/>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
          <input value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>
           
            <input value={subject} placeholder='Subject' onChange={(e)=>setSubject(e.target.value)} type="text"></input>
            <br></br>
            <input value={school} placeholder='School' onChange={(e)=>setSchool(e.target.value)} type="text"></input>
            <br></br>
            <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

export default EditFaculty