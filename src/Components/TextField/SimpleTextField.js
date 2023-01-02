import { TextField } from '@mui/material'
import React from 'react'

const SimpleTextField = ({label,type,name,data,setData}) => {


  return (
    <TextField onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} color='secondary' sx={{width:'90%','&:focus':{borderColor:'#F2956A'}}} type={type} name={name} value={data.name} id="outlined-basic" label={label} variant="outlined" />
  )
}

export default SimpleTextField