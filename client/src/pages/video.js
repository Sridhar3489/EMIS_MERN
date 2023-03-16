import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Video = () => {
    const [courseid,setId]=useState('')
    const [videoUrl,setVideo]=useState('')
    const handleid=(e)=>{
        setId(e.target.value)
    }
    const handleChange = (e) => {
        console.log(courseid,videoUrl)
        setVideo(e.target.files[0])
    }
    const handleApi = () => {
        //call the api
        const url = 'http://localhost:1337/api/video'

        const formData = new FormData()
        formData.append('courseid',courseid)
        formData.append('videoUrl',videoUrl)
        
        axios.post(url, formData).then(result => {
            console.log(result.data)
            alert('success')
            window.location.href='/facultyHomepage'
        })
            .catch(error => {
                alert('service error')
                console.log(error)
            })
    }

  return (
    <div>
        <label>Upload Video Content of your course </label><br></br>
        <input value={courseid} onChange={handleid} placeholder='Confirm Course ID(only numbers)' name='courseid'></input>
            <br></br>
            <br>
            </br>
            <img src={videoUrl ? URL.createObjectURL(videoUrl) : null} width={150} height={70} />
            <br></br>
            <input type="file" onChange={handleChange} name="videoUrl" /> <br />
            <br></br>
            <br>
            </br>
            <button onClick={handleApi} >SUBMIT</button>
    </div>
  )
}

export default Video