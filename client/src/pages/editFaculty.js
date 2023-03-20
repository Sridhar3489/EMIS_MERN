import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';


const EditFaculty = () => {
    const {id,editid,type}=useParams();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [subject,setSubject]=useState('')
    const [school,setSchool]=useState('')
    const [alldist,setAllDist]=useState([]);
  const [allschl,setAllSchl]=useState([]);
  const [dist,setDist]=useState('')
  const [distid,setDistId]=useState('')
  const [schoolid,setSchoolID]=useState('')
    const navigat=useNavigate();
    const url='http://localhost:1337/api';
    useEffect(()=>{
    async function get(){
      try{
        let response=await axios.get(`${url}/faculty/${type}/${editid}`);
        setName(response.data[0].name);
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);
        setSubject(response.data[0].subject);
        setSchool(response.data[0].school);
        setDist(response.data[0].dist)
        setDistId(response.data[0].distid)
        setSchoolID(response.data[0].schoolid)
      }
      catch(error){
        console.log("error while getting student details in edit",error);
      }
    }
    get();
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
    },[]);
    useEffect(()=>{

      if(distid!=''){
        const x="distr";
        fetch(`http://localhost:1337/api/allschools/${x}/${distid}`).then(res=>res.json()).then(data=>setAllSchl(data)).catch(err=>console.error(err));
        //console.log(allschl);
      }
    },[distid])
    async function editFac(){
      const Faculty={name,email,password,subject,school,dist,schoolid,distid};
      console.log("before axios");
      const response=await axios.put(`${url}/editfac/${type}/${editid}`,Faculty);
      if(response){
        alert("Updated Successfully");
      }
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
            <select value={[distid,dist]} onChange={(e) => {const [did,dname]=e.target.value.split(",");setDistId(did);setDist(dname);}}>
          <option>select district</option>
          {alldist.map((d) => (
            <option value={[d._id,d.dist]} key={d._id}>{d.dist}</option>
          ))}
        </select>
        <br></br>
        
        
        <select value={[schoolid,school]} onChange={(e) => { 
          console.log("hello");
          const [sid,sname]=e.target.value.split(",");
          setSchoolID(sid);
          setSchool(sname); 
          console.log(schoolid,school);
        }} >
           <option>select school</option>
          {allschl.map((d) => (
            <option value={[d._id,d.name]} key={d._id}>{d.name}</option>
          ))}
        </select>
        
        <br></br>
            <br></br>
            <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

export default EditFaculty