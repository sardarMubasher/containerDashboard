import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SingleSideBarIcon = ({data,open}) => {

  const nav = useNavigate();

  return (
    <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={()=>nav(`/${data.name.split(' ').join('')}`)}
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
              </ListItemButton>
            </ListItem>
  )
}

export default SingleSideBarIcon