import { FileUpload } from '@mui/icons-material'
import { Box, Avatar, IconButton, TextField, Typography } from '@mui/material'

import React from 'react'

const FileInput = ({type,data,name,label,setData}) => {
  return (
    <Box sx={{display:'flex',width:'90%',alignItems:'center',borderRadius:'12px',px:1,
    border:'1px solid',borderColor:'secondary.text2',justifyContent:'space-between'}}>
  <Typography>{data[name]?data[name].name.substr(0,8)+"...":'Select Image'}</Typography>
  <IconButton sx={{cursor:'pointer'}}> 
  <label htmlFor={name}>
    <Avatar sx={{bgcolor:'secondary.main2'}}>
    <FileUpload sx={{color:'var(--textColor)',cursor:'pointer',}}/>
    </Avatar>
    </label>
  </IconButton>
  <input id={name} name={name} onChange={(e)=>setData({...data,[e.target.name]:e.target.files[0]})}  style={{ display:'none'}}
  type={type}   />
  </Box>
  )
}

export default FileInput