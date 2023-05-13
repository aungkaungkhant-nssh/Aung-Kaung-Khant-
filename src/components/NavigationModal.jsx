import React from 'react'
import {Modal,Paper,Fade,Typography,Box,IconButton, Divider,Link} from "@mui/material"
import {Close as CloseIcon} from "@mui/icons-material"
const style = {
    position: 'absolute',
    top: '5%',
    left: '5%',
    right:"5%",
    width: "90%",
    bgcolor: 'appbar.background',
    border: '2px solid app.background',
    boxShadow: 24,
    p: 4,
    borderRadius:"10px",
    outline:"none"
  };
function NavigationModal({open,setOpen,activeItem,theme,setActiveItem}) {
 
  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={()=>setOpen(false)}
    sx={{backgroundColor:"#00000100"}}
    >
         <Fade in={open}>
            <Paper sx={style} elevation={6}>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <Typography variant="body1" color="appbar.color">Navigation</Typography>
                    <IconButton onClick={()=>setOpen(false)}>
                          <CloseIcon  />
                    </IconButton>
                </Box>
                
                <Box sx={{marginTop:"1.5rem"}}>
                    {
                        ["Home","About","Skills","Projects","Contact"].map((d,i,arr)=>(
                          <>
                               <Link 
                                  href={`#${arr[i]}`}
                                  onClick={()=>{
                                    setActiveItem(d)
                                    setOpen(false)
                                  }}
                                  key={i}
                                  sx={{
                                    textDecoration:"none",
                                    fontSize:"15px",
                                    marginTop:"1rem",
                                    color:activeItem == arr[i] ? theme.palette.primary.main : "appbar.color" ,cursor:"pointer"}}>
                                  {d}
                              </Link>
                              <Divider sx={{marginY:"10px"}} />
                          </>
                         
                        ))
                    }
                </Box>
            </Paper>
        </Fade>

    </Modal>
  )
}

export default NavigationModal