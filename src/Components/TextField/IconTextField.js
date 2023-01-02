import { Box, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'

const IconTextField = ({iconName,label,name,type,data,setData}) => {

  const [showPass,setShowPass] = useState(false)
  

 
  return (
   
    <Box  sx={{position:'relative',display:'flex',alignItems:'center',width:'90%'}}>
  
  
    <TextField onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
     color='secondary'  sx={{width:'100%'}}  id="outlined-basic" type={showPass?'text':'password'} label={label} name={name} value={data.name} variant="outlined" />
   
    <IconButton onClick={()=> setShowPass(!showPass)} sx={{position:'absolute',right:'0'}}>
      {iconName[showPass ? 1 : 0]}
    </IconButton>
 </Box>
  )
}

export default IconTextField