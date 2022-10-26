import React from 'react'
import {Box,Grid,Typography,Stack,TextField,TextareaAutosize, Button} from '@mui/material'
import {Phone,GitHub,Email,LinkedIn,Send} from '@mui/icons-material'
function ContactMe() {
  return (
    <Box sx={{height:"100vh",padding:"1rem"}}  id="contact" >
         <Box sx={{width:"150px",margin:"0 auto 1rem auto",borderBottom:"2px solid #e91e63",padding:".5rem"}}>
            <Typography variant='h6' textAlign="center" fontWeight="bolder">Contact Me</Typography>
        </Box>
        <Box sx={{margin:"2rem 0"}}>
            <Typography variant='h5' gutterBottom  textAlign="center" color="primary" fontWeight="bolder">Have You any Question?</Typography>
            <Typography variant='body1'  textAlign="center" >I'm AT YOUR SERVICE</Typography>
        </Box>
        <Box  sx={{width:"90%",margin:"4rem auto"}}>
            <Grid container spacing={3} alignItems="center" >
                <Grid item xs={12} md={3}>
                    <Stack  alignItems="center" justifyContent="center" style={{cursor:"pointer"}}>
                        <Phone color="primary" sx={{marginBottom:".5rem"}}  />
                        <Typography variant="body2" fontWeight="bolder" gutterBottom>Call Us On</Typography>
                        <Typography variant="body2">09261804445</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Stack alignItems="center" justifyContent="center" style={{cursor:"pointer"}}>
                        <GitHub color="primary"  sx={{marginBottom:".5rem"}}/>
                        <Typography variant="body2" fontWeight="bolder" gutterBottom>Git Hub</Typography>
                        <a href="https://github.com/aungkaungkhant-nssh" style={{fontSize:"0.875rem"}}>aungkaungkhant-nssh</a>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Stack alignItems="center" justifyContent="center" style={{cursor:"pointer"}}>
                        <Email color="primary" sx={{marginBottom:".5rem"}} />
                        <Typography variant="body2" fontWeight="bolder" gutterBottom>Email</Typography>
                        <Typography variant="body2">akkgit0909@gmail.com</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                      <Stack alignItems="center" justifyContent="center" style={{cursor:"pointer"}}>
                        <LinkedIn color="primary"  sx={{marginBottom:".5rem"}}/>
                        <Typography variant="body2" fontWeight="bolder" gutterBottom>Linked In</Typography>
                        <a href="" style={{fontSize:"0.875rem"}}>Aung Kaung Khant</a>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{margin:"2rem 0"}}>
            <Typography variant='h5' gutterBottom  textAlign="center" color="primary" fontWeight="bolder">Send Me And EMAIL</Typography>
            <Typography variant='body1'  textAlign="center" >I'M VERY RESPONSIVE TO MESSAGE</Typography>
        </Box>
        <Box sx={{width:"90%",maxWidth:"500px",margin:"3rem auto"}}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={6} >
                    <Stack alignItems="center" justifyContent="center">
                        <TextField
                        id="outlined-name"
                        label="Name"
                        fullWidth
                        />
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack alignItems="center" justifyContent="center">
                        <TextField
                        id="outlined-name"
                        label="Email"
                        fullWidth
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack alignItems="center" justifyContent="center">
                        <TextField
                        id="outlined-name"
                        label="Subject"
                        fullWidth
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
                        />
                    </Stack>
                </Grid>
            </Grid>
            <Button variant='contained' sx={{margin:"1rem 0rem"}} endIcon={<Send />}>Send Message</Button>
        </Box>
    </Box>
  )
}

export default ContactMe