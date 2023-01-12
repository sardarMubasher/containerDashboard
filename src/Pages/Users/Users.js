import  React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { BASE_URL } from '../../Api/ApiConstant';
import { Box } from '@mui/system';
import Header from '../../Components/Header/Header';
import { Avatar, Button, CircularProgress, IconButton, LinearProgress, Menu, MenuItem, Modal, Typography } from '@mui/material';
import {MoreVert} from '@mui/icons-material'


export default function DataTable() {

    const [userList,setUserList] = useState([])
    const [loading,setLoading] = useState(true)
    const [DeleteBox,setDeleteBox]=useState(false)
  
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

      {field: "imageUrl", headerName: "Image",
      renderCell: (params) => {
          
          return (
            <>
              {params.row.imageUrl[0]=='n' ? 
            <Avatar src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'/>:
            <Avatar src={params.row.imageUrl}/>
            }
              
            </>
          );
        }

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
      
          field:'roles',
          headerName: "Role",
          renderCell: (field) => {
            const data = field.row.roles
              return (
               
                 <span>{Object.values(data)[0]}</span>
               
              );
       
      }
  },
  {
    
   
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
        <MenuItem onClick={()=>{handleClose();console.log(field.row)}}>Edit</MenuItem>
        <MenuItem onClick={()=>{handleClose();setDeleteBox(true)}}>Delete</MenuItem>
      
      </Menu>
    
            
    </>
        );
 
}
  }

           
  ];


  return (
    <Box sx={{width:'100%',px:'16px',height:'60vh'}}>



        <Box sx={{width:1200,height:'500px',mx:'auto',mt:2,color:'secondary.text',
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

          }
          }}>

            <Header title={'User'} subtitle={'Users List'}/>

      {
        !loading ?   <DataGrid  sx={{color:'secondary.text',boxShadow:'1px 4px 10px 3px rgb(0,0,0,0.2)', '& .MuiDataGrid-row:hover': {
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
  width: '50%',
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