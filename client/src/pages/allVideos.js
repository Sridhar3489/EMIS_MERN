import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const url='http://localhost:1337/api';
const AllVideos = () => {
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
      async function getVid(){
      try{
     let response= await axios.get(`${url}/uploadedVideos`);
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
    <div>All videos</div>
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
        alignItems:'center',
        justifyContent:'center',}}>
       <Link to={`/displayvideo/${vid._id}`} > <img width="100%" height="200px" src={`http://localhost:1337/${vid.imageUrl}`}/></Link>
        <div>{vid.title}</div>
        <div>{vid.description}</div>
    </div>);})} 
    </div></>)
}
export default AllVideos;