import { Avatar, Backdrop, Box, Button, CircularProgress, IconButton, Link, Menu, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {ChevronRightOutlined,WbSunnyOutlined,AccountCircleRounded,DarkModeOutlined} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { darkMode, userAuth } from '../../Redux/Redux'
import { useNavigate } from 'react-router-dom'
const Topbar = () => {


  // MenuIcon Data
  
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //MenuIcon Data

  const [loading,setLoading] = useState(false)
 
  const [language,setLanguage] = useState('english')
const nav = useNavigate();
  const dispatch = useDispatch();
  const action = darkMode.actions
  const logAction = userAuth.actions
  const mode = useSelector((state)=> state.darkMode.value)

  const logOutHandler= async (e)=>{
   
        setLoading(true)
        localStorage.removeItem('loginUser')
        localStorage.removeItem('token')
        
        localStorage.removeItem('isLoggedIn')
         
             const logout = ()=>{
              dispatch(logAction.switchAuth(false))
              dispatch(action.switchMode(false))
              nav('/login')
             }
             setTimeout(logout,1000)
      
  }
const [userInfo,setUserInfo]=useState({})
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('loginUser'))
setUserInfo(data)

  })

  return (
    <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
         <Box sx={{display:'flex',gap:'1rem'}}>
         
      
         </Box>

         <Box sx={{color:'secondary.text',gap:'1rem',alignItems:'center',paddingX:'5px',display:'flex'}}>
            
            <IconButton onClick={()=>dispatch(action.switchMode(!mode))}>
            {
                 mode ?
                 <DarkModeOutlined sx={{color:'secondary.text'}}/>
                  : <WbSunnyOutlined sx={{color:'secondary.text'}}/>
            }
            </IconButton>
            <IconButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
                <Avatar sx={{width:32,height:32}} src='https://pbs.twimg.com/media/FgYA_RAWQAEWCw3.jpg'/>
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem disabled sx={{color:'black'}} >{userInfo.userName}</MenuItem>


        <MenuItem value='edit' onClick={()=> {handleClose()}}>Edit</MenuItem>
        <MenuItem value='logout' onClick={(e)=>{handleClose();logOutHandler()}}>Logout</MenuItem>
      
      </Menu>
            
          
            

        <Select
        autoWidth
        sx={{backgroundColor:'secondary.bg',color:'secondary.text',
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'secondary.text',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#F2956A',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#F2956A',
        },
        '.MuiSvgIcon-root ': {
          color: 'secondary.text',
        },
        height:'35px',
      
      
      }}
          value={language}
          onChange={(e)=>setLanguage(e.target.value)}
          displayEmpty>
          <MenuItem  disabled={language=='english'?true:false} value={'english'}>
            <Box sx={{display:'flex',alignItems:'center',gap:1}}>
              <Avatar sx={{height:30,width:30}} src='https://www.kindpng.com/picc/m/59-598788_uk-flag-icon-english-language-flag-icon-hd.png'>
              </Avatar>
              <Typography>Eng</Typography>
              </Box>
          </MenuItem>
          <MenuItem disabled={language=='arabic'?true:false}  value={'arabic'}>
          <Box sx={{display:'flex',alignItems:'center',gap:1}}>
          <Avatar sx={{height:30,width:30}} src='https://i.pinimg.com/originals/4a/69/78/4a69787db8db062da229a92bbb181886.png'></Avatar>
          <Typography>Ar</Typography>
          </Box>
          </MenuItem>
        </Select>

         </Box>

         <Backdrop
  sx={{ color: '#fff', zIndex:2 }}
  open={loading}
  
>
<CircularProgress color="inherit" />
</Backdrop>
    </Toolbar>
  )
}

export default Topbar