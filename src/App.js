import Navbar from './components/Navbar';
import {ThemeProvider,createTheme, colors,Box} from "@mui/material";
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import WOW from 'wowjs';
import { useEffect,useRef,useState } from 'react';
import SideBar from './components/SideBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
const theme = createTheme({
  status: {
    active: '#fff',
    grey:"#424242"
  },
 palette:{
    primary:{
      main:colors.indigo[300]
    },
    secondary:{
      main:colors.pink[500]
    },
    
 }
})
function App() {
  const [activeItem,setActiveItem] = useState("home");
  const [open,setOpen] = useState(false);
 
  
  useEffect(()=>{
    new WOW.WOW({
      live: false
    }).init();
    
  },[activeItem])
  const handleClickScroll = (ele)=>{
    const element = document.getElementById(ele);
    console.log(element)
    if(element){
      setActiveItem(ele)
    
      element.scrollIntoView({ behavior: 'smooth' })

    }
  }
  return (
    <ThemeProvider theme={theme}>
        <Navbar activeItem={activeItem} setActiveItem={setActiveItem} setOpen={setOpen}  handleClickScroll={handleClickScroll}/>
            <Home handleClickScroll={handleClickScroll} />
            <AboutMe  />
            <Skills />
            <Projects />
            <ContactMe />
          <SideBar open={open} setOpen={setOpen} selected={activeItem} setSelected={setActiveItem}  handleClickScroll={handleClickScroll}/>  
    </ThemeProvider>
  );
}

export default App;
