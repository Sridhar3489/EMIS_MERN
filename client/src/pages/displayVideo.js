import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
// import ReactPlayer from 'react-player';
const DisplayVideo = () => {

    const [videoUrl, setVideoUrl] = useState('')
<<<<<<< HEAD
    const {id}=useParams(); 
=======
    const {id,type}=useParams(); 
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
    const url='http://localhost:1337/api';
      useEffect(()=>{
      async function get(){
        try{
<<<<<<< HEAD
          let response=await axios.get(`${url}/getvideo/${id}`);
=======
          let response=await axios.get(`${url}/getvideo/${type}/${id}`);
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
          setVideoUrl(response.data[0].videoUrl);
        }
        catch(error){
          console.log("error while getting student details in edit",error);
        }
      }
      get();
      },[]);
      return (
        
        <video src={`http://localhost:1337/${videoUrl}`} width="1200" height="500" style={{marginLeft:"100px"}}controls="controls"  />
      );
    }
    export default DisplayVideo