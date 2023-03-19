import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { styled,FormControl,Input,Button, InputLabel } from '@mui/material';
const FormData=require('form-data');
const AddVideo = () => {

  const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl]=useState('');
    

    async function addVideo(event){
        event.preventDefault();
        const formData=new FormData();
        formData.append('title',title);
        formData.append('description',description);
        formData.append('imageUrl',imageUrl);
        formData.append('videoUrl',videoUrl);
        try{
            console.log("before");
       const response= await axios.post('http://localhost:1337/api/video',formData);
       console.log("after");
        if(response.data["status"]==='ok')
      alert("Video uploaded");
        }
        catch(err)
        {
            console.log("error in calling video api",err);
        }
      
    

    }
  return (
    
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
      </div>
  );
}

export default AddVideo;