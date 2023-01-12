import {ContactsOutlined
    ,Menu,Add,Business,Flare,ExpandLess,
    DirectionsCar,Home,KeyboardDoubleArrowRight,
    SettingsInputSvideo,Details,OpenInNew,
    LayersClear,
    ChevronRight,
    ChevronLeft,
    Person,
    WarningOutlined,
    HourglassEmpty,
    ErrorOutline,
    ExpandMoreOutlined,
    PieChartOutlineOutlined,
    BarChartOutlined,
  } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export const SidebarIconList = [
   [ {
         name:'Arrival',
         icon:<Flare sx={{color:'white'}}/>
    },
    {
        name:'Dashboard',
        icon:<Home  sx={{color:'white'}}/>
   },
   {
    name:'users',
    icon:<Person sx={{color:'white'}}/>
   },
   {
   name:'Driver Registration',
   icon:<DirectionsCar sx={{color:'white'}}/>
   },
   {
    name:'Tracking',
    icon:<LayersClear sx={{color:'white'}}/>
   },
   {
   name:'Analysis',
   icon:<HourglassEmpty sx={{color:'white'}}/>
   }],
   [
    {
        name:'Reports',
        icon:<WarningOutlined sx={{color:'white'}}/>
       
    },
    {
        name:'Deviations',
        icon:<ContactsOutlined sx={{color:'white'}}/>
    },
    {
        name:'Bugs',
        icon:<ErrorOutline sx={{color:'white'}}/>
    

    }
   ],
   [
    {
       name:'Cargo',
       icon:<Business sx={{color:'white'}}/>

    },
    {
        name:'Urban',
        icon:<BarChartOutlined sx={{color:'white'}}/>
 
     },
     {
        name:'Settings',
        icon:<PieChartOutlineOutlined sx={{color:'white'}}/>
     }
   ]

]