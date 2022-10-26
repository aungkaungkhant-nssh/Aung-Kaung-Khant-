import React,{useEffect} from 'react'
import {Grid,Stack,Avatar,IconButton, Typography,Box,Button} from '@mui/material'
import MgKaung from '../asset/images/MgKaung.jpg'
import Typed from "react-typed"
import { ContactPage,ArrowCircleDown,Facebook,LinkedIn,GitHub,Instagram,Twitter} from '@mui/icons-material'
function Home({handleClickScroll}) {
 
  return (
    <Box id="home"  sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",position:"relative"}}>
        <Box>
     
            <Grid container alignItems="center"  direction={{xs:"column-reverse",md:"row"}} spacing={5}>
              <Grid item xs={12} md={6} className="wow fadeInLeft">
                    <Box >
                      <Typography variant='h5' textAlign={{xs:"center",md:"left"}} fontWeight="bolder" gutterBottom>Hi There,</Typography>
                      <Typography variant='h5'  textAlign={{xs:"center",md:"left"}}  fontWeight="bolder" gutterBottom>I am Aung <span style={{color:"#e91e63"}}>Kaung</span> Khant</Typography>
                      <Typography variant="body1" gutterBottom  textAlign={{xs:"center",md:"left"}} >
                        I am a {' '}
                        <Typed
                            
                            strings={[
                                  "IT Student",
                                  "Web Developer",
                                  "Mern Stack Developer",
                                ]}
                                typeSpeed={150}
                                backSpeed={90}
                                loop
                          />
                      </Typography>
                      <Typography  textAlign={{xs:"center",md:"left"}}  variant="caption" display="block"  sx={{marginBottom:".8rem",color:"#424242"}}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus suscipit distinctio accusamus eveniet?
                      </Typography>
                      <Box sx={{display:"flex",alignItems:{xs:"center",md:"flex-start"},justifyContent:{xs:"center",md:"flex-start"}}}>
                          <Button  color="primary" variant="contained" startIcon={<ContactPage />} onClick={()=>handleClickScroll("contact")}>
                                Contact 
                          </Button>
                      </Box>
                      <Box sx={{display:"flex",margin:"1rem 0",alignItems:{xs:"center",md:"flex-start"},justifyContent:{xs:"center",md:"flex-start"}}}>
                            <IconButton sx={{marginRight:".5rem"}}>
                                <Facebook color="primary" />
                            </IconButton>
                            <IconButton sx={{marginRight:".5rem"}}>
                                <LinkedIn color="primary" />
                            </IconButton>
                            <IconButton sx={{marginRight:".5rem"}}>
                                <GitHub color="primary"  />
                            </IconButton>
                            <IconButton sx={{marginRight:".5rem"}}>
                                <Instagram  color="primary" />
                            </IconButton>
                            <IconButton sx={{marginRight:".5rem"}}>
                                <Twitter color="primary" />
                            </IconButton>
                      </Box>
                    </Box>
              </Grid>
              <Grid item xs={12} md={6}   className="wow fadeInRight">
                  <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Avatar src={MgKaung} sx={{width:{xs:"200px",md:"300px"},height:{xs:"200px",md:"300px"}}}/>
                </Box>
              </Grid>
            </Grid>
            <IconButton sx={{position:"absolute",bottom:"0px",left:"50%",right:"50%"}} onClick={()=>handleClickScroll("about")}>
                <ArrowCircleDown sx={{fontSize:"40px"}} />
            </IconButton>
        </Box>
   
    </Box>
     
     
  )
}

export default Home