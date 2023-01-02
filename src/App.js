import './App.css';
import { Box, createTheme, CssBaseline, Fade, ThemeProvider } from '@mui/material'
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';
function App() {

  const theme = createTheme({
    palette: {
      secondary: {
        main: 'rgb(242, 149, 106)'
      },
      transitions: {
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          // most basic recommended timing
          standard: 300,
          // this is to be used in complex animations
          complex: 375,
          // recommended when something is entering screen
          enteringScreen: 225,
          // recommended when something is leaving screen
          leavingScreen: 195,
        },
      },
  }})


  const [expand,setExpand] = useState(false)


  return (
    <>
    
  <CssBaseline/>
<ThemeProvider theme={theme}>

<Router>
  <div style={{width:'100%'}}>
       
        <div >
          <Sidebar expand={expand} setExpand={setExpand} />
         </div>
         
       <Box  sx={{transitionDuration:'.3s',transitionProperty:'all',marginLeft:{sm:expand?'240px':'64px',xs:'64px'}}}>
      
      <Routes>
       
           <Route path='/' element={<Login/>}/>
           <Route path='/Signin' element={<SignIn/>}/>
       </Routes>
     
       </Box>
     
  </div> 
</Router>


  </ThemeProvider>

    </>
  );
}

export default App;
