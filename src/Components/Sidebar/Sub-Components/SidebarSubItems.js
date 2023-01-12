import { Add, ExpandMore, SettingsInputSvideo } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const SidebarSubItems = ({open}) => {
  return (
    <ListItem  disablePadding sx={{ display: 'block' }}>
    <ListItemButton
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
      
      </ListItemIcon>
      <ListItemText primary='Sub Item' sx={{ opacity: open ? 1 : 0 }} />
     
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
    <Add sx={{color:'white'}}/>
      </ListItemIcon>

    </ListItemButton>
  </ListItem>
  )
}

export default SidebarSubItems