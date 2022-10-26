import React from 'react'
import {Box,Typography,Grid, CardMedia, CardContent,Card, CardActions} from '@mui/material'
import Chat from '../asset/images/chat.png'
import Medicine from '../asset/images/medicine.png'
import Profile from '../asset/images/profile.png'
import Liquor from '../asset/images/liquor.png'
import Hotel from '../asset/images/hotel.png'
import Node from '../asset/images/node.png'
import ReduxShopping from '../asset/images/redux.png'
import { Language,GitHub  } from '@mui/icons-material'
function Projects() {
  return (
        <Box sx={{backgroundColor:"#eee",padding:"1rem"}}  id="projects">
            <Box sx={{width:"100px",margin:"0 auto 1rem auto",borderBottom:"2px solid #e91e63",padding:".5rem"}}>
                <Typography variant='h6' textAlign="center" fontWeight="bolder">Projects</Typography>
            </Box>
            <Box  sx={{width:"90%",margin:"3rem auto 0rem auto"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}  className="wow fadeInLeft">
                        <Card>
                           <a href="https://mern-live-chat.netlify.app">
                           <CardMedia 
                                component="img"
                               
                                image={Chat}
                            />
                           </a>
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontWeight="bolder">
                                    Mern Live Chat App
                                </Typography>
                                <Typography variant="body2" sx={{color:"#424242",letterSpacing:".8px"}}>
                                    Chatting Application using MERN Stack.
                                    Project Include Authentication flow,web socket and other features.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{width:"20%",margin:"0px auto"}}>
                                <a href="https://mern-live-chat.netlify.app/" style={{marginRight:".5rem"}} className="projectsLink">
                                    <Language color="primary" />
                                </a>
                                <a href="https://github.com/aungkaungkhant-nssh/Mern-Live-Chat-App" className="projectsLink">
                                    <GitHub  color="primary" />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item  md={6}  className="wow fadeInRight">
                        <Card>
                           <a href="https://myat-thue-kha.netlify.app/">
                           <CardMedia 
                                component="img"
                                image={Medicine}
                            />
                           </a>
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontWeight="bolder">
                                    Myat Thue Kha Medicine Shop
                                </Typography>
                                <Typography variant="body2" sx={{color:"#424242",letterSpacing:".8px"}}>
                                    Ecommerce Application using MERN Stack.This project aim to how to work ecommerce app 
                                </Typography>
                            </CardContent>
                            <CardActions sx={{width:"20%",margin:"0px auto"}}>
                                <a href="https://myat-thue-kha.netlify.app/" style={{marginRight:".5rem"}} className="projectsLink">
                                    <Language color="primary" />
                                </a>
                                <a href="https://github.com/aungkaungkhant-nssh/Myat-Thue-Kha-FrontEnd" className="projectsLink">
                                    <GitHub  color="primary" />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={6}  className="wow fadeInLeft">
                        <Card>
                           <a href="https://akk-proflie-website.netlify.app/">
                           <CardMedia 
                                component="img"
                                image={Profile}
                            />
                           </a>
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontWeight="bolder">
                                   Profile Web Site
                                </Typography>
                                <Typography variant="body2" sx={{color:"#424242",letterSpacing:".8px"}}>
                                    MMSIT taught this project.It is using BootStrap.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{width:"20%",margin:"0px auto"}}>
                                <a href="https://akk-proflie-website.netlify.app/" style={{marginRight:".5rem"}} className="projectsLink">
                                    <Language color="primary" />
                                </a>
                                <a href="https://github.com/aungkaungkhant-nssh/Profile-WebSite" className="projectsLink">
                                    <GitHub  color="primary" />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                     <Grid item md={6}  className="wow fadeInRight">
                        <Card>
                           <a href="https://online-liquor-system-ucsl.netlify.app/">
                           <CardMedia 
                                component="img"
                                image={Liquor}
                            />
                           </a>
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontWeight="bolder">
                                   Liquor Store Web Site
                                </Typography>
                                <Typography variant="body2" sx={{color:"#424242",letterSpacing:".8px"}}>
                                    This is UCSL Second Year Project. I used pure html,css,javascript.Project did not use framework.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{width:"20%",margin:"0px auto"}}>
                                <a href="https://online-liquor-system-ucsl.netlify.app/" style={{marginRight:".5rem"}} className="projectsLink">
                                    <Language color="primary" />
                                </a>
                                <a href="https://online-liquor-system-ucsl.netlify.app/" className="projectsLink">
                                    <GitHub  color="primary" />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={6}  className="wow fadeInLeft">
                        <Card>
                           <a href="https://akk-beach-resort.netlify.app/">
                           <CardMedia 
                                component="img"
                                image={Hotel}
                            />
                           </a>
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontWeight="bolder">
                                    Beach Resort Web Site
                                </Typography>
                                <Typography variant="body2" sx={{color:"#424242",letterSpacing:".8px"}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, deserunt.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{width:"20%",margin:"0px auto"}}>
                                <a href="https://akk-beach-resort.netlify.app/" style={{marginRight:".5rem"}} className="projectsLink">
                                    <Language color="primary" />
                                </a>
                                <a href="https://github.com/aungkaungkhant-nssh/Beach_Resort" className="projectsLink">
                                    <GitHub  color="primary" />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={6}  className="wow fadeInRight">
                        <Card>
                           <a href="https://redux-shopping-carts.netlify.app/">
                           <CardMedia 
                                component="img"
                                image={ReduxShopping}
                            />
                           </a>
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontWeight="bolder">
                                    Redux Shopping Cart
                                </Typography>
                                <Typography variant="body2" sx={{color:"#424242",letterSpacing:".8px"}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, deserunt.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{width:"20%",margin:"0px auto"}}>
                                <a href="https://redux-shopping-carts.netlify.app/" style={{marginRight:".5rem"}} className="projectsLink">
                                    <Language color="primary" />
                                </a>
                                <a href="https://github.com/aungkaungkhant-nssh/React-Redux-Shopping-Cart" className="projectsLink">
                                    <GitHub  color="primary" />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={6}  className="wow fadeInLeft">
                        <Card>
                           <a href="https://redux-shopping-carts.netlify.app/">
                           <CardMedia 
                                component="img"
                                image={Node}
                            />
                           </a>
                            <CardContent>
                                <Typography variant="h6" gutterBottom fontWeight="bolder">
                                    Book Shop Web Site
                                </Typography>
                                <Typography variant="body2" sx={{color:"#424242",letterSpacing:".8px"}}>
                                    This project used  backend  nodejs,expressjs,mogodb and frontend ejs.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{width:"20%",margin:"0px auto"}}>
                                <a href="https://shoppingappnode.herokuapp.com" style={{marginRight:".5rem"}} className="projectsLink">
                                    <Language color="primary" />
                                </a>
                                <a href="https://github.com/aungkaungkhant-nssh/National-cybercity" className="projectsLink">
                                    <GitHub  color="primary" />
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
  )
}

export default Projects