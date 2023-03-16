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
    
    const Form=styled(FormControl)`
    border:1px solid black;
    border-radius:5px;
    width:30%;
    margin-top:100px;
    box-shadow: 5px 25px 20px 50px lightblue;

    `
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
        <Form onSubmit={addVideo} >
         <InputLabel>Title</InputLabel>   
        <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"/>
        <Input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description"/>
         Add Preview Image <Input  onChange={(e) => setImageUrl(e.target.files[0])} type="file" name="imageUrl"/>
         Add Video<Input onChange={(e) => setVideoUrl(e.target.files[0])} type="file" name="videoUrl"/>
            
            <Button type="submit" variant="contained" color="primary">Upload</Button> 
        </Form>
        </center>
      </div>
  );
}

export default AddVideo;