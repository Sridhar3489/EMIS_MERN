import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { styled,FormControl,Input,Button, InputLabel } from '@mui/material';
<<<<<<< HEAD
const FormData=require('form-data');
const AddVideo = () => {

=======
import { useParams } from 'react-router-dom';
import './loginpage.css'
const FormData=require('form-data');
const AddVideo = () => {
  const {id,type}=useParams()
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
  const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl]=useState('');
    
<<<<<<< HEAD

=======
    
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
    async function addVideo(event){
        event.preventDefault();
        const formData=new FormData();
        formData.append('title',title);
        formData.append('description',description);
        formData.append('imageUrl',imageUrl);
        formData.append('videoUrl',videoUrl);
        try{
            console.log("before");
<<<<<<< HEAD
       const response= await axios.post('http://localhost:1337/api/video',formData);
       console.log("after");
        if(response.data["status"]==='ok')
      alert("Video uploaded");
=======
       const response= await axios.post(`http://localhost:1337/api/video/${type}/${id}`,formData);
       console.log("after");
        if(response.data["status"]==='ok')
      alert("Video uploaded");
      window.location.href=`http://localhost:3000/allvideo/${type}/${id}`;
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
        }
        catch(err)
        {
            console.log("error in calling video api",err);
        }
      
    

    }
  return (
    
<<<<<<< HEAD
    <div className="App">
        <h1>Add Video</h1>
        <center>
        <form onSubmit={addVideo} >
         <div>Title</div>   
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"/>
        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description"/>
         Add Preview Image <input  onChange={(e) => setImageUrl(e.target.files[0])} type="file" name="imageUrl"/>
         Add Video<input onChange={(e) => setVideoUrl(e.target.files[0])} type="file" name="videoUrl"/>
            
            <input type="submit" variant="contained" color="primary" value="upload"/>
        </form>
        </center>
=======
    <div className="page">
      <div className='login-box'>
      <h1>Add Video</h1>
       
       <form onSubmit={addVideo} >
        <label>Title</label>
       <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"/><br></br>
       <label>Description</label>
       <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" /><br></br>
       <label>Add Image</label> <input  onChange={(e) => setImageUrl(e.target.files[0])} type="file" name="imageUrl"/><br></br>
       <label>Add Video</label><input onChange={(e) => setVideoUrl(e.target.files[0])} type="file" name="videoUrl"/><br></br>
        <Button type="submit" variant="contained" color="primary">Upload</Button> 
       </form>
       
      </div>
        
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
      </div>
  );
}

<<<<<<< HEAD
export default AddVideo;
=======
export default AddVideo;
>>>>>>> e996da5fdce5968ed46aeb7a4c13482d3787d8de
