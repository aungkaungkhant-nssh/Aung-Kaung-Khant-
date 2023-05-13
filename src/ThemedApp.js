import {createTheme, ThemeProvider} from "@mui/material/styles"
import React, { createContext, useMemo, useState } from 'react'
import { Router } from 'react-router-dom';
import App from './App';

export const ColorModeContext = createContext();
function ThemedApp() {
  const [mode,setMode] = useState("dark");
  const colorMode = useMemo(()=>{
    return {
        toggleColorMode:()=>{
            setMode(prevMode => prevMode==="light" ? "dark" : "light")
        }
    }
  },[])
  const theme = useMemo(()=>{
    return createTheme({
        palette:{
      
            primary: {
              main: '#7986cb' // Set the primary color to pink
            },
            mode,
            ...(mode==="light")
            ?{
                appbar:{
                    background:"#fff",
                    color:"#27272A"
                }

            }:{
                appbar:{
                    background:"#121212",
                    color:"#e4e4e7"
                }
            },
          
        }
    })
  },[mode])
  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
                <App />
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ThemedApp