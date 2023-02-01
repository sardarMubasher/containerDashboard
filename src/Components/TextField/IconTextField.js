import { Box, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'

const IconTextField = ({iconName,label,name,type,data,setData}) => {

  const [showPass,setShowPass] = useState(false)
  

 
  return (
   
    <Box  sx={{position:'relative',display:'flex',alignItems:'center',width:'90%',}}>
  
  
    <TextField  sx={{width:'100%', 
    
    '& label.Mui-focused': {
      color: 'secondary.main2',
    },
    '& label':{
      color:'secondary.text',
      opacity:'0.7',

    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'secondary.main2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'secondary.text2',
      },
      '&:hover fieldset': {
        borderColor: 'secondary.main2',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'secondary.main2',
      },
     color:'secondary.text',
     borderRadius:'12px'
    },
   
  
}}
 onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
     color='secondary'   id="outlined-basic" type={showPass?'text':'password'} value={data[name]} label={label} name={name}  variant="outlined" />
   
    <IconButton onClick={()=> setShowPass(!showPass)} sx={{position:'absolute',right:'0'}}>
      {iconName[showPass ? 1 : 0]}
    </IconButton>
 </Box>
  )
}

export default IconTextField