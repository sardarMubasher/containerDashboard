import { Email, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material'
import { Avatar, Box, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import BarChart from '../../Components/DashboardComponents/BarChart/BarChart'
import GeoChart from '../../Components/DashboardComponents/GeoChart.js/GeoChart'
import ProgressCircle from '../../Components/DashboardComponents/ProgressCircle/ProgressCircle'
import StatBox from '../../Components/DashboardComponents/StatBox/StatBox'
import Stream from '../../Components/DashboardComponents/StreamChart/StreamChart'
import { MockBuyerList } from '../../Data/mockData'

const Dashboard = () => {
  return (
  
         <Box sx={{py:1,mx:'auto',width:'90%'}}>

            <Typography variant='h4' sx={{fontWeight:600,color:'secondary.text'}}>Container Dashboard</Typography>
            <Typography  variant='subtitle1' sx={{color:'secondary.text'}}>Welcome to your Dashboard</Typography>

                 <Grid spacing={2} sx={{mt:2}} container  >

                    <Grid  item xs={12} sm={6} md={3}>
                        <Box sx={{bgcolor:'secondary.main'}}>
                    <StatBox  title="12,361" subtitle="Emails Sent"  progress="75" increase="+14%" 
                    icon={
                            <Email
                                sx={{ color: 'white', fontSize: "26px" }}
                            />
                        }
                    />
                    </Box>
                    </Grid>
                    
                    <Grid  item xs={12} sm={6} md={3}>
                        <Box sx={{bgcolor:'secondary.main'}}>
                    <StatBox  title="937,1412" subtitle="Sales Obtained"  progress="90" increase="+23%" 
                    icon={
                            <PointOfSale
                                sx={{ color: 'white', fontSize: "26px" }}
                            />
                        }
                    />
                    </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{bgcolor:'secondary.main'}}>
                    <StatBox  title="361" subtitle="New Clients"  progress="19" increase="+0.5%" 
                    icon={
                            <PersonAdd
                                sx={{ color: 'white', fontSize: "26px" }}
                            />
                        }
                    />
                    </Box>
                    </Grid>
                    
                    <Grid  item xs={12} sm={6} md={3}>
                        <Box sx={{bgcolor:'secondary.main'}}>
                    <StatBox  title="2,361" subtitle="Traffic Recieved"  progress="33" increase="+3%" 
                    icon={
                            <Traffic
                                sx={{ color: 'white', fontSize: "26px" }}
                            />
                        }
                    />
                    </Box>
                    </Grid>

                 </Grid>

                  <Grid container spacing={2}>

                    <Grid item xs={12} md={8} mt={2}>
                        <Box sx={{bgcolor:'secondary.main',height:400,width:'100%'}}>
                            <Stream/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} mt={2}>
                        <Box sx={{bgcolor:'secondary.main',height:400,overflow:'auto',width:'100%'}}>
                           {
                            MockBuyerList.map((i,a)=>{
                                return(
                                    <Box key={a} sx={{borderBottom:'1px solid white',display:'flex',justifyContent:'space-between',p:2}}>
                                        <Typography sx={{color:'secondary.text'}}>{i.name}</Typography>
                                        <Typography sx={{color:'white'}}>{i.price}</Typography>
                                    </Box>
                                )
                            })
                           }
                        </Box>
                    </Grid>

                  </Grid>

 <Grid container spacing={2}>


 <Grid item xs={12} md={4} mt={2}>
    <Box sx={{bgcolor:'secondary.main',px:2,py:1,height:300,width:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

        <Typography sx={{color:'secondary.text'}}>Campigns</Typography>

    <Avatar sx={{bgcolor:'secondary.main',alignSelf:'center',position:'relative',width:150,height:150}}>
             <CircularProgress size={150} sx={{zIndex:2,width:'100%'}} variant='determinate' value={35}/>
             <CircularProgress size={150} sx={{position:'absolute',color:'white'}} variant='determinate' value={100}/>
   </Avatar>
   <Typography sx={{textAlign:'center',color:'secondary.text',mx:'auto',width:'60%'}}>$48,352 revenue generated
Includes extra misc expenditures and costs</Typography>
    </Box>
</Grid>
<Grid item xs={12} md={4} mt={2}>
    <Box sx={{bgcolor:'secondary.main',height:300,width:'100%'}}>
       <BarChart/>
    </Box>
</Grid>

<Grid item xs={12} md={4} mt={2}>
    <Box sx={{bgcolor:'secondary.main',height:300,width:'100%'}}>
      <GeoChart/>
    </Box>
</Grid>

</Grid>
         </Box>
       
  )
}

export default Dashboard