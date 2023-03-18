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
const AllFaculty = () => {
  const {id}=useParams()
  const [Faculty, setFaculty] = useState([])
  useEffect(() => {
    async function getFac() {
      try {
        let response = await axios.get('http://localhost:1337/api/allfaculty');
        console.log(response);
        setFaculty(response.data)
      }
      catch (error) {
        console.log("Error while fetching districts", error)
      }
    }
    getFac();
  }, []);

  const deleteFac = async (idd) => {
    try {
      await axios.delete(`${url}/deletefac/${idd}`);
      alert("Deleted Successfully");
      window.location.href = `/allfaculty/${id}`
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
          <TableCell>Subject</TableCell>
          <TableCell>School</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          Faculty.map(fac => (
            <TBody>
              <TableCell>{fac.name}</TableCell>
              <TableCell>{fac.email}</TableCell>
              <TableCell>{fac.subject}</TableCell>
              <TableCell>{fac.school}</TableCell>
              <TableCell>
                <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/editfac/${fac._id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => deleteFac(fac._id)}>Delete</Button>
              </TableCell>
            </TBody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllFaculty