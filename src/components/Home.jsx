import React,{useEffect} from 'react'
import {IconButton, Typography,Box,Button} from '@mui/material'
import Typed from "react-typed"
import { 
  ContactPage as ContactPageIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon

} from '@mui/icons-material'
import {motion} from 'framer-motion'
import { textAnimate } from '../config/animate'
import MotionContainer from './MotionContainer'
function Home({handleClickScroll}) {
 
  return (
    <Box id="Home" data-section sx={{height:"75vh",scrollMarginTop:"10rem"}}> 
      <Box sx={{marginTop:{xs:"80px",md:"0px"}}}>
        <MotionContainer>
          <motion.h6 variants={textAnimate()}>
                <Typography variant='h6' textAlign="left"  gutterBottom>Hi There,my name is</Typography>
          </motion.h6>
          <motion.h4 variants={textAnimate()}>
                <Typography variant='h4' sx={{marginY:"1.5rem"}} textAlign="left"  fontWeight="bolder" gutterBottom>Aung <span style={{color:"#7986cb"}}>Kaung</span> Khant</Typography>
          </motion.h4>
             
          <motion.h6 variants={textAnimate()}>
              <Typography variant="h6"  sx={{marginY:"1.5rem"}} textAlign="left" fontWeight="bolder" >
                I am a {' '}
                <Typed
                    
                    strings={[
                          "IT Student",
                          "Javascript Crazy",
                        ]}
                        typeSpeed={150}
                        backSpeed={90}
                        loop
                  />
              </Typography>
          </motion.h6>

          <motion.h6 variants={textAnimate()}>
              <Typography  textAlign="left" variant="body1" display="block"  sx={{marginBottom:"2rem",color:"#52525b",letterSpacing:"1px",width:{xs:"100%",md:"50%"}}}>
                <span style={{color:"#7986cb"}}>Full Stack Web Developer</span> passionate about creating interactive applications and experience on the web.
              </Typography>
          </motion.h6>
          <motion.div variants={textAnimate()}>
              <a href="https://drive.google.com/file/d/1R3chiojmTyRomU4qpEXB8V56OrNj5InG/view?usp=share_link">
                <Button variant="outlined" color="primary" sx={{marginBottom:"1.5rem",borderRadius:"15px"}} >
                      Resume
                </Button> 
              </a>
          
          </motion.div>
             
              <Box sx={{display:{xs:"block",lg:"none"},alignItems:{xs:"center",md:"flex-start"},justifyContent:{xs:"center",md:"flex-start"}}}>
                    <IconButton sx={{marginRight:".5rem"}} href='https://www.facebook.com/debugger.bug.10101'>
                        <FacebookIcon color="primary" />
                    </IconButton>
                    <IconButton sx={{marginRight:".5rem"}} href="https://www.linkedin.com/in/aung-kaung-khant-%F0%9F%98%8E-7682ab245/">
                        <LinkedInIcon color="primary" href="" />
                    </IconButton>
                    <IconButton sx={{marginRight:".5rem"}} href="https://github.com/aungkaungkhant-nssh">
                        <GitHubIcon color="primary"  />
                    </IconButton>
                  
                    <IconButton sx={{marginRight:".5rem"}}  href="https://twitter.com/AungKau84839212">
                        <TwitterIcon color="primary" />
                    </IconButton>
              </Box>
        </MotionContainer>
       
      </Box>
        
    </Box>
     
     
  )
}

export default Home