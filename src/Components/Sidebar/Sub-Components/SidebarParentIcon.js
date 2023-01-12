import { ExpandMore } from '@mui/icons-material'
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SidebarSubItems from './SidebarSubItems'

const SidebarParentIcon = ({data,open}) => {

    const [subItemState,setSubItemState] = useState(false)
    useEffect(()=>{
    if(!open)
    {
        setSubItemState(false)
    }
    },[open])

    
  return (
    

   <>
    <ListItem disablePadding sx={{ display: 'block' }}>
    <ListItemButton onClick={()=>setSubItemState(!subItemState)}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
       {data.icon}
      </ListItemIcon>
      <ListItemText primary={data.name} sx={{ opacity: open ? 1 : 0 }} />
     
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
       <ExpandMore  sx={{width:!open?0:'3',color:'white'}} />
      </ListItemIcon>
      
    </ListItemButton>
      
  </ListItem>
  
    {open ? subItemState ?
        <Box>
          <SidebarSubItems open={open}/>
          <SidebarSubItems open={open}/>
          <SidebarSubItems open={open}/>
        </Box> : null:null
    } 
   
   </>

   
  )
}

export default SidebarParentIcon