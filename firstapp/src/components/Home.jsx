import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Home = () => {
    var[user,setuser]=useState([]);
    useEffect(()=>{
        axios.get(" https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        console.log(response.data)
        setuser(response.data)
    })
    
    },[])

  return (
    <div><br /><br /><br />
       <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Title</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val,i)=>{
                            return(
                    <TableRow>           
                    <TableCell>{val.id}</TableCell>
                    <TableCell>{val.title}</TableCell> 
                    </TableRow>
                        )
                        })}
                    </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home