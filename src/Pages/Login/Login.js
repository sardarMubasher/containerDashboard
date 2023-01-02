import React, { useState } from 'react'
import {Alert, Box, Button, Checkbox, CircularProgress, createTheme, Divider, FormControl, FormControlLabel, IconButton, InputAdornment, Snackbar, TextField, ThemeProvider, Typography} from '@mui/material'
import {VisibilityOutlined,VisibilityOffOutlined } from '@mui/icons-material'
import {images} from '../../assests/Images'
import SimpleTextField from '../../Components/TextField/SimpleTextField'
import IconTextField from '../../Components/TextField/IconTextField'

import { useNavigate } from 'react-router-dom'

const Login = () => {


  const [loginFormData,setLoginFormData] = useState(
    {
      number:'',
      password:'',
      remember:false
    }
  )

const nav = useNavigate()


  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null);
const [errorBox,setErrorBox]=useState(false)

  const formSubmitHandler = async (e)=>{
    e.preventDefault();
  
    const ValidateForm=({number,password})=>{

      if(!number || !password)
      {
        setErrorBox(true)
        setError('Plz fiil all fields')
        return false
      }
      if(password.length<6)
      {
        setErrorBox(true)
        setError('Password length must be greater than 6')
        return false
      }
    
    
    setError(null)
    setErrorBox(false)
    return true;
    
    }

    const validate = await ValidateForm(loginFormData);
    if(validate)
    {
     setLoading(true)
    }
   
    
    }


  return (
   
    <Box sx={{display:'flex',justifyContent:'start',p:{xs:'0',sm:8},background:'url(https://wallpaperaccess.com/full/33139.jpg) no-repeat center/cover',height:'100vh',}}>
         
         <Box sx={{py:2,background:'white',width:{xs:'100%',sm:'490px'},height:{xs:'100%',sm:'700px'},borderRadius:{xs:'0',sm:4},}}>


             <img style={{marginLeft:'1rem'}} width='120px' height='75px' src={images[0]} alt="logo"/>

             

            <form onSubmit={formSubmitHandler} sx={{width:'100%'}}>
            
          <Box sx={{display:'flex',flexDirection:'column',paddingY:'2rem',alignItems:'center',gap:'2rem'}}>

          
          <SimpleTextField data={loginFormData} setData={setLoginFormData} type={'number'} name={'number'} label={'Phone Number'}/>
     

     <IconTextField data={loginFormData} setData={setLoginFormData} iconName={[<VisibilityOutlined/>,<VisibilityOffOutlined/>]} type={'password'}  name={'password'} label={'Password'}/>
         <Box sx={{display:'flex',width:'90%',justifyContent:'space-between',alignItems:'center'}}>

         
          <Typography  sx={{cursor:'pointer',color:'#F2956A'}}>Forgot Password</Typography>

          <FormControlLabel  labelPlacement='start'   label="Remember Me"  control={<Checkbox name='remeber' onChange={()=>setLoginFormData({...loginFormData,remember:loginFormData.remember?false:true})} color='secondary'  />} />
         </Box>

       
         <Button  type='submit'  sx={{width:'50%',height:'44px',background:'#F2956A','&:hover':{background:'rgb(242, 159, 106)'}}} variant={loading ? 'disabled':'contained'}>
      {
        loading ? <CircularProgress size={30}  color='inherit' />: 'Login'
      }
    </Button>
       

         </Box>
    
      </form>

      <Typography onClick={()=> nav('/Signin')} component='span' variant='body1' sx={{cursor:'pointer'}}  ml={4} color='primary'>Click here to Register</Typography>



         </Box>

         <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={errorBox} autoHideDuration={2000} onClose={()=>setErrorBox(false)}>
        <Alert onClose={()=>setErrorBox(false)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>



    </Box>

  )
}

export default Login