import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';

const EditStudent = () => {

  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [school, setSchool]=useState('')
    const [clas, setClas]=useState('')
    const {id}=useParams();
    const navigat=useNavigate();
    const url='http://localhost:1337/api';
    useEffect(()=>{
    async function get(){
      try{
        let response=await axios.get(`${url}/${id}`);
        setName(response.data[0].name);
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);
        setSchool(response.data[0].school);
        setClas(response.data[0].clas);
      }
      catch(error){
        console.log("error while getting student details in edit",error);
      }
    }
    get();
    },[]);
    async function editStud(){
      const student={name,email,password,school,clas};
      console.log("before axios");
      const response=await axios.put(`${url}/edit/${id}`,student);
      alert("Updated Successfully");
      window.location.href='/allStudents'
    }
  return (
    
    <div className="App">
        <h1>Edit Student</h1>
        <form onSubmit={editStud}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Name"></input><br/>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input><br/>
          <input value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input><br/>
            <input
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            type="text" placeholder="School"></input><br/>
            <input
            value={clas}
            onChange={(e) => setClas(e.target.value)}
            type="text" placeholder="Class"></input><br/>
            <input type="submit" value="Edit student" />
        </form>
      </div>
  )
}

export default EditStudent