import React from 'react'
import {Box,Paper,Typography} from '@mui/material'
import HTML from '../asset/images/html.png'
import CSS3 from '../asset/images/css3.png'
import Javascript from '../asset/images/javascript.png'
import Vue from '../asset/images/vuejs.png'
import BootStrap from '../asset/images/bootstrap.png'
import ReactIcon from '../asset/images/react.png'
import Redux from '../asset/images/reduxx.png'
import Python from '../asset/images/python.png'
import Django from '../asset/images/django.png'
import NodeJs from '../asset/images/nodejs.png'
import MySql from '../asset/images/mysql.png'
import MongoDb from '../asset/images/mongodb.png'
import Firebase from '../asset/images/firebase.png'
import Mui from '../asset/images/mui.png'
import {  logoAnimate} from '../config/animate'
import MotionContainer from './MotionContainer'
import {motion} from 'framer-motion'
function Skills({theme}) {
  return (
    <Box data-section id="Skills" sx={{marginBottom:"3rem",padding:"1rem",scrollMarginTop:{xs:"9rem",md:"6rem"}}}  >
         
              <Box sx={{width:"100%",marginTop:"1rem",marginLeft:{md:"40px"}}}>
                <MotionContainer>
                    <Box sx={{marginBottom:"2rem"}}>
                        <Typography  variant="h5"   sx={{fontWeight:"bolder",letterSpacing:"3px",marginBottom:"1.2rem"}}>
                            FrontEnd Skills
                        </Typography>
                        <Paper sx={{backgroundColor:"appbar.background",width:"100%",padding:"18px 10px 6px 10px",borderRadius:"20px"}} elevation={theme.palette.mode==="light" ? 1 : 5} >
                            <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"center",justifyContent:"space-around"}}>
                             
                                    <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                           <motion.div variants={logoAnimate()}> 
                                                <Box sx={{display:"flex",justifyContent:"center"}}>
                                                        <img src={HTML} alt=""  />  
                                                </Box>  
                                                <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>HTML</Typography>
                                           </motion.div>
                                    </Box>
                             
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                        <motion.div variants={logoAnimate()}> 
                                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                                <img src={CSS3} alt="" /> 
                                            </Box>
                                            <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>CSS</Typography>
                                        </motion.div> 
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                        <motion.div variants={logoAnimate()}> 
                                                <Box sx={{display:"flex",justifyContent:"center"}}>
                                                        <img src={Javascript} alt="" /> 
                                                </Box>
                                                <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>JS</Typography>
                                        </motion.div>
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                        <motion.div variants={logoAnimate()}> 
                                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                                <img src={BootStrap} alt="" /> 
                                            </Box>
                                            <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>BootStrap</Typography>
                                        </motion.div>
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                        <motion.div variants={logoAnimate()}>
                                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                                <img src={Vue} alt="" /> 
                                            </Box>
                                            <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>Vue</Typography>
                                        </motion.div>
                                       
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                        <motion.div variants={logoAnimate()}>
                                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                                        <img src={ReactIcon} alt="" style={{width:"35px",height:"35px"}}/> 
                                            </Box>
                                            <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}} >React</Typography>
                                        </motion.div>
                                     
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                        <motion.div variants={logoAnimate()}>
                                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                                <img src={Mui} alt="" style={{width:"35px",height:"35px"}} /> 
                                            </Box>
                                            <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>MUI</Typography>
                                        </motion.div>
                                       
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                     <motion.div variants={logoAnimate()}>   
                                         <Box sx={{display:"flex",justifyContent:"center"}}>
                                            <img src={Redux} alt="" style={{width:"35px",height:"35px"}} /> 
                                          </Box>
                                          <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>Redux</Typography>
                                     </motion.div>
                                </Box>
                            </Box>
                        
                        </Paper>
                    </Box>
                </MotionContainer>
                <MotionContainer> 
                    <Box sx={{marginBottom:"2rem"}}>
                        <Typography  variant="h5" sx={{fontWeight:"bolder",letterSpacing:"3px",marginBottom:"1.2rem"}}>
                            Backend Skills
                        </Typography>
                        <Paper sx={{backgroundColor:"appbar.background",width:"100%",padding:"18px 10px 6px 10px",borderRadius:"20px"}} elevation={theme.palette.mode==="light" ? 1 : 5}>
                            <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"center",justifyContent:"space-around"}}>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                    <motion.div variants={logoAnimate()}>
                                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                                    <img src={Python} alt=""  />  
                                            </Box>  
                                            <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>Python</Typography>
                                    </motion.div>
                                       
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                    <motion.div variants={logoAnimate()}>
                                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                                <img src={Django} alt="" style={{width:"35px",height:"35px"}} /> 
                                            </Box>
                                            <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>Django</Typography>
                                    </motion.div>
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                    <motion.div variants={logoAnimate()}>
                                        <Box sx={{display:"flex",justifyContent:"center"}}>
                                            <img src={NodeJs} alt="" style={{width:"35px",height:"35px"}} /> 
                                        </Box>
                                        <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>Nodejs</Typography>
                                    </motion.div>
                                       
                                </Box>
                            
                            </Box>
                        
                        </Paper>
                    </Box>
                </MotionContainer>
                <MotionContainer>
                    <Box>
                        <Typography  variant="h5"   sx={{fontWeight:"bolder",letterSpacing:"3px",marginBottom:"1.2rem"}}>
                            Database Skills
                        </Typography>
                        <Paper sx={{backgroundColor:"appbar.background",width:"100%",padding:"18px 10px 6px 10px",borderRadius:"20px"}} elevation={theme.palette.mode==="light" ? 1 : 5} >
                            <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"center",justifyContent:"space-around"}}>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                    <motion.div variants={logoAnimate()}>
                                        <Box sx={{display:"flex",justifyContent:"center"}}>
                                                <img src={MySql} alt=""  />  
                                        </Box>  
                                        <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>MySql</Typography>
                                    </motion.div>
                                       
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                       <motion.div variants={logoAnimate()}>
                                                <Box sx={{display:"flex",justifyContent:"center"}}>
                                                    <img src={MongoDb} alt=""  /> 
                                                </Box>
                                                <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>MongoDb</Typography>
                                       </motion.div>
                                </Box>
                                <Box sx={{width:{md:"10%",xs:"20%"},cursor:"pointer",transition:"all .3s","&:hover":{transform:"scale(1.2)"}}}>
                                       <motion.div variants={logoAnimate()}>
                                            <Box sx={{display:"flex",justifyContent:"center"}}>
                                                <img src={Firebase} alt="" style={{width:"35px",height:"35px"}} /> 
                                            </Box>
                                            <Typography textAlign="center" variant='body2' sx={{color:"#52525b",marginY:".6rem"}}>Firebase</Typography>
                                       </motion.div>
                                </Box>
                            
                            </Box>
                        
                        </Paper>
                    </Box>
                </MotionContainer>
                   
             </Box>
        
      
    </Box>
  )
}

export default Skills