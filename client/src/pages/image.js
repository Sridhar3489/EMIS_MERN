import React from 'react'
import axios from "axios";
import { useState } from 'react';


const Image = () => {
    /*const[imageq,setImage]=useState('')        
        const handleChange=(e)=>{
            console.log(e.target.files)
            setImage(e.target.files[0])
        }
    const handleApi=()=>{
        const url='http://localhost:1337/api/image';
        const formData=new formData();
        formData.append('image',imageq);
        axios.post(url,formData).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    
    }
  return (
    <div className="App">
        <img width={30} src={URL.createObjectURL(imageq)}/>
        <input type='file' onChange={handleChange}/>
        <button onClick={handleApi}>SUBMIT</button>
      </div>
  );*/


    const [courseid,setId]=useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImage] = useState('')
    const [id,setIdd]=useState('')
   
    const handleid=(e)=>{
        setId(e.target.value)
    }

    const handleChange = (e) => {
        
        setImage(e.target.files[0])
    }

    const handletitle = (e) => {
        setTitle(e.target.value);
    }

    const handleauthor = (e) => {
        setAuthor(e.target.value);
    }

    /*const handlevideo = (e) => {
        console.log(courseid,videoUrl)
        setVideo(e.target.files[0])
    }*/

    const handleApi = () => {
        //call the api
        const url = 'http://localhost:1337/api/image'

        const formData = new FormData()
        formData.append('courseid',courseid)
        formData.append('title', title)
        formData.append('author', author)
        formData.append('imageUrl', imageUrl)
        
        axios.post(url, formData).then(result => {
           
            alert('success')
            console.log(result.idd)
            
           // window.location.href='/video'
           
        })
            .catch(error => {
                alert('service error')
                console.log(error)
            })
    }

    return (
        <div>
            <br />
            <input value={courseid} onChange={handleid} placeholder='Enter Course ID(only numbers)' name='courseid'></input>
            <br></br>
            <br>
            </br>
            <input value={title} onChange={handletitle} placeholder='title'></input>
            <br></br>
            <br>
            </br>
            <input value={author} onChange={handleauthor} placeholder='author' />
            <br></br>
            <br>
            </br>
            <img src={imageUrl ? URL.createObjectURL(imageUrl) : null} width={150} height={70} />
            <br></br>
            <input type="file" onChange={handleChange} name="imageUrl" /> <br />
            <br></br>
            
            <br></br>
            <button onClick={handleApi} >SUBMIT</button>
        </div>
    );
}


export default Image