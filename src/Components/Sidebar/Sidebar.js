import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  Menu,
  ChevronRight,
  ChevronLeft,
  ExpandMore
 
} from '@mui/icons-material'

import { SidebarIconList } from './Sub-Components/SidebarIconList';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import SidebarSubItems from './Sub-Components/SidebarSubItems';
import SidebarParentIcon from './Sub-Components/SidebarParentIcon';
import SingleSideBarIcon from './Sub-Components/SingleSideBarIcon';
import Topbar from '../Topbar/Topbar';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
   
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({expand,setExpand}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setExpand(true)

  };

  const handleDrawerClose = () => {
    setOpen(false);
    setExpand(false)
   
  };

 
  return (
    <Box  sx={{ display: 'flex'}}>
    
      <AppBar sx={{backgroundColor:'secondary.bg',boxShadow:'none',zIndex:'1',paddingLeft:open ? '12px':'64px'}} position="fixed" open={open}>
        <Topbar/>
      </AppBar>
      <Drawer PaperProps={{sx:{backgroundColor:'secondary.main',color:'white',}}}  sx={{width:240}}  variant="permanent" open={open}>
        <DrawerHeader onMouseEnter={()=> open ? handleDrawerOpen():''} sx={{color:'white'}} >
          <Typography variant='h5'  sx={{marginRight:'86px', opacity: open ? 1 : 0 }}>Arrival</Typography>
          {!open ?
          
              <IconButton
              onClick={handleDrawerOpen}
              sx={{
               color:'white',
                justifyContent:'center',
                display: 'flex',
                ...(open && { display: 'none', }),
              }}
            >
              <Menu />
            </IconButton> :    <IconButton sx={{color:'white'}} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
          }
        
        </DrawerHeader>
        <Divider />
        <Box onMouseLeave={handleDrawerClose} onMouseEnter={handleDrawerOpen}>
       
        <List >
          {SidebarIconList[0].map((data, index) => (
             <SingleSideBarIcon  key={index} data={data} open={open}/>
          ))}
        </List>

        <Typography variant='body1'  sx={{textAlign:'center',mr:open ?'134px' :'',display:!open?'none':'block',mt:2,opacity: open ? 1 : 0}}>System</Typography>

        <List sx={{mt:!open?-2:''}}>
          {SidebarIconList[1].map((data, index) => (
             <SingleSideBarIcon key={index} data={data} open={open}/>
          ))}
        </List>
        
        {/* Hard COded Data */}

        <Typography variant='body1'  sx={{textAlign:'center',mr:open ?'84px' :'',display:!open?'none':'block',mt:2,opacity: open ? 1 : 0}}>Transportation</Typography>

        <List sx={{mt:!open?-2:''}}>
          {SidebarIconList[2].map((data, index) => (
              <SidebarParentIcon key={index} data={data} open={open}  />
          ))}
        </List>
        
     
        </Box>

      </Drawer>
     
     {/* <Box onMouseOver={handleDrawerClose} sx={{position:'fixed',top:0,width:'100%',height:'100vh'}}>

     </Box> */}
    </Box>
  );
}