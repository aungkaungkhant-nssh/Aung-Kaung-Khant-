import React, { useState } from 'react'
import {Box,Grid,Typography,Stack,TextField, Button, Paper} from '@mui/material'
import {Phone,GitHub,Email,LinkedIn,Send,Home as HomeIcon} from '@mui/icons-material'
import MotionContainer from './MotionContainer'
import {motion} from 'framer-motion'
import { logoAnimate, textAnimate } from '../config/animate'
function ContactMe({theme}) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("")
  return (
    <Box data-section id="Contact" sx={{height:"100vh",marginBottom:"10rem",padding:"1rem",scrollMarginTop:{xs:"9rem",md:"7rem"}}}>
         <Box sx={{width:"150px",margin:"0 auto 1rem auto",borderBottom:"2px solid #7986cb",padding:".5rem"}}>
            <Typography variant='h6' textAlign="center" fontWeight="bolder">Contact Me</Typography>
        </Box>
        <Box sx={{margin:"2rem 0"}}>
            <Typography variant='h5' gutterBottom  textAlign="center" color="primary" fontWeight="bolder">Have You any Question?</Typography>
            <Typography variant='body1'  textAlign="center" sx={{color:"#7986cb"}}>I'm AT YOUR SERVICE</Typography>
        </Box>
        <Box  sx={{width:"90%",margin:"4rem auto"}}>
            <MotionContainer>
                <Box sx={{display:"flex",flexDirection:{md:"row",xs:"column"},alignItems:"center",justifyContent:"space-between"}}>
                    <Box sx={{marginBottom:{xs:"1.8rem"}}}>
                        <motion.div variants={logoAnimate(0,1)} >
                            <Paper sx={{cursor:"pointer",transition:"all .3s","&:hover":{transform:"translateY(-10px)"},marginBottom:{xs:"1.8rem"},backgroundColor:"appbar.background",width:"170px",padding:"10px 0",borderRadius:"15px"}} elevation={theme.palette.mode==="light" ? 1 : 5}>
                                <Stack  alignItems="center" justifyContent="center">
                                    <Phone color="primary" sx={{marginBottom:".5rem"}}  />
                                    <Typography variant="body2" fontWeight="bolder" gutterBottom>Call Us On</Typography>
                                    <Typography variant="body2" sx={{color:"#52525b"}}>09261804445</Typography>
                                </Stack>
                            </Paper>
                        </motion.div>
                    </Box>
                    <Box sx={{marginBottom:{xs:"1.8rem"}}}>
                        <motion.div variants={logoAnimate(0,1)}>
                            <Paper sx={{cursor:"pointer",transition:"all .3s","&:hover":{transform:"translateY(-10px)"},marginBottom:{xs:"1.8rem"},backgroundColor:"appbar.background",width:"170px",padding:"10px 0",borderRadius:"15px"}} elevation={theme.palette.mode==="light" ? 1 : 5}>
                                <Stack alignItems="center" justifyContent="center" >
                                    <GitHub color="primary"  sx={{marginBottom:".5rem"}}/>
                                    <Typography variant="body2" fontWeight="bolder" gutterBottom>Git Hub</Typography>
                                    <a href="https://github.com/aungkaungkhant-nssh" style={{fontSize:"0.875rem",color:"#52525b"}}>aungkaungkhant-nssh</a>
                                </Stack>
                            </Paper>
                        </motion.div>   
                    </Box>    
                    
                    <Box sx={{marginBottom:{xs:"1.8rem"}}}>
                        <motion.div variants={logoAnimate(0,1)}>
                            <Paper sx={{cursor:"pointer",transition:"all .3s","&:hover":{transform:"translateY(-10px)"},marginBottom:{xs:"1.8rem"},backgroundColor:"appbar.background",width:"170px",padding:"10px 0",borderRadius:"15px"}} elevation={theme.palette.mode==="light" ? 1 : 5}>
                                <Stack alignItems="center" justifyContent="center"  >
                                    <Email color="primary" sx={{marginBottom:".5rem"}} />
                                    <Typography variant="body2" fontWeight="bolder" gutterBottom>Email</Typography>
                                    <Typography variant="body2" sx={{color:"#52525b"}}>akkgit0909@gmail.com</Typography>
                                </Stack>
                            </Paper>
                        </motion.div>
                    </Box>
                    
                    <Box sx={{marginBottom:{xs:"1.8rem"}}}>
                        <motion.div variants={logoAnimate(0,1)}>
                            <Paper  sx={{cursor:"pointer",transition:"all .3s","&:hover":{transform:"translateY(-10px)"},marginBottom:{xs:"1.8rem"},backgroundColor:"appbar.background",width:"170px",padding:"10px 0",borderRadius:"15px"}} elevation={theme.palette.mode==="light" ? 1 : 5}>
                                <Stack alignItems="center" justifyContent="center" >
                                    <LinkedIn color="primary"  sx={{marginBottom:".5rem"}}/>
                                    <Typography variant="body2" fontWeight="bolder" gutterBottom>Linked In</Typography>
                                    <Typography variant="body2" sx={{color:"#52525b"}}>Aung Kaung Khant</Typography>
                                </Stack>
                            </Paper>
                        </motion.div>
                    </Box>
                 
                </Box>
             
            </MotionContainer>
           
        </Box>
        <Box sx={{margin:"2rem 0"}}>
            <Typography variant='h5' gutterBottom  textAlign="center" color="primary" fontWeight="bolder">Send Me And EMAIL</Typography>
            <Typography variant='body1'  textAlign="center" >I'M VERY RESPONSIVE TO MESSAGE</Typography>
        </Box>
        <Box sx={{width:"90%",maxWidth:"500px",margin:"3rem auto"}}>
            <MotionContainer>
                <motion.div variants={textAnimate()}>
                    <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={6} >
                                <Stack alignItems="center" justifyContent="center">
                                    <TextField
                                    id="outlined-name"
                                    label="Name"
                                    fullWidth
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack alignItems="center" justifyContent="center">
                                    <TextField
                                    id="outlined-name"
                                    label="Email"
                                    fullWidth
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack alignItems="center" justifyContent="center">
                                    <TextField
                                    id="outlined-name"
                                    label="Subject"
                                    fullWidth
                                    value={subject}
                                    onChange={(e)=>setSubject(e.target.value)}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack alignItems="center" justifyContent="center">
                                    <TextField
                                        label="Message"
                                        multiline
                                        rows={3}
                                        fullWidth
                                        value={message}
                                        onChange={(e)=>setMessage(e.target.value)}
                                    />
                                </Stack>
                            </Grid>
                    </Grid>
                    <Button variant='outlined' fullWidth sx={{margin:"1rem 0rem",borderRadius:"15px"}} endIcon={<Send />}
                    onClick={()=>{
                        if(name && email && subject && message)alert("Email send success fully")
                        else alert("Please fill your informaion")
                    }}
                    >Send Message</Button>
            </motion.div>
            </MotionContainer>
        </Box>
    </Box>
  )
}

export default ContactMe