import {Box, Typography, useTheme} from "@mui/material";


const Header = ({title, subtitle}) => {
    
    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={'secondary.text'}
                fontWeight="bold"
                sx={{m: "0 0 5px 0"}}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={'secondary.text'} sx={{m: "0 0 10px 0"}}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
