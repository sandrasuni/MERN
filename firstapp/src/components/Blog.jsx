import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <br /><br /><br />
        <Typography variant='h2'>Add Blog</Typography>
        <TextField label="Blog Name" variant="outlined" /><br /><br />
        <TextField label="Description" variant="outlined" /><br /><br />
        <TextField label="Author Name" variant="outlined" /><br /><br />
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Blog