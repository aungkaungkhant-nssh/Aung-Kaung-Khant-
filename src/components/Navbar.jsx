import React, { useContext, useState } from 'react'
import {AppBar, Toolbar, Typography,Box,Avatar, Paper,FormControlLabel,Link} from '@mui/material';

import MgKaung from '../asset/images/akk.jpg'
import { ColorModeContext } from '../ThemedApp';
import MaterialUISwitch from './MaterialUiSwitch';
import {
  Menu as MenuIcon,
  KeyboardArrowDownOutlined as  KeyboardArrowDownOutlinedIcon 
} from "@mui/icons-material"
import NavigationModal from './NavigationModal';

function Navbar({activeItem,setActiveItem,theme}) {
  let colorMode = useContext(ColorModeContext);
  const [open,setOpen] = useState(false)
  
  return (
    <>
        <AppBar position="sticky" elevation={0} sx={{bgcolor:"appbar.background",padding:{xs:"20px 15px",md:"10px 90px"}}}>
                <Toolbar alignitems="center" sx={{justifyContent:"space-between",padding:"0px"}}>
                    <Box>
                      <Avatar src={MgKaung} sx={{width:60,height:60,cursor:"pointer"}} />
                    </Box>
                    
                    <Paper sx={{display:{xs:"none",lg:"block",border:".5px solid appbar.background",padding:"10px 25px",borderRadius:"20px",color:"red"}}} className="nav-links" elevation={theme.palette.mode==="light" ? 1 : 5}>
                      {
                        ["Home","About","Skills","Projects","Contact"].map((d,i,arr)=>(
                          <Link 
                          href={`#${arr[i]}`}
                          onClick={()=>setActiveItem(arr[i])}
                          key={i}
                           sx={{
                            textDecoration:"none",
                            color:activeItem == arr[i] ? theme.palette.primary.main : "appbar.color",marginRight:arr.length-1 !== i && "40px" ,cursor:"pointer"}}>
                           {d}
                          </Link>
                        ))
                      }
                    
                  
                      
                    </Paper>
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <Paper sx={{display:{xs:"flex",lg:"none"},alignItems:"center",justifyContent:"space-between",marginRight:"10px",border:".5px solid appbar.background",padding:"10px 20px",borderRadius:"20px"}} elevation={theme.palette.mode==="light" ? 2 : 5} 
                        onClick={(e)=>setOpen(true)}>
                              <Typography variant="body2" component="span" color="appbar.color">
                                Menu
                              </Typography>
                              <KeyboardArrowDownOutlinedIcon 
                              />

                        </Paper>
                        <FormControlLabel
                            
                             sx={{margin:"0px"}}
                              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                              onChange={colorMode.toggleColorMode}
                        />
                    </Box>
                   
                  
                </Toolbar>
        </AppBar>
        {
            open && (
              <NavigationModal open={open} setOpen={setOpen} activeItem={activeItem}  setActiveItem={setActiveItem} theme={theme} />
            )
         }
        {/* <SideBar open={open} setOpen={setOpen} selected={activeItem} setSelected={setActiveItem}/> */}
    </>
  )
}

export default Navbar