import React from 'react'
import { useParams } from 'react-router-dom'
import { Table, TableCell, TableHead, TableBody, TableRow, styled, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const StyledTable = styled(Table)`
 width: 90%;
 margin:50px auto 0 auto;
`

const THead = styled(TableRow)`
background:#000000;
&>th{
  color:#fff;
  font-size:20px;
}
`
const TBody = styled(TableRow)`
&>td{
  font-size:20px;
}
`

const url = 'http://localhost:1337/api';
const AllStudents = () => {
  const {id,type}=useParams()
  const [Students, setStudents] = useState([])
  useEffect(() => {
    async function getStud() {
      try {
        let response = await axios.get(`http://localhost:1337/api/allstud/${type}/${id}`);
        console.log(response);
        setStudents(response.data)
      }
      catch (error) {
        console.log("Error while fetching students", error)
      }
    }
    getStud();
  }, []);

  const deleteStud = async (idd) => {
    try {
      await axios.delete(`${url}/deletestud/${idd}`);
      alert("Deleted Successfully");
      window.location.href = `/allstudent/${type}/${id}`
    }
    catch (err) {
      console.log("error while calling delete user api", err);
    }
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Study</TableCell>
          <TableCell>School</TableCell>
          <TableCell>Aggregate</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          Students.map(stud => (
            <TBody>
              <TableCell>{stud.name}</TableCell>
              <TableCell>{stud.email}</TableCell>
              <TableCell>{stud.study}</TableCell>
              <TableCell>{stud.school}</TableCell>
              <TableCell>{stud.aggr}</TableCell>
              <TableCell>{stud.gender}</TableCell>
              <TableCell>
                <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/editstud/${type}/${stud._id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => deleteStud(stud._id)}>Delete</Button>
              </TableCell>
            </TBody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllStudents