import React, { useState } from 'react'

import {Alert, Box, Button, Checkbox, CircularProgress, createTheme, Divider, FormControl, FormControlLabel, IconButton, InputAdornment, Snackbar, TextField, ThemeProvider, Typography} from '@mui/material'
import {  VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import {images} from '../../assests/Images'
import SimpleTextField from '../../Components/TextField/SimpleTextField'
import IconTextField from '../../Components/TextField/IconTextField'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {

const [signFormData,setSignFormData] = useState(
  {
    number:'',
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  }
)

const nav = useNavigate()
const [error,setError] = useState(null);
const [errorBox,setErrorBox]=useState(false)
const [loading,setLoading] = useState(false)
const ValidateForm=({number,email,password,confirmPassword,username})=>{

  if(!number || !username || !email || !password || !confirmPassword)
  {
    setErrorBox(true)
    setError('Plz fiil all fields')
    return false
  }
  if(username.length<6)
  {
    setErrorBox(true)
    setError('username length must be greater than 6')
    return false
  }
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

 if(specialChars.test(email)==false)
 {
  setErrorBox(true)
  setError('Plz Enter a valid email')
  return false;
 }

  if(password.length<6)
  {
    setErrorBox(true)
    setError('Password length must be greater than 6')
    return false
  }
  if(password!==confirmPassword)
  {
    setErrorBox(true)
    setError('Password and Confirm Password must match')
    return false
  }

setError(null)
setErrorBox(false)
return true;

}

const formSubmitHandler = async (e)=>{
e.preventDefault();
const validate = await ValidateForm(signFormData);
if(validate)
{
 setLoading(true)
}

}

  return (
   
   <Box sx={{display:'flex',justifyContent:'end',p:{xs:'0',sm:8},background:'url(https://wallpaperaccess.com/full/33139.jpg) no-repeat center/cover',height:'100vh',}}>
   
 
     
    

    <Box sx={{py:2,background:'white',width:{xs:'100%',sm:'490px'},minHeight:{xs:'100%',sm:'650px'},borderRadius:{xs:'0',sm:4},}}>


        <img style={{marginLeft:'1rem'}} width='120px' height='75px' src={images[0]} alt="logo"/>

        

       <form onSubmit={formSubmitHandler} sx={{width:'100%'}}>
       
     <Box sx={{display:'flex',flexDirection:'column',paddingY:'2rem',alignItems:'center',gap:'1.5rem'}}>

     

     <SimpleTextField data={signFormData} setData={setSignFormData} type={'number'} name={'number'} label={'Phone Number'}/>

     <SimpleTextField data={signFormData} setData={setSignFormData} type={'text'} name={'username'} label={'Username'}/>
      
     <SimpleTextField data={signFormData} setData={setSignFormData} type={'text'} name={'email'} label={'Email'}/>
     

    <IconTextField data={signFormData} setData={setSignFormData} iconName={[<VisibilityOutlined/>,<VisibilityOffOutlined/>]} type={'password'}  name={'password'} label={'Password'}/>

    <IconTextField data={signFormData} setData={setSignFormData}  iconName={[<VisibilityOutlined/>,<VisibilityOffOutlined/>]} type={'password'}  name={'confirmPassword'} label={'Confirm Password'}/>
  

  

    <Button  type='submit'  sx={{width:'50%',height:'44px',background:'#F2956A','&:hover':{background:'rgb(242, 159, 106)'}}} variant={loading ? 'disabled':'contained'}>
      {
        loading ? <CircularProgress size={30}  color='inherit' />: 'Sign Up'
      }
    </Button>

 
  

    </Box>

 </form>

 <Typography onClick={()=> nav('/')} component='span' variant='body1' sx={{cursor:'pointer'}}  ml={4} color='primary'>Click here to Login</Typography>



    </Box>

    {/* //Alert Message */}

    <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={errorBox} autoHideDuration={2000} onClose={()=>setErrorBox(false)}>
        <Alert onClose={()=>setErrorBox(false)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
 

</Box>
 

  )
}

export default SignIn