import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Box, IconButton,Divider} from '@mui/material';
import "@fontsource/atma"
import {Home,Info,Laptop, PostAdd,Menu,ContactPage} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import SideBar from './SideBar';
import Scrollspy from 'react-scrollspy';
function Navbar({activeItem,setActiveItem,setOpen,open}) {
  const theme = useTheme();
  return (
    <>
        <AppBar position="fixed" color="primary">
                <Toolbar alignitems="center">
                    <Box sx={{flexGrow:1}}>
                        <Typography  variant='h6' sx={{fontWeight:"bold",fontFamily:"atma"}}>Mg Kaung</Typography>
                    </Box>
                    <Box sx={{display:{xs:"block",lg:"none"}}}>
                        <IconButton sx={{color:"#fff"}} onClick={()=>setOpen(true)}>
                            <Menu />
                        </IconButton>
                    </Box>
                    <Box sx={{display:{xs:"none",lg:"block"}}} className="nav-links">
                    <Scrollspy items={["home","about","skills","projects","contact"]} currentClassName="is-current" style={{display:"flex",color:"#424242"}}>
                            <li style={{marginRight:"1rem"}}>
                                <a href="#home" style={{display:"flex",alignItems:"center"}}><Home sx={{marginRight:".4rem"}} />Home</a>
                            </li>
                          
                            <li style={{marginRight:"1rem"}}>
                                <a href="#about" style={{display:"flex",alignItems:"center"}}><Info sx={{marginRight:".4rem"}}  />About</a>
                            </li>
                            <li style={{marginRight:"1rem"}}>
                                <a href="#skills" style={{display:"flex",alignItems:"center"}}><Laptop sx={{marginRight:".4rem"}}  />Skills</a>
                            </li>
                            <li style={{marginRight:"1rem"}}>
                                 <a href="#projects" style={{display:"flex",alignItems:"center"}}><PostAdd sx={{marginRight:".4rem"}}  />Projects</a>
                            </li>
                            <li style={{marginRight:"1rem"}}>
                                <a href="#contact" style={{display:"flex",alignItems:"center"}}><ContactPage sx={{marginRight:".4rem"}}  />Contact Me</a>
                               
                            </li>
                        </Scrollspy>
                    </Box>
                </Toolbar>
        </AppBar>
        <SideBar open={open} setOpen={setOpen} selected={activeItem} setSelected={setActiveItem}/>
    </>
  )
}

export default Navbar