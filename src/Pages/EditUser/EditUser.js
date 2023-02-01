import { Alert, Avatar, Backdrop, Box, Button, Card, CircularProgress, Divider, Fade, FormControl, Grid, IconButton, InputLabel, LinearProgress, MenuItem, Select, Snackbar, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SimpleTextField from '../../Components/TextField/SimpleTextField'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {Add, CameraAlt, Close, FileUpload} from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import FileInput from '../../Components/TextField/FileInput'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Api/ApiConstant'


const EditUser = () => {

  const [loading,setLoading]=useState(true)
  const params = useParams()

  useEffect(() => {
    
    getUsersData()
}, [])


const getUsersData = async () => {
    const token = localStorage.getItem('token')
    const updateToken = token.replaceAll('"', '')
   

    try {
      
        const res = await fetch(`${BASE_URL}/Account/getUsers`, {
            method: 'GET',
            headers: {
                // 'accept': '*/*',
                'content-Type': 'application/json',
                'authorization': `Bearer ${updateToken}`,
            }

        });
        const data = await res?.json();
        if (data?.length >= 0) {
        
        const holder = await data.filter(i=>i.username==params.id)
        setUserData(holder[0])
         setLoading(false)
        } 
   

    } catch (e) {
        console.log(e)

    }
}
 

  const [error,setError]=useState(false)
  const [errorMsg,setErrorMsg]=useState('')
  
  const [userData,setUserData] = useState({})

  const Validate=()=>{
    const {username,Email,PhoneNumber}=userData

    if(!username|| !Email|| PhoneNumber.length<5 )
    {
      setError(true)
      setErrorMsg('Plz fill all fields')
      return false
    }
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    if(specialChars.test(Email)==false)
    {
     setError(true)
     setErrorMsg('Plz Enter a valid email')
     return false;
    }
  }


  const formSubmitHandler= async(e)=>{
    e.preventDefault();
    Validate()
    console.log(userData)
    
  }


  return (
    <>
   {!loading ? 
    <>
    <Box sx={{mx:'auto',px:2,width:{xs:'95%',lg:'90%'}}}>
    <Typography sx={{fontWeight:'600',mb:{xs:2,md:0},fontSize:{xs:'1.5rem',sm:'2rem',md:'3rem'},color:'secondary.text'}} >Edit User</Typography>
    </Box>

   <Box sx={{width:{xs:'95%',lg:'90%'},mx:'auto',color:'secondary.text',display:'flex',flexDirection:{xs:'column',md:'row'},gap:{xs:'4rem',md:0},px:2,minHeight:'100%',alignItems:{xs:'center',md:'flex-start'},pt:{xs:0,md:4}}}>

    
      <Card  elevation={0} sx={{minWidth:{xs:'35%',sm:'40%',lg:'30%'},minHeight:{xs:200,md:450},display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'secondary.bg2',flexDirection:'column',boxShadow:'1px 4px 10px 3px rgb(0,0,0,0.1)',pt:'8px',gap:'1rem',borderRadius:6,color:'secondary.text'}}>
        
           <Avatar sx={{position:'relative',width:{xs:100,md:300},height:{xs:100,md:300},outline:'2px solid',outlineColor:'inherit',color:'secondary.text',backgroundColor:'transparent'}} 
          >
            <img style={{width:'100%'}}  src={userData.imageUrl!='noImage.jpg' ? URL.createObjectURL(userData.imageUrl) : 
           'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg'}/>

             <label id='DriverImageUploader' htmlFor='image'>
              <CameraAlt sx={{color:'white'}} fontSize='medium'/>
           </label>
            
           </Avatar>
          <Typography sx={{width:{xs:'80%',sm:'50%'},textAlign:'center'}}>Allowed *.jpeg, *.jpg, *.png, *.gif
max size of 3.1 MB</Typography>
         <input id='image' style={{display:'none'}} onChange={(e)=>setUserData({...userData,imageUrl
:e.target.files[0]})} accept='image/*' type='file'/>

      
         
         
     </Card>

   
     <form onSubmit={formSubmitHandler} style={{display:'flex',justifyContent:'center'}}>
    <Grid   container spacing={2} sx={{width:{xs:'100%',md:'85%'},boxShadow:'1px 4px 10px 3px rgb(0,0,0,0.1)',minHeight:{xs:400,md:450},py:1,borderRadius:6,color:'secondary.text',backgroundColor:'secondary.bg2',mt:0,justifyContent:'center'}}>
         <Grid  item xs={12}>
           <SimpleTextField width={'95%'}  data={userData} setData={setUserData} type={'text'} name={'username'} label={'Name'}/>
           </Grid>
  <Grid item xs={12}>
  <SimpleTextField width={'95%'}  data={userData} setData={setUserData}  type={'text'} name={'email'} label={'Email'}/>
  </Grid>

  <Grid item xs={12}>
  <SimpleTextField width={'95%'}  data={userData} setData={setUserData}  type={'text'} name={'username'} label={'User Name'}/>
  </Grid>

  <Grid item xs={12}>
  <SimpleTextField width={'95%'}  data={userData} setData={setUserData}  type={'text'} name={'phoneNumber'} label={'Email'}/>
  </Grid>

  
  
  
  








<Grid sx={{display:'flex',justifyContent:'end',alignItems:'start',px:5}} item xs={12}>
<Button color='sepColor' sx={{color:'secondary.bg',borderRadius:6}} type='submit'  variant='contained'>Update</Button>
</Grid>




    </Grid>
  </form>
      

   
  <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={error} autoHideDuration={2000} onClose={()=>setError(false)}>
        <Alert onClose={()=>setError(false)} severity="error" sx={{ width: '100%' }}>
          {errorMsg}
        </Alert>
      </Snackbar>

      {/* <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={successMsg?true:false} autoHideDuration={2000} onClose={()=>setSuccessMsg(null)}>
        <Alert onClose={()=>setError(false)} severity="success" sx={{ width: '100%' }}>
          {successMsg}
        </Alert>
      </Snackbar> */}
      {/* <Backdrop
  sx={{ color: '#fff', zIndex:2 }}
  open={loading}
  
>
<CircularProgress color="inherit" />
</Backdrop> */}
   
   </Box>
   </>:<Box sx={{mx:'auto',px:2,width:{xs:'95%',lg:'90%'},mt:22}}>

<LinearProgress />

</Box>}
   </>
  )
}

export default EditUser