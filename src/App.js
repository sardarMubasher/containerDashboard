import './App.css';
import { Box, createTheme, CssBaseline, Fade, ThemeProvider } from '@mui/material'
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import Home from './Pages/Home/Home';

function App() {

  const [Auth,setAuth] = useState(false)
  const theme = createTheme({
    palette: {
      secondary: {
        main: 'rgb(242, 149, 106)'
      },

  }})

  
  const [expand,setExpand] = useState(false)

  const Mystyle = {transitionDuration:'.3s',transitionProperty:'all',marginLeft:{sm:expand?'240px':'64px',xs:'64px'},marginTop:'75px'}


  return (
    <>
    
  <CssBaseline/>
<ThemeProvider theme={theme}>

<Router>
  <div style={{width:'100%'}}>
       
        <div >
          {Auth?
                 <Sidebar expand={expand} setExpand={setExpand} />:null
          }
        
         </div>
         
         <Box   sx={Auth ? Mystyle : ''}>
      <Routes>
       
           <Route path='/' element={<Login Auth={Auth} setAuth={setAuth} />}/>
           <Route path='/Signin' element={<SignIn/>}/>
           <>{
          Auth ? 
          
          
                <Route path='/home' element={<Home/>}/>
        
           :  <Route path='*' element={<Login Auth={Auth} setAuth={setAuth}/>}/>
          
           }
            </>
       
       </Routes>
       </Box>
          
     
       
     
  </div> 
</Router>


  </ThemeProvider>

    </>
  );
}

export default App;
