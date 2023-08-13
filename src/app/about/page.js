"use client";
import Image from 'next/image'
import inherited_styles from '../page.module.css'
import { motion } from 'framer-motion';
import { RevealAnimation } from "../components/revealAnimation/RevealAnimation"
import Link from 'next/link';

export default function Home() {
  return (

    <main className={inherited_styles.main}>
      <div className={inherited_styles.content}>

        <div className={inherited_styles.aboutcontainer}>

          <div className={inherited_styles.aboutInfoContainer}>
            <RevealAnimation>
              <h1 className={inherited_styles.title}>Our Mission</h1>
            </RevealAnimation>

            <RevealAnimation>
              <p className={inherited_styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Praesent tristique magna sit amet purus gravida quis. Proin libero nunc consequat interdum varius. 
                    Ut sem nulla pharetra diam sit. Etiam sit amet nisl purus in mollis nunc. Eros in cursus turpis massa tincidunt. 
                    Id consectetur purus ut faucibus pulvinar elementum integer. Sit amet tellus cras adipiscing. 
                    Luctus accumsan tortor posuere ac ut. Sagittis eu volutpat odio facilisis mauris sit amet. 
                    Pretium lectus quam id leo in vitae turpis. Volutpat lacus laoreet non curabitur gravida arcu ac. 
                    Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ultrices dui sapien eget mi proin. 
                    Non curabitur gravida arcu ac tortor dignissim. Amet nisl suscipit adipiscing bibendum est. 
                    Non curabitur gravida arcu ac tortor. Sed egestas egestas fringilla phasellus.</p>
            </RevealAnimation>
          </div>

          <div className={inherited_styles.pythonImageContainer}>
            <motion.img animate={{
              rotate: 360,
            }}
              transition={{
                repeat: Infinity,
                duration: 9,
                ease: 'linear',
              }} src="/Website/pythonLogo.png" className={inherited_styles.logo} />
          </div>
        </div>
      </div>
    </main>

  )
}