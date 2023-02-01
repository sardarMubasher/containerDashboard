import { Box, Typography } from "@mui/material";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',overflow:'hidden',height:{xs:180,sm:210,md:255,lg:180},alignItems:'center',px:3,py:4}}>
       
        <Box sx={{display:'flex',flexDirection:'column'}}>
        {icon}
           <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: 'secondary.text',}}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: 'white' }}>
        {subtitle}
       </Typography>

        </Box>
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <ProgressCircle value={progress} />
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: 'white' }}
        >
          {increase}
        </Typography>
        </Box>



    </Box>
   
  );
};

export default StatBox;
