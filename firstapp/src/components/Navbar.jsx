import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h2'>MY BLOG</Typography>&nbsp;&nbsp;
                <Button variant='contained' color='secondary'>
                <Link to='/h'>Home</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='success'>
                <Link to='/b'>Add_Blog</Link></Button>&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar