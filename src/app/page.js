"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { motion } from 'framer-motion';
import { RevealAnimation } from "./components/revealAnimation/RevealAnimation"
import Link from 'next/link';

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.homecontainer}>
        <Image src="/Website/logo.png" width={100} height={100} sizes='(max-width: 750px) 15rem, 20rem' className={styles.logo} />
        <div>
          <span className={styles.title}>CHS Pyoneers</span>
          <p>Centennial's premier programming club!</p>
          <div className={styles.btngroup}>
          
            <Link className='btn-primary' href='/clubmember'>Contact</Link>
            <Link className='btn-secondary' href='/clubmember'>Contact</Link>
            
         
          </div>
        </div>
      </div>
      <div className={styles.content}>

        <div className={styles.aboutcontainer}>

          <div className={styles.aboutInfoContainer}>
            <RevealAnimation>
              <h1 className={styles.title}>About Us</h1>
            </RevealAnimation>

            <RevealAnimation>
              <p className={styles.text}>CHS Pyoneers is Centennial High School's premier programming club! Since its inception in 2020, the Pyoneers club has rapidly grown to become one of the largest clubs in Centennial. It has hosted the 2021, 2022, and 2023 Centennial Informatics Tournaments with over <font color="green">[FIGURE]+ cumulative attendees</font> over the years. Additionally, the club has held Python lessons at numerous middle and high school with <font color="green">[FIGURE]+ students</font> taught over the years.
              Currently, the club is still rapidly growing and currently has over <font color="green">100 members</font> who all play an active part in our community!
              </p>
              <Link href='/about' className={styles.learnMoreBtn}>Learn More!</Link>
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
              }} src="/Website/pythonLogo.png" className={styles.logo} />
          </div>
        </div>
      </div>
    </main>

  )
}
