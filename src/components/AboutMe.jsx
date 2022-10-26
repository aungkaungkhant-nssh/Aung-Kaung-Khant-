import React,{useEffect} from 'react'
import {Box,Grid,Table,TableHead, Typography, TableContainer, TableRow, TableCell, TableBody} from '@mui/material'
import { Container } from '@mui/system'
import { AccountCircle,Adjust,Home,LocalPhone,Email,  } from '@mui/icons-material'
import Akk from '../asset/images/akk.jpg'
function AboutMe({}) {
 
  return (
    <Box sx={{height:"100vh",backgroundColor:"#eee",padding:"1rem"}}  id="about" >
        <Box sx={{width:"100px",margin:"0 auto 3rem auto",borderBottom:"2px solid #e91e63",padding:".5rem"}}>
            <Typography variant='h6' textAlign="center" fontWeight="bolder">About Me</Typography>
        </Box>
        
        <Container sx={{display:"flex",alignItems:"start",justifyContent:"center",height:"100vh",position:"relative"}}>
            <Grid container>
                <Grid item sx={{display:{xs:"none",md:"block"}}} md={6} className="wow fadeInLeft">
                    <Box>
                        <img src={Akk} alt="" style={{width:"75%",height:"75%",borderRadius:"10px"}}/>
                    </Box>
                </Grid>
                <Grid item md={6} className="wow fadeInRight">
                    <Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>I am Junior Web Devloper. Studying web devlopment and Application Devlopment in my little room.</Typography>
                        <Typography variant="body2" sx={{marginBottom:".8rem",color:"#424242"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo distinctio voluptatum excepturi facere molestiae possimus accusamus dolorum voluptatem sit dicta cumque ea libero, enim natus laudantium recusandae laborum sint architecto.</Typography>
                        <Box>
                            <TableContainer>
                              <Table>
                                <TableBody>
                                    <TableRow>
                                      <TableCell sx={{display:"flex",alignItems:"center"}}>
                                        <AccountCircle  />
                                        <Typography variant="caption" marginLeft='.3rem' fontWeight="bolder">Full Name</Typography>
                                      </TableCell>
                                      <TableCell>-</TableCell>
                                      <TableCell>Aung Kaung Khant</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell  sx={{display:"flex",alignItems:"center"}}>
                                          <Adjust />
                                          <Typography variant="caption" marginLeft='.3rem' fontWeight="bolder">Age</Typography>
                                      </TableCell>
                                      <TableCell>-</TableCell>
                                      <TableCell>21</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell  sx={{display:"flex",alignItems:"center"}}>
                                          <Home />
                                          <Typography variant="caption" marginLeft='.3rem' fontWeight="bolder">Address</Typography>
                                      </TableCell>
                                      <TableCell>-</TableCell>
                                      <TableCell>Yangon,Thanlyn</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell  sx={{display:"flex",alignItems:"center"}}>
                                          <LocalPhone />
                                          <Typography variant="caption" marginLeft='.3rem' fontWeight="bolder">Phone</Typography>
                                      </TableCell>
                                      <TableCell>-</TableCell>
                                      <TableCell>09261804445</TableCell>
                                    </TableRow>
                                    <TableRow >
                                      <TableCell  sx={{display:"flex",alignItems:"center"}}>
                                            <Email />
                                           <Typography variant="caption" marginLeft='.3rem' fontWeight="bolder">Email</Typography>
                                      </TableCell>
                                      <TableCell>-</TableCell>
                                      <TableCell>akkgit0909@gmail.com</TableCell>
                                    </TableRow>
                                </TableBody>
                              </Table>

                            </TableContainer>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default AboutMe