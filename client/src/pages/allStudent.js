import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {Table,TableHead,TableBody,TableRow,TableCell,styled,Button} from '@mui/material';
import {Link} from 'react-router-dom';
const StyledTable=styled(Table)`
 width: 90%;
 margin:50px auto 0 auto;
`
const THead=styled(TableRow)`
background:#000000;
&>th{
  color:#fff;
  font-size:20px;
}
`
const TBody=styled(TableRow)`
&>td{
  font-size:20px;
}
`
const url='http://localhost:1337/api';
const AllStudent = () => {
  const [students,setStudents]=useState([]);
  useEffect(()=>{
    async function getStud(){
    try{
   let response= await axios.get('http://localhost:1337/api/allStudents');
   console.log(response);

   setStudents(response.data);
    }
    catch(error){
      console.log("error while getting all students",error);
    }
  }
  getStud();
  },[]);

  const deleteStudent=async(id)=>{
    try{
    await axios.delete(`${url}/delete/${id}`);
    alert("Deleted Successfully");
      window.location.href='/allStudents'
    }
    catch(err)
    {
      console.log("error while calling delete user api",err);
    }
  }
  return (
   
        <StyledTable>
        <TableHead>
            <THead>
            <TableCell> Name </TableCell>
            <TableCell> Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>School</TableCell>
             <TableCell>Class</TableCell>
             <TableCell></TableCell>
            </THead>
        </TableHead>
        <TableBody>
          {
            students.map(stud=>(
             <TBody>
              <TableCell>{stud.name}</TableCell>
              <TableCell>{stud.email}</TableCell>
              <TableCell>{stud.password}</TableCell>
              <TableCell>{stud.school}</TableCell>
              <TableCell>{stud.clas}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/editStudent/${stud._id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=>deleteStudent(stud._id)}>Delete</Button>
              </TableCell>
  
             </TBody>
            ))
          }
        </TableBody>
    </StyledTable>
  
  )
  }    


export default AllStudent;