import Navbar from './components/Navbar';
import {CssBaseline,Box, Typography,IconButton} from "@mui/material";
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import WOW from 'wowjs';
import { useEffect,useRef,useState } from 'react';

import { useTheme } from "@mui/material/styles";
import { 
  ContactPage as ContactPageIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon

} from '@mui/icons-material'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/ContactMe'
function App() {
  const [activeItem,setActiveItem] = useState("Home");
  const [open,setOpen] = useState(false);
  const sections = useRef()
  const theme=useTheme()

  useEffect(()=>{
    sections.current= document.querySelectorAll("[data-section]")
    window.addEventListener("scroll",()=>{
      const pageYOffset = window.pageYOffset;
   
      sections.current.forEach((section)=>{
          const sectionOffsetTop=section.offsetTop;
          const sectionHeight=section.offsetHeight;
  
          if(pageYOffset < 100){
            setActiveItem("Home")
            return
          }
          if (pageYOffset+160 >= sectionOffsetTop &&pageYOffset 
            < sectionOffsetTop + sectionHeight) {
              setActiveItem(section.id)
            }
  
      })
     
   
    })
  },[])
  const handleClickScroll = (ele)=>{
  }
  
  return (
    <Box>
            <CssBaseline />
              <Navbar activeItem={activeItem} setActiveItem={setActiveItem} setOpen={setOpen}  handleClickScroll={handleClickScroll} theme={theme}/>
            
              <Box sx={{padding:{xs:"10px 15px",md:"30px 180px 30px 200px",poistion:"relative"}}}>
                <Home handleClickScroll={handleClickScroll} />
                <AboutMe />
                <Skills theme={theme} />
                <Projects />
                <Contact theme={theme}/>
                <Box sx={{position:"fixed",top:"30%",left:"9%",zIndex:10000,display:{xs:"none",lg:"block"}}}>
                  <Box sx={{display:"flex",flexDirection:"column"}}>
                        <IconButton sx={{marginBottom:"1rem"}} color="primary" href='https://www.facebook.com/debugger.bug.10101'>
                            <FacebookIcon />
                          </IconButton>
                          <IconButton sx={{marginBottom:"1rem"}} color="primary" href="https://twitter.com/AungKau84839212">
                            <TwitterIcon />
                          </IconButton>
                          <IconButton sx={{marginBottom:"1rem"}} color="primary" href="https://www.linkedin.com/in/aung-kaung-khant-%F0%9F%98%8E-7682ab245/">
                            <LinkedInIcon />
                          </IconButton>
                          <IconButton sx={{marginBottom:"1rem"}} color="primary" href="https://github.com/aungkaungkhant-nssh">
                            <GitHubIcon />
                          </IconButton>
                      
                  </Box>
              </Box>
            </Box>
    </Box>
  );
}

export default App;
