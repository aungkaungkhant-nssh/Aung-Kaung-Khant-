import React,{useEffect} from 'react'
import {Box,Grid,Table,TableHead, Typography,Paper} from '@mui/material'
import { Container } from '@mui/system'
import { 
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon

} from '@mui/icons-material'
import Akk from '../asset/images/akk.jpg'
import {motion} from 'framer-motion'
import { textAnimate,imageAnimate } from '../config/animate'
import MotionContainer from './MotionContainer'

function AboutMe({}) {
  return (
    <Box data-section id="About" sx={{marginBottom:"3em",padding:"1rem",scrollMarginTop:{xs:"9rem",md:"7rem"}}}   >
        <MotionContainer> 
          <Box sx={{marginTop:"35px",display:"flex",flexDirection:{md:"row-reverse",xs:"column"},alignItems:"start",justifyContent:"space-between"}}>
          <Box sx={{width:{md:"40%",xs:"70%"},height:"40%"}}>
                <motion.div variants={imageAnimate(1)}>
                    <Paper sx={{marginLeft:"20px",marginTop:{md:"20px",xs:"0px"}}} elevation={3}>
                      <img src={Akk} alt="" style={{cursor:"pointer",width:"100%",height:"100%",borderRadius:"10px",transform:"rotate(4deg)"}}/>
                  </Paper>
                </motion.div>
                
          </Box>
              <Box  sx={{width:{md:"55%",xs:"100%"}}}>
                  <motion.h5 variants={textAnimate(1.2)}>
                      <Typography variant="h5" fontWeight="bold"   gutterBottom sx={{paddingY:"10px",fontWeight:"bolder"}}>
                          I am Aung Kaung Khant and live in Hpa An.
                      </Typography> 
                  </motion.h5>
                  <motion.h6 variants={textAnimate(1.5)}> 
                        <Typography   variant="body1" display="block"  sx={{textAlign:"justify",marginBottom:"2rem",color:"#52525b",letterSpacing:"1.4px",lineHeight:"2rem",fontSize:"18px"}}>
                            I have knowledge of two programming languages python and javascript.
                            I am also proficient in vue js,react and node js.I also studied
                            datastructure and algorithm  when i was in university and have studied 
                            java,c++ and php extensively.Now I'm Learning TypeScript,Tailwind css and django
                            framework.
                        </Typography>
                  </motion.h6>
                  <motion.h6 variants={textAnimate(1.8)}> 
                        <Typography variant="body1" sx={{textAlign:"justify",marginBottom:"2rem",color:"#52525b",letterSpacing:"1.4px",lineHeight:"2rem",fontSize:"18px"}}>
                          I'm excited to make the leap and continue refining my skills with the right company.In my spare time, I fancy  playing
                          football  with my friends
                        </Typography>
                  </motion.h6>
              
                  
              </Box>
          </Box>
        </MotionContainer>
       
    </Box>
  )
}

export default AboutMe