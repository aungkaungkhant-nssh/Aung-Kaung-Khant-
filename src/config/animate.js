export const textAnimate=()=>{
    return {
       offscreen:{x:-100, opacity:0},
       onscreen:{x:0,
       opacity:1,
       transition: {type:"spring",
       bounce:0.2,
       duration:1.3}
     }
     }
   }

   export const imageAnimate=(duration)=>{
    return {
       offscreen:{x:50, opacity:0},
       onscreen:{x:0,
       opacity:1,
       transition: {type:"spring",
       bounce:.3,
       duration:duration}
     }
     }
   }
   export const logoAnimate = (opacity=0.1,duration=0.01)=>{
    return {
          offscreen:{opacity},
          onscreen:{
          opacity:1,
          transition: {type:"spring",
        
          duration}}
    }
   }