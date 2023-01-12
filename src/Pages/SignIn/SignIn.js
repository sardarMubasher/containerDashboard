import React, { useEffect, useState } from 'react'

import {Alert, Backdrop, Box, Button, Checkbox, CircularProgress, createTheme, Divider, FormControl, FormControlLabel, IconButton, InputAdornment, Snackbar, TextField, ThemeProvider, Typography} from '@mui/material'
import {  VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import {images} from '../../assests/Images'
import SimpleTextField from '../../Components/TextField/SimpleTextField'
import IconTextField from '../../Components/TextField/IconTextField'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../Api/ApiConstant'
import { darkMode, userAuth } from '../../Redux/Redux'
import { useDispatch } from 'react-redux'


const SignIn = () => {

  const action = userAuth.actions
  const Daction = darkMode.actions

  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(action.switchAuth(false))
     dispatch(Daction.switchMode(false))
  },[])

const [signFormData,setSignFormData] = useState(
  {
    PhoneNumber:'',
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  }
)

const nav = useNavigate()
const [successMsg,setSuccessMsg]=useState(null)
const [error,setError] = useState(null);
const [errorBox,setErrorBox]=useState(false)
const [loading,setLoading] = useState(false)
const ValidateForm=({PhoneNumber,email,password,confirmPassword,username})=>{

  if(!PhoneNumber || !username || !email || !password || !confirmPassword)
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
  if(specialChars.test(password)==false)
  {
    setErrorBox(true)
    setError('Password must contain a special Character')
    return false
  }
  if((/([a-z].*[A-Z])|([A-Z].*[a-z])/).test(password)==false)
  {
    setErrorBox(true)
    setError('Password must contain a mix of Uppercase and Lowercase Alphabets')
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

 let formData = new FormData();
 formData.append('PhoneNumber', signFormData.PhoneNumber);
 formData.append('UserName', signFormData.username);
 formData.append('Email', signFormData.email);
 formData.append('Password', signFormData.password);
 formData.append('ConfirmPassword', signFormData.confirmPassword);

 axios.post(`${BASE_URL}/Account/registerUser`,formData).then((res)=>{
     
  setSuccessMsg('Account Created Successfully')
  setLoading(false)
  setError(null)
  setErrorBox(false)

  setTimeout(()=>{
    nav('/')
  },800)

  
}).catch(({response})=>{

 
    setError(response.data.error? response.data.errorerror: response.data)
    setErrorBox(true)
    
    setLoading(false)
    console.log(response);
})

}

}

  return (
   
    <Box sx={{overflow:'scroll',display:'flex',justifyContent:'end',p:{xs:'0',sm:8},background:' linear-gradient(178deg,#F4F5F800,#F4F5F8), url(https://cdn.shopify.com/s/files/1/0334/8565/2108/products/Joan_Asp_Serenity_a2f0647c-8883-4897-9623-fa68baffff4d_2048x.jpg?v=1582005160) no-repeat center/cover',height:'100vh',}}>
    

    <Box sx={{py:2,background:'white',width:{xs:'100%',sm:'490px'},minHeight:{xs:'100%',sm:'650px'},borderRadius:{xs:'0',sm:4},}}>


        <img style={{marginLeft:'1rem'}} width='120px' height='75px' src={images[0]} alt="logo"/>

        

       <form onSubmit={formSubmitHandler} sx={{width:'100%'}}>
       
     <Box sx={{display:'flex',flexDirection:'column',paddingY:'2rem',alignItems:'center',gap:'1.5rem'}}>

     

     <SimpleTextField data={signFormData} setData={setSignFormData} type={'number'} name={'PhoneNumber'} label={'Phone Number'}/>

     <SimpleTextField data={signFormData} setData={setSignFormData} type={'text'} name={'username'} label={'Username'}/>
      
     <SimpleTextField data={signFormData} setData={setSignFormData} type={'text'} name={'email'} label={'Email'}/>
     

    <IconTextField data={signFormData} setData={setSignFormData} iconName={[<VisibilityOutlined/>,<VisibilityOffOutlined/>]} type={'password'}  name={'password'} label={'Password'}/>

    <IconTextField data={signFormData} setData={setSignFormData}  iconName={[<VisibilityOutlined/>,<VisibilityOffOutlined/>]} type={'password'}  name={'confirmPassword'} label={'Confirm Password'}/>
  

  

    <Button  type='submit'  sx={{width:'50%',height:'44px',background:'#F2956A','&:hover':{background:'rgb(242, 159, 106)'}}} variant={loading ? 'disabled':'contained'}>
      Sign Up
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

      <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={successMsg?true:false} autoHideDuration={2000} onClose={()=>setSuccessMsg(null)}>
        <Alert onClose={()=>setErrorBox(false)} severity="success" sx={{ width: '100%' }}>
          {successMsg}
        </Alert>
      </Snackbar>

      <Backdrop
  sx={{ color: '#fff', zIndex:2 }}
  open={loading}
  
>
<CircularProgress color="inherit" />
</Backdrop>
      
 

</Box>
 

  )
}

export default SignIn