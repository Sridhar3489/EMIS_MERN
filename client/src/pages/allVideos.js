import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
const url='http://localhost:1337/api';
const AllVideos = () => {
=======
import { useParams } from 'react-router-dom';
import Dashboard from './Dashboard';
import { yellow } from '@mui/material/colors';
const url='http://localhost:1337/api';
const AllVideos = () => {
  const {id,type}=useParams();
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
      async function getVid(){
      try{
<<<<<<< HEAD
     let response= await axios.get(`${url}/uploadedVideos`);
=======
     let response= await axios.get(`${url}/uploadedVideos/${type}/${id}`);
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
     setVideos(response.data);
     console.log(response);
      }
      catch(error){
        console.log("error while getting all videos",error.message);
      }
    }
    getVid();
    },[]);
    return (<>
<<<<<<< HEAD
    <div>All videos</div>
=======
    <Dashboard/>
    <div>

      <b>All videos</b><br></br></div>
      <br></br>
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
    <div style={{display:'grid'
    ,gridTemplateColumns:'repeat(3,1fr)',
    gridTemplateRows:'1fr 1fr 1fr',
    height:'400px',
    gridGap:'10px',}}>
    {videos.map((vid)=>{
    return (<div style={{
        border: '1px solid black',
        boxShadow:'0 0 5px black',
        borderRadius:'5px',
        display:'flex',
        flexDirection:'column',
<<<<<<< HEAD
        alignItems:'center',
        justifyContent:'center',}}>
       <Link to={`/displayvideo/${vid._id}`} > <img width="100%" height="200px" src={`http://localhost:1337/${vid.imageUrl}`}/></Link>
        <div>{vid.title}</div>
        <div>{vid.description}</div>
=======
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'}}>
       <Link to={`http://localhost:3000/displayvideo/${type}/${vid._id}`} > <img width="100%" height="200px" src={`http://localhost:1337/${vid.imageUrl}`}/></Link>
        <div>{vid.title}</div>
        <div>{vid.description}</div>
        
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
    </div>);})} 
    </div></>)
}
export default AllVideos;