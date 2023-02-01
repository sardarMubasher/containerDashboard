import { TextField } from '@mui/material'
import React from 'react'

const SimpleTextField = ({label,type,name,data,setData,width='90%'}) => {

  

  return (
    <TextField variant='outlined' onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}   sx={{width:width, 
    
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
    type={type} name={name} value={data[name]} id="outlined-basic" label={label} />
  )
}

export default SimpleTextField