import React, { useEffect, useState } from 'react'
import {Alert, Backdrop, Box, Button, Checkbox, CircularProgress, createTheme, Divider, FormControl, FormControlLabel, IconButton, InputAdornment, Snackbar, TextField, ThemeProvider, Typography} from '@mui/material'
import {VisibilityOutlined,VisibilityOffOutlined } from '@mui/icons-material'
import {images} from '../../assests/Images'
import SimpleTextField from '../../Components/TextField/SimpleTextField'
import IconTextField from '../../Components/TextField/IconTextField'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Api/ApiConstant'
import { darkMode, userAuth } from '../../Redux/Redux'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const action = userAuth.actions
  const Daction = darkMode.actions
  const mode = useSelector((state)=>state.darkMode.value)

  const dispatch = useDispatch();

  useEffect(()=>{
   
    
    

     if(localStorage.getItem('token'))
     {
      nav('/users')
      dispatch(action.switchAuth(true))
     }
     else{
      dispatch(action.switchAuth(false))
      
     }

   
  },[])
 

  const [loginFormData,setLoginFormData] = useState(
    {
      PhoneNumber:'0123456789',
      Password:'Pa$$w0rd',
      remember:false
    }
  )

const nav = useNavigate()

const [successMsg,setSuccessMsg]=useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null);
const [errorBox,setErrorBox]=useState(false)

  const formSubmitHandler = async (e)=>{
    e.preventDefault();
  
    const ValidateForm=({PhoneNumber,Password})=>{

      if(!PhoneNumber || !Password)
      {
        setErrorBox(true)
        setError('Plz fiil all fields')
        return false
      }
      if(Password.length<6)
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
      let formData = new FormData();
      formData.append('PhoneNumber', loginFormData.PhoneNumber);
      formData.append('Password', loginFormData.Password);
      formData.append('rememberStatus',loginFormData.remember)

      console.log(formData)

     setLoading(true)
     

    axios.post(`${BASE_URL}/Account/login`,formData).then((res)=>{
     
      setSuccessMsg('Login Successfully')
      setLoading(false)
      setError(null)
      setErrorBox(false)
     localStorage.setItem('loginUser', JSON.stringify(res.data))
      localStorage.setItem('token', JSON.stringify(res.data?.token))
     localStorage.setItem('isLoggedIn', JSON.stringify(true))
     
      setTimeout(()=>{
        dispatch(action.switchAuth(true))
        nav('/users')
      },1000)
      
    }).catch(({response})=>{
    
     
       setError(response.data.error ? response.data.error : response.data)
      
        setErrorBox(true)
        
        setLoading(false)
    })
       
   
   
    }

   
    
    }


  return (
   
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'start',p:{xs:'0',sm:8},background:' linear-gradient(178deg,#F4F5F800,#F4F5F8), url(https://cdn.shopify.com/s/files/1/0334/8565/2108/products/Joan_Asp_Serenity_a2f0647c-8883-4897-9623-fa68baffff4d_2048x.jpg?v=1582005160) no-repeat center/cover',height:'100vh',}}>
         
         <Box sx={{py:2,background:'white',width:{xs:'100%',sm:'490px'},height:{xs:'100%',sm:'500px'},borderRadius:{xs:'0',sm:4},}}>


             <img style={{marginLeft:'1rem'}} width='120px' height='75px' src={images[0]} alt="logo"/>

             

            <form onSubmit={formSubmitHandler} sx={{width:'100%'}}>
            
          <Box sx={{display:'flex',flexDirection:'column',paddingY:'2rem',alignItems:'center',gap:'1.5rem'}}>

          
          <SimpleTextField data={loginFormData} setData={setLoginFormData} type={'number'} name={'PhoneNumber'} label={'Phone Number'}/>
     

     <IconTextField data={loginFormData} setData={setLoginFormData} iconName={[<VisibilityOutlined/>,<VisibilityOffOutlined/>]} type={'password'}   name={'Password'} label={'Password'}/>
         <Box sx={{display:'flex',width:'90%',justifyContent:'space-between',alignItems:'center'}}>

         
          <Typography  sx={{cursor:'pointer',color:'#F2956A'}}>Forgot Password</Typography>

          <FormControlLabel  labelPlacement='start'   label="Remember Me"  control={<Checkbox name='remeber' onChange={()=>setLoginFormData({...loginFormData,remember:loginFormData.remember?false:true})} color='secondary'  />} />
         </Box>

       
         <Button   type='submit'  sx={{width:'50%',height:'44px',background:'#F2956A','&:hover':{background:'rgb(242, 159, 106)'}}} variant={loading ? 'disabled':'contained'}>
      Login
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

      <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={successMsg?true:false} autoHideDuration={2000} onClose={()=>setSuccessMsg(null)}>
        <Alert onClose={()=>setErrorBox(false)} severity="success" sx={{ width: '100%' }}>
          {successMsg}
        </Alert>
      </Snackbar>
      <Backdrop
  sx={{ color: '#fff', zIndex:2 }}
  open={loading}
  
>
<CircularProgress color="secondary" />
</Backdrop>
   
    </Box>

  )
}

export default Login