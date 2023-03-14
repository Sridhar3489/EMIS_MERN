import React from 'react'
import {Table,TableHead,TableBody,TableRow,TableCell} from '@mui/material';
const AllStudent = () => {
  return (
   
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>
                Name
            </TableCell>
                <TableCell>
                Email
                </TableCell>
                <TableCell>
                Password</TableCell>
                <TableCell>
                School</TableCell>
                <TableCell>
                Class</TableCell>
                </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
    </Table>
  
  )
  }    


export default AllStudent;