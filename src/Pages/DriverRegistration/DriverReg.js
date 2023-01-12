import { Alert, Avatar, Backdrop, Box, Button, Card, CircularProgress, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SimpleTextField from '../../Components/TextField/SimpleTextField'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {Add, CameraAlt, Close, FileUpload} from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import FileInput from '../../Components/TextField/FileInput'


const DriverReg = () => {


 
  const [driverType,setDriverType]= useState('Saudi')

  const [error,setError]=useState(false)
  const [errorMsg,setErrorMsg]=useState('')
  
  const [DriverData,setDriverData] = useState(
    {
      FirstName:'',
      LastName:'',
      Email:'',
      PhoneNumber:'',
      Gender:'',
      Age:' ',
      image:null,
      CarLisenceId:'',
      CarLisenceImage:'',
      CarLisenceEndDate:'',
      DriverLisenceId:'',
      DriverLisenceImage:'',
      DriverLisenceEndDate:'',
      IdentityNumber:'',
      IdentityImage:'',
      IqamaImage:''

    }
  )

  const Validate=()=>{
    const {FirstName,LastName,Email,PhoneNumber,Gender,Age,image}=DriverData

    if(!FirstName|| !LastName|| !Email|| PhoneNumber.length<5 || !Gender|| !Age )
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

  const removeItem = async (a)=>{
    const data = files.filter((i)=>{ return i!=a})
    setFiles(data)
   
  }
  const takeFiles = (e)=>{
     const data = [];
    Array.from(e.target.files).map(i=> data.push(i))
    data.map(i=>setFiles([...files,...data]))
    
  }
  const formSubmitHandler= async(e)=>{
    e.preventDefault();
    Validate()
    console.log(DriverData)
    
  }


  return (
   <Box sx={{width:{xs:'95%',lg:'90%'},mx:'auto',color:'secondary.text',display:'flex',flexDirection:{xs:'column',md:'row'},gap:'4rem',px:2,minHeight:'100%',alignItems:{xs:'center',md:'flex-start'},pt:{xs:0,md:4}}}>

    
      <Card  elevation={3} sx={{minWidth:{xs:'40%',sm:'40%',lg:'30%'},height:{xs:150,md:350,lg:400},display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'secondary.bg2',flexDirection:'column',pt:'8px',gap:'1rem',borderRadius:2}}>
           
           <Avatar sx={{width:{xs:100,lg:200},height:{xs:100,lg:200},border:'2px solid',borderColor:'secondary.text'}} 
           src={DriverData.image ? URL.createObjectURL(DriverData.image) : 
           'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg'}/>
      
           <label style={{cursor:'pointer'}} htmlFor='image'>
              <CameraAlt sx={{color:'secondary.text'}} fontSize='medium'/>
           </label>
         <input id='image' style={{display:'none'}} onChange={(e)=>setDriverData({...DriverData,image:e.target.files[0]})} accept='image/*' type='file'/>
         
     </Card>


         
   
     <form onSubmit={formSubmitHandler} style={{display:'flex',justifyContent:'center'}}>
    <Grid  container spacing={2} sx={{minWidth:'70%',boxShadow:'1px 4px 10px 3px rgb(0,0,0,0.1)',minHeight:{xs:700,md:700},py:3,borderRadius:3,color:'secondary.text',backgroundColor:'secondary.bg2',mt:{xs:0,md:0}}}>

      <Grid  sx={{display:'flex',mb:1,justifyContent:'center',gap:'1rem'}} item xs={11.4}>
       
      <Card onClick={()=>setDriverType('Saudi')} elevation={4} sx={{cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',width:'30%',borderRadius:'4px',height:'45px',bgcolor:driverType=='Saudi'?'secondary.main2':'inherit'}}>
        <Typography sx={{textAlign:'center',margin:'0',color:driverType=='Saudi'?'var(--textColor)':'secondary.text'}}>Saudi</Typography>
        </Card>

        <Card onClick={()=>setDriverType('Foreigner')} elevation={4} sx={{cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',width:'30%',borderRadius:'4px',height:'45px',bgcolor:driverType!='Saudi'?'secondary.main2':'inherit'}}>
        <Typography sx={{textAlign:'center',margin:'0',color:driverType!='Saudi'?'var(--textColor)':'secondary.text'}}>Foreigner</Typography>
        </Card>
        
      </Grid>

         <Grid item xs={12} sm={4}>
           <SimpleTextField  data={DriverData} setData={setDriverData} type={'text'} name={'FirstName'} label={'First Name'}/>
           </Grid>


           <Grid item xs={12} sm={4}>
  <SimpleTextField data={DriverData} setData={setDriverData}  type={'text'} name={'LastName'} label={'Last Name'}/>
  </Grid>


  <Grid item xs={12} sm={4}>
  <SimpleTextField  data={DriverData} setData={setDriverData}  type={'text'} name={'Email'} label={'Email'}/>
  </Grid>
  
  
  <Grid item xs={12} sm={4}>
    <FormControl sx={{width:'90%'}}>
  <InputLabel color='sepColor'  sx={{color:'secondary.text',opacity:'.7'}}

id="demo-simple-select-label">Gender</InputLabel>
  <Select onChange={(e)=> setDriverData({...DriverData,Gender:e.target.value})}
    value={DriverData.Gender}
    label="Gender"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    sx={{
      color: "secondary.text",
    
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'secondary.text2',
        
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'secondary.main2',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'secondary.main2',
      },
      '.MuiSvgIcon-root ': {
        color: "secondary.text",
      },
      borderRadius:'8px'
   
    }}
  >
    <MenuItem value={'male'}>Male</MenuItem>
    <MenuItem value={'female'}>Female</MenuItem>
  </Select>
  </FormControl>
  </Grid>

  <Grid item xs={12} sm={4}>
  <SimpleTextField data={DriverData} setData={setDriverData}  type={'date'} name={'Age'} label={'Age'}/>
  </Grid>

  <Grid item xs={12} sm={4}>

<PhoneInput inputStyle={{backgroundColor:'inherit',color:'inherit',height:'55px',width:'90%',}}
 buttonStyle={{backgroundColor:'inherit',}}
 dropdownStyle={{color:'black'}}
  country={'us'}
  onChange={(e)=>setDriverData({...DriverData,PhoneNumber:e})}
 
/>
</Grid>


{/* Lisence Car details */}

<Grid sx={{mb:-2}} item xs={12}>
<Typography sx={{fontWeight:'600'}}>Car Lisence</Typography>
</Grid>
  <Grid item xs={12} sm={4}>
  <Typography>Id</Typography>

  <SimpleTextField data={DriverData} setData={setDriverData}  type={'text'} name={'CarLisenceId'} label={''}/>
  </Grid>
 

  <Grid item xs={12} sm={4}>
  <Typography>Image</Typography>
  <FileInput data={DriverData} setData={setDriverData}  type={'file'} name={'CarLisenceImage'} label={''}/>
  </Grid>

  <Grid item xs={12} sm={4}>
  <Typography> End date</Typography>
  <SimpleTextField data={DriverData} setData={setDriverData}  type={'date'} name={'CarLisenceEndDate'} label={''}/>
  </Grid>

{/* Lisence Driver details */}


  <Grid sx={{mb:-2}} item xs={12}>
<Typography  sx={{fontWeight:'600'}}>Driver Lisence</Typography>
</Grid>
  <Grid item xs={12} sm={4}>
  <Typography>Id</Typography>

  <SimpleTextField data={DriverData} setData={setDriverData}  type={'text'} name={'DriverLisenceId'} label={''}/>
  </Grid>
 

  <Grid item xs={12} sm={4}>
  <Typography>Image</Typography>
  <FileInput data={DriverData} setData={setDriverData}  type={'file'} name={'DriverLisenceImage'} label={''}/>
  
  </Grid>

  <Grid sx={{mb:2}} item xs={12} sm={4}>
  <Typography> End date</Typography>
  <SimpleTextField data={DriverData} setData={setDriverData}  type={'date'} name={'DriverLisenceEndDate'} label={''}/>
  </Grid>

  {/*Driver Based Info*/}

 {
  driverType=='Saudi' ?
 <>
  <Grid item xs={12} sm={4}>
  <Typography>Id Number</Typography>

  <SimpleTextField data={DriverData} setData={setDriverData}  type={'text'} name={'IdentityNumber'} label={''}/>
  </Grid>
 

  <Grid item xs={12} sm={4}>
  <Typography>Id Image</Typography>
  <FileInput data={DriverData} setData={setDriverData}  type={'file'} name={'IdentityImage'} label={''}/>
  </Grid>
  </>
  : <Grid item xs={12} sm={4}>
  <Typography>Iqama Image</Typography>
  <FileInput data={DriverData} setData={setDriverData}  type={'file'} name={'IqamaImage'} label={''}/>
  </Grid>}







<Grid sx={{display:'flex',justifyContent:'end',alignItems:'start',px:5}} item xs={12}>
<Button color='sepColor' sx={{color:'secondary.bg'}} type='submit'  variant='contained'>Register</Button>
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
  )
}

export default DriverReg