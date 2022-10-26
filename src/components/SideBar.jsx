import { Drawer, ListItem ,Divider,ListItemIcon,ListItemText,Box,ListItemButton,List, Avatar, Typography} from '@mui/material'
import React from 'react'
import {Home,Info,Laptop, PostAdd,Menu,Contacts} from '@mui/icons-material';
import AKK from '../asset/images/akk.jpg'
function SideBar({selected,open,setOpen,handleClickScroll}) {
  return (
    <Drawer anchor="left" open={open} onClose={()=>setOpen(false)}>
        <Box p={1} textAlign='center' sx={{width:"220px"}}>
            <Avatar src={AKK} sx={{margin:"10px auto",width:"80px",height:"80px",cursor:"pointer"}}></Avatar>
            <Typography  variant='h6' sx={{fontWeight:"bold",fontFamily:"atma",marginBottom:".4rem"}}>Mg Kaung</Typography>
            <Divider></Divider>
            <List>
                <ListItem disablePadding  onClick={()=>handleClickScroll("home")}>
                    <ListItemButton selected={selected==="Home"}>
                            <ListItemIcon>
                                    <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                    </ListItemButton>   
                </ListItem>
                <ListItem disablePadding  onClick={()=>handleClickScroll("about")}>
                    <ListItemButton  selected={selected==="about"} >
                            <ListItemIcon>
                                    <Info />
                            </ListItemIcon>
                            <ListItemText primary="About Me" />
                    </ListItemButton>   
                </ListItem>
                <ListItem disablePadding  onClick={()=>handleClickScroll("skills")}>
                    <ListItemButton  selected={selected==="skills"} >
                            <ListItemIcon>
                                    <Laptop />
                            </ListItemIcon>
                            <ListItemText primary="Skills" />
                    </ListItemButton>   
                </ListItem>
                <ListItem disablePadding  onClick={()=>handleClickScroll("projects")}>
                    <ListItemButton  selected={selected==="projects"} >
                            <ListItemIcon>
                                    <PostAdd />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                    </ListItemButton>   
                </ListItem>
                <ListItem disablePadding onClick={()=>handleClickScroll("contact")}> 
                    <ListItemButton  selected={selected==="contact"} >
                             <ListItemIcon>
                                   <Contacts />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                         
                    </ListItemButton>   
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}

export default SideBar