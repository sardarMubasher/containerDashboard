import './App.css';
import { Box, createTheme, CssBaseline, Fade, ThemeProvider } from '@mui/material'
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { darkMode,userAuth } from './Redux/Redux'; 
import Users from './Pages/Users/Users';
import DriverReg from './Pages/DriverRegistration/DriverReg';
function App() {

  const Auth = useSelector((state)=>state.userAuth.value)
  const darkMode = useSelector((state)=> state.darkMode.value)
  const theme = createTheme({
    palette:!darkMode  ? {
          secondary: {
      main: 'rgb(242, 149, 106)',
      text:'#555',
      bg:'#fff',
      hov:'#e1e2fe',
    bg2:'#fff',
    main2: 'rgb(242, 149, 106)',
    text2:'#D3D3D3'
        
    },
    sepColor:{
      main: 'rgb(242, 149, 106)'
    }
  }:{
    secondary: {
main: '#1F2A40',
text:'#FFFFFF',
bg:'#141b2d',
hov:'#2f3e5c',
bg2:'#1F2A40',
main2:'#fff',
text2:'#fff'
},
sepColor:{
  main: '#fff'
}
}
})

  
  
  const [expand,setExpand] = useState(false)

  const Mystyle = {height:'85%',transitionDuration:'.3s',transitionProperty:'all',marginLeft:{sm:expand?'243px':'68px',xs:'68px'},marginTop:'64px'}


  return (
    <>
    
  <CssBaseline/>
<ThemeProvider theme={theme}>

<Router>
  <Box sx={{width:'100%',height:'100vh',background:darkMode?'#141b2d':'white',overflowY:'auto'}}>
       
        <Box>
          {Auth?
                 <Sidebar expand={expand} setExpand={setExpand} />:''
          }
        
         </Box>
         
         <Box    sx={Auth ? Mystyle : ''}>
      <Routes>
       
           <Route path='/' element={<Login   />}/>
           <Route path='/Signin' element={<SignIn/>}/>
           <>{
          Auth ? 
          
          <>
                <Route path='/users' element={<Users/>}/>
                <Route path='/DriverRegistration' element={<DriverReg/>}/>
           </>
        
           :  <Route path='*' element={<Login/>}/>
          
           }
            </>
       
       </Routes>
       </Box>
          
     
       
     
  </Box> 
</Router>


  </ThemeProvider>

    </>
  );
}

export default App;
