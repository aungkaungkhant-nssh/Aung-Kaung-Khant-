import React from 'react'
import {Box,Typography,LinearProgress,Grid} from '@mui/material'
function Skills() {
  return (
    <Box sx={{height:"100vh",padding:"1rem"}}  id="skills">
        <Box sx={{width:"100px",margin:"0 auto 1rem auto",borderBottom:"2px solid #e91e63",padding:".5rem"}}>
            <Typography variant='h6' textAlign="center" fontWeight="bolder">Skills</Typography>
        </Box>
        <Typography  variant="subtitle1" textAlign="center" sx={{color:"#424242"}}>
            I have above one and half year experience in web devlopement. You can show my skills.
        </Typography>
        <Box sx={{width:"80%",margin:"2rem auto 0rem auto"}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} className="wow fadeInLeft">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">HTML</Typography>
                      <Typography variant='body2'>90%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="90" color="secondary" />
                 
                </Grid>
                <Grid item xs={12} md={6} className="wow fadeInRight">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">CSS</Typography>
                      <Typography variant='body2'>80%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="80" color="secondary" />
                </Grid>
                <Grid item xs={12} md={6} className="wow fadeInLeft">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">JavaScript</Typography>
                      <Typography variant='body2'>85%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="85" color="secondary" />
                </Grid>
                <Grid item xs={12} md={6} className="wow fadeInRight">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">BootStrap</Typography>
                      <Typography variant='body2'>80%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="80" color="secondary" />
                </Grid>
                <Grid item xs={12} md={6} className="wow fadeInLeft">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">Material UI</Typography>
                      <Typography variant='body2'>60%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="60" color="secondary" />
                </Grid>
                <Grid item xs={12} md={6} className="wow fadeInRight">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">VUE JS</Typography>
                      <Typography variant='body2'>70%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="70" color="secondary" />
                </Grid>
                <Grid item xs={12} md={6} className="wow fadeInLeft">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">React JS</Typography>
                      <Typography variant='body2'>75%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="75" color="secondary" />
                </Grid>
                <Grid item xs={12} md={6} className="wow fadeInRight">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">NODE JS</Typography>
                      <Typography variant='body2'>50%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="50" color="secondary" />
                </Grid>
                <Grid item xs={12} md={6} className="wow fadeInLeft">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">MONGODB</Typography>
                      <Typography variant='body2'>40%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="40" color="secondary" />
                </Grid>
                <Grid item xs={12} md={6} className="wow fadeInRight">
                    <Box  display="flex" alignItems="center" justifyContent="space-between" marginBottom=".4rem">
                      <Typography variant='body2' marginRight="8px">React Native</Typography>
                      <Typography variant='body2'>30%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value="30" color="secondary" />
                </Grid>
            </Grid>
     
        </Box>
    </Box>
  )
}

export default Skills