import  React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { BASE_URL } from '../../Api/ApiConstant';
import { Box } from '@mui/system';
import Header from '../../Components/Header/Header';
import { Avatar, Button, CircularProgress, IconButton, LinearProgress, Menu, MenuItem, Modal, Typography } from '@mui/material';
import {Delete, Edit, MoreVert} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';


export default function DataTable() {

    const [userList,setUserList] = useState([])
    const [loading,setLoading] = useState(true)
    const [DeleteBox,setDeleteBox]=useState(false)
    const nav = useNavigate()
  
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
             
              await setUserList(data)
          
              setLoading(false)
              
            } 
       

        } catch (e) {
            console.log(e)

        }
    }

    const columns = [
      {field: "id", headerName: "ID", flex: 1},

      {field: "imageUrl", headerName: "Image",flex:.3,
      renderCell: (params) => {
          
          return (
            <>
              {params.row.imageUrl[0]=='n' ? 
            <Avatar src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'/>:
            <Avatar src={params.row.imageUrl}/>
            }
              
            </>
          );
        },
        sortable:false,
        disableColumnMenu:true,
        

  },
      {
          field: "username",
          headerName: "Username",
          flex: 1,
      },
      {
          field: "email",
          headerName: "Email",
          flex: 1,
      },
      {
        field: "phoneNumber",
        headerName: "Phone Nuber",
        flex: 1,
    },
      {
         
          field:'roles',
          headerName: "Role",
          renderCell: (field) => {
            const data = field.row.roles
              return (
               
                 <span>{Object.values(data)[0]}</span>
               
              );
       
      },
      sortable:false,
      disableColumnMenu:true,
      
  },
  {
    headerClassName: 'lastcolumnSeparator',
    sortable:false,
    disableColumnMenu:true,
   flex:.2,
    renderCell: (field) => {
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      
        return (
          <>
 <IconButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <MoreVert/>
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={()=>{handleClose();nav(`/EditUser/${field.row.username}`)}}><Edit sx={{mr:1}} fontSize='small'/> Edit</MenuItem>
        <MenuItem onClick={()=>{handleClose();setDeleteBox(true)}}><Delete sx={{mr:1}} fontSize='small' color='error'/> Delete</MenuItem>
      
      </Menu>
    
            
    </>
        );
 
}
  }

           
  ];


  return (
    <Box sx={{width:'100%',px:'16px',height:'60vh'}}>



        <Box sx={{width:1200,height:'500px',mx:'auto',mt:1,color:'secondary.text',
         "& .MuiDataGrid-root": {
            border: "none",
            color:'secondary.text'
        },
        "& .MuiDataGrid-cell": {
            borderBottom: "secondary.text",

        },
        "& .name-column--cell": {
            color: 'secondary.text',
        },
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: 'secondary.main',
            borderBottom: "none",
            borderRadius:'22px 22px 0 0',
        },
        "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "transparent",
            
        },
        "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: 'transparent',
        },
        "& .MuiCheckbox-root": {
            color: 'secondary.text',
            
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color:'secondary.text',
        },
       
          '& .MuiSvgIcon-root':{
            color:'secondary.text',
          },
          '& .MuiTablePagination-displayedRows':
          {
            color:'secondary.text',

          },
          '.MuiDataGrid-columnSeparator': {
           color:'secondary.text !important'
          },
          '.lastcolumnSeparator .MuiDataGrid-columnSeparator--sideRight' :{
            display: 'none !important'
          }
          }}>

            <Header title={'Users'} subtitle={'Users List'}/>

      {
        !loading ?   <DataGrid  sx={{borderRadius:'22px',color:'secondary.text',boxShadow:'1px 4px 10px 3px rgb(0,0,0,0.2)', '& .MuiDataGrid-row:hover': {
          backgroundColor: 'secondary.hov',
        },}}
        rows={userList}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[6]}
        checkboxSelection
        autoHeight
        
        getRowId={userList.id}
        
       
        
      />:<Box>

               <LinearProgress />

      </Box>
      }
        </Box>

  <Modal open={DeleteBox}>
    <Box sx={{backgroundColor:'white', position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{xs:'80%',sm:'60%',md:'30%'},
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,}}>

<Typography>Are you sure want to delete this user</Typography>
<Box sx={{display:'flex',justifyContent:'end',gap:'1rem',mt:3}}>

<Button onClick={()=>setDeleteBox(false)} variant='contained' color='primary'>No</Button>
<Button onClick={()=>setDeleteBox(false)} variant='contained' color='error'>Delete</Button>

</Box>

    </Box>
  </Modal>
      
      
   
    </Box>
  );
}