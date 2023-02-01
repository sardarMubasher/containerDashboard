import { Avatar, Box, CircularProgress, } from "@mui/material";

const ProgressCircle = ({value}) => {

  return (
     <Avatar sx={{bgcolor:'secondary.main',position:'relative'}}>
             <CircularProgress sx={{zIndex:2}} variant='determinate' value={value}/>
             <CircularProgress sx={{position:'absolute',color:'white'}} variant='determinate' value={100}/>
   </Avatar>

  );
};

export default ProgressCircle;
