"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import {motion,useInView} from 'framer-motion';
import {RevealAnimation} from "./components/revealAnimation/RevealAnimation"
export default function Home() {

  

  
  
  return (
   
    <main className={styles.main}>
      <div className={styles.homecontainer}>
        <RevealAnimation>
        <img src="/logo.png" className={styles.logo} />
        </RevealAnimation>
        <div>
        <RevealAnimation>
          <span className={styles.title}>CHS Pyoneers</span>
          <p>Some subtitle text goes here...</p>
          <div className={styles.btngroup}>
              <button className='btn-primary'>Log Attendance</button>
              <button className='btn-secondary'>View Credits</button>
          </div>
          </RevealAnimation>
        </div>
        
      </div>
      <div className={styles.content}>
 
    <div className={styles.aboutcontainer}>

    <div className={styles.aboutInfoContainer}>
<RevealAnimation>
    <h1 className={styles.title}>About Us</h1>
</RevealAnimation>

<RevealAnimation>
    <h3 className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus quis deleniti voluptatum esse ea, commodi delectus porro repellat aspernatur. Iste animi eligendi rerum nisi alias consequatur quas maxime sint.
    Aliquam veritatis laudantium dolor culpa, error natus reprehenderit quisquam, autem voluptate possimus pariatur minus nobis enim neque ab a maiores, reiciendis dicta quasi magnam unde illo. Tenetur minima iste rerum.</h3>

    <a href='/about' className={styles.learnMoreBtn}>Learn More!</a>
    </RevealAnimation>
    </div>
    
    <div className={styles.pythonImageContainer}>
    <motion.img animate={{
        rotate: 360, 
      }}
      transition={{
        repeat: Infinity, 
        duration: 9, 
        ease: 'linear', 
      }} src="/pythonLogo.png" className={styles.logo} />
    
    </div>

    </div>
   
      
   
      </div>
    </main>

   )
}
