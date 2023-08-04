"use client";
import React, {useEffect,useRef} from "react";
import {motion,useInView,useAnimation} from "framer-motion";



export const RevealAnimation = ({children,width = "fit-content"}) =>{
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        };
    },[isInView]);

return(
<div ref={ref} style={{position:"relative",overflow:"hidden"}}>
<motion.div
variants={{
    hidden:{opacity:0,y:80},
    visible:{opacity:1,y:0},
}}

initial="hidden"
animate={mainControls}
transition={{duration:1,delay:.5}}
>

    {children}
</motion.div>


</div>

);


};