import React from 'react'
import {Box,Typography,Grid, CardMedia, CardContent,Card, CardActions, Button} from '@mui/material'
import Chat from '../asset/images/chat.png'
import Medicine from '../asset/images/medicine.png'
import Profile from '../asset/images/profile.png'
import Liquor from '../asset/images/liquor.png'
import Hotel from '../asset/images/hotel.png'
import Node from '../asset/images/node.png'
import Volting from '../asset/images/volting.png'
import ReduxShopping from '../asset/images/redux.png'
import { Language,GitHub ,
    Videocam as VideocamIcon
} from '@mui/icons-material'
import SocialMedia from '../asset/images/socialMedia.png'
import MotionContainer from './MotionContainer'
import {motion} from 'framer-motion'
import { imageAnimate, logoAnimate, textAnimate } from '../config/animate'
function Projects() {
  return (
        <Box  data-section id="Projects" sx={{padding:"1rem",marginBottom:"5rem",scrollMarginTop:{xs:"9rem",md:"6rem"}}}>
                <Typography  variant="h5"   sx={{fontWeight:"bolder",letterSpacing:"3px",marginBottom:".5rem"}}>
                        Show of my projects
                </Typography>
            <Box  sx={{width:"90%",margin:"2rem auto 0rem auto"}}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item  md={6} >
                        <MotionContainer>
                            <motion.div variants={textAnimate(1.5)}>
                                    <Card sx={{backgroundColor:"appbar.background"}} elevation={3}>
                                    <CardMedia 
                                            component="img"
                                            image={SocialMedia}
                                        />
                                    
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom fontWeight="bolder">
                                                Full Stack Social Media
                                            </Typography>
                                            <Typography variant="body2" sx={{color:"#52525b",letterSpacing:"1.7px",lineHeight:"1.5rem",lineHeight:"1.5rem"}}>
                                                Project Include Authentication,OAuth,Add Post,Update Profile with image,likes,shares,comment,searchUser and notifications.
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{display:"flex",justifyContent:"center",marginBottom:".7rem"}}>
                                            <Button color="primary" variant="outlined" 
                                            href='https://github.com/aungkaungkhant-nssh/SocialMedia'
                                            startIcon={<GitHub  color="primary" />}
                                            sx={{borderRadius:"15px",fontSize:"13px"}}
                                            >
                                                Source Code
                                            </Button>
                                        </CardActions>
                                    </Card>
                            </motion.div>
                        </MotionContainer>
                     
                    </Grid>
                    <Grid item  md={6}>
                        <MotionContainer>
                            <motion.div variants={imageAnimate(1.5)}>
                                <Card sx={{backgroundColor:"appbar.background"}} elevation={3}>
                                <CardMedia 
                                        component="img"
                                    
                                        image={Chat}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom fontWeight="bolder">
                                        Full Stack Mern Live Chat App
                                        </Typography>
                                        <Typography variant="body2" sx={{color:"#52525b",letterSpacing:"1.7px",lineHeight:"1.5rem"}}>
                                            Chatting Application using MERN Stack.
                                            Project Include Authentication,send message,create group chat,update Profile
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{display:"flex",justifyContent:"center",marginBottom:".7rem"}}>
                                        <Button color="primary" variant="outlined" 
                                        href='https://github.com/aungkaungkhant-nssh/LiveChatApp'
                                        startIcon={<GitHub  color="primary" />}
                                        sx={{borderRadius:"15px",fontSize:"13px"}}
                                        >
                                            Source Code
                                        </Button>
                                    </CardActions>
                                </Card>
                            </motion.div>
                            
                        </MotionContainer>
                        
                    </Grid>
                    <Grid item  md={6} >
                        <MotionContainer>
                            <motion.div variants={textAnimate(1.5)}>
                                <Card sx={{backgroundColor:"appbar.background"}} elevation={3}>
                                    <a href="https://myat-thue-kha.netlify.app/">
                                    <CardMedia 
                                            component="img"
                                            image={Medicine}
                                        />
                            </a>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom fontWeight="bolder">
                                        Full Stack Online Pharmacy Shop
                                    </Typography>
                                    <Typography variant="body2" sx={{color:"#52525b",letterSpacing:"1.7px",lineHeight:"1.5rem"}}>
                                        Project include admin and user.Admin can control the project feature.User can buy the product,show detail product,add to cart,
                                        can order and check the order status.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:"flex",justifyContent:"center",marginBottom:".7rem"}}>
                                    <Button color="primary" variant="outlined" 
                                    href='https://github.com/aungkaungkhant-nssh/OnlinePharmacyShop'
                                    startIcon={<GitHub  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                        Source Code
                                    </Button>
                                </CardActions>
                                </Card>
                            </motion.div>
                        </MotionContainer>
                       
                    </Grid>
                    <Grid item md={6}>
                        <MotionContainer>
                            <motion.div variants={imageAnimate(1.5)}>
                                <Card sx={{backgroundColor:"appbar.background"}} elevation={3}>
                                <CardMedia 
                                    component="img"
                                    image={Volting}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom fontWeight="bolder">
                                    Full Stack UCSL Volting System
                                    </Typography>
                                    <Typography variant="body2" sx={{color:"#52525b",letterSpacing:"1.7px",lineHeight:"1.5rem"}}>
                                    It was a project written for my university.In Fresher Welcome, 
                                    it was used as a place to vote for the king and queen
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:"flex",justifyContent:"center",marginBottom:".7rem"}}>
                                    <Button color="primary" variant="outlined" 
                                    href='https://github.com/aungkaungkhant-nssh/UCSLVoltingSystem'
                                    startIcon={<GitHub  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                        Source Code
                                    </Button>
                                </CardActions>
                                </Card>
                            </motion.div>
                        </MotionContainer>
                       
                    </Grid>
                    <Grid item md={6}>
                        <MotionContainer>
                            <motion.div variants={textAnimate(1.5)}>
                                <Card sx={{backgroundColor:"appbar.background"}} elevation={3}>
                                <CardMedia 
                                    component="img"
                                    image={Node}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom fontWeight="bolder">
                                       Full Stack Book Shop 
                                    </Typography>
                                    <Typography variant="body2" sx={{color:"#52525b",letterSpacing:"1.7px",lineHeight:"1.5rem"}}>
                                        This project used  backend  nodejs,expressjs,mogodb and frontend ejs.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:"flex",justifyContent:"center",marginBottom:".7rem"}}>
                                    <Button color="primary" variant="outlined" 
                                    href='https://github.com/aungkaungkhant-nssh/React-Redux-Shopping-Cart'
                                    startIcon={<GitHub  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                        Source Code
                                    </Button>
                                </CardActions>
                                </Card>
                            </motion.div>
                        </MotionContainer>
                       
                    </Grid>
                    <Grid item md={6} >
                        <MotionContainer>
                            <motion.div variants={imageAnimate(1.5)}>
                                <Card sx={{backgroundColor:"appbar.background"}} elevation={3}>
                                    <CardMedia 
                                        component="img"
                                        image={Profile}
                                    />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom fontWeight="bolder">
                                        FrontEnd Profile Web Site
                                    </Typography>
                                    <Typography variant="body2" sx={{color:"#52525b",letterSpacing:"1.7px",lineHeight:"1.5rem"}}>
                                        MMSIT design project.Responsive website.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:"flex",justifyContent:"space-between",marginBottom:".7rem"}}>
                                    
                                    <Button color="primary" variant="outlined" 
                                    href='https://github.com/aungkaungkhant-nssh/Profile-WebSite'
                                    startIcon={<GitHub  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                        Source Code
                                    </Button>
                                    <Button color="primary" variant="outlined" 
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    href='https://akk-proflie-website.netlify.app'
                                    startIcon={<VideocamIcon  color="primary" />}
                             
                                    >
                                       Live Demo
                                    </Button>
                                </CardActions>
                                </Card>
                            </motion.div>
                        </MotionContainer>
                       
                    </Grid>
                  
                     <Grid item md={6} >
                        <MotionContainer>
                            <motion.div variants={textAnimate(1.5)}>
                                <Card sx={{backgroundColor:"appbar.background"}} elevation={3}>
                                <CardMedia 
                                    component="img"
                                    image={Liquor}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom fontWeight="bolder">
                                        Frontend Liquor Store Web site
                                    </Typography>
                                    <Typography variant="body2" sx={{color:"#52525b",letterSpacing:"1.7px",lineHeight:"1.5rem"}}>
                                        This is UCSL Second Year Project. I used pure html,css,javascript.Project did not use framework.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:"flex",justifyContent:"space-between",marginBottom:".7rem"}}>
                                    <Button color="primary" variant="outlined" 
                                    href='https://github.com/aungkaungkhant-nssh/SecondYearProject'
                                    startIcon={<GitHub  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                        Source Code
                                    </Button>
                                    <Button color="primary" variant="outlined" 
                                    href='https://online-liquor-system-ucsl.netlify.app'
                                    startIcon={<VideocamIcon  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                       Live Demo
                                    </Button>
                                </CardActions>
                                </Card>
                             </motion.div>
                        </MotionContainer>
                       
                    </Grid>
                    <Grid item md={6} >
                        <MotionContainer>
                            <motion.div variants={imageAnimate(1.5)}>
                                <Card sx={{backgroundColor:"appbar.background"}} elevation={3}>
                           
                                <CardMedia 
                                        component="img"
                                        image={Hotel}
                                    />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom fontWeight="bolder">
                                       FrontEnd Beach Resort Web Site
                                    </Typography>
                                    <Typography variant="body2" sx={{color:"#52525b",letterSpacing:"1.7px",lineHeight:"1.5rem"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, deserunt.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:"flex",justifyContent:"space-between",marginBottom:".7rem"}}>
                                    <Button color="primary" variant="outlined" 
                                    href='https://github.com/aungkaungkhant-nssh/Mern-Live-Chat-App'
                                    startIcon={<GitHub  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                        Source Code
                                    </Button>
                                    <Button color="primary" variant="outlined" 
                                    href='https://akk-beach-resort.netlify.app'
                                    startIcon={<VideocamIcon  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                       Live Demo
                                    </Button>
                                </CardActions>
                                </Card>
                            </motion.div>
                        </MotionContainer>
                       
                    </Grid>
                    <Grid item md={6} >
                        <MotionContainer>
                            <motion.div variants={imageAnimate(1.5)}>
                                <Card sx={{backgroundColor:"appbar.background"}} elevation={3}>
                                  <CardMedia 
                                    component="img"
                                    image={ReduxShopping}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom fontWeight="bolder">
                                      Frontend   Redux Shopping Cart
                                    </Typography>
                                    <Typography variant="body2" sx={{color:"#52525b",letterSpacing:"1.7px",lineHeight:"1.5rem"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, deserunt.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:"flex",justifyContent:"space-between",marginBottom:".7rem"}}>
                                    <Button color="primary" variant="outlined" 
                                    href='https://github.com/aungkaungkhant-nssh/Beach_Resort'
                                    startIcon={<GitHub  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                        Source Code
                                    </Button>
                                    <Button color="primary" variant="outlined" 
                                    href='https://redux-shopping-carts.netlify.app'
                                    startIcon={<VideocamIcon  color="primary" />}
                                    sx={{borderRadius:"15px",fontSize:"13px"}}
                                    >
                                       Live Demo
                                    </Button>
                                </CardActions>
                                </Card>
                            </motion.div>
                        </MotionContainer>
                        
                    </Grid>
                
                  
                </Grid>
            </Box>
        </Box>
  )
}

export default Projects