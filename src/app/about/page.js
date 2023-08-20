"use client";
import Image from 'next/image'
import inherited_styles from '../page.module.css'
import styles from './page.module.css'
import { motion } from 'framer-motion';
import { RevealAnimation } from "../components/revealAnimation/RevealAnimation"
import Link from 'next/link';

export default function Home() {
  return (
    <main className={inherited_styles.main}>
      <div className={styles.content}>

        <div className={styles.aboutcontainer}>
          <div className={inherited_styles.aboutInfoContainer}>
            <RevealAnimation>
              <h1 className={inherited_styles.title}>What We Do</h1>
            </RevealAnimation>
            <RevealAnimation>
              <p className={inherited_styles.text}>
                The Pyoneers Club leads two main efforts: teaching and organizing competitions.
                We currently lead beginner and advanced lessons at the following schools:
                <br/><br/>&nbsp;{' > '}Burleigh Manor Middle School
                <br/>&nbsp;{' > '}Dunloggin Middle School
                <br/>&nbsp;{' > '}Centennial High School
                <br/><br/>and have been doing so since 2020! Topics involving anything from basic print statements to advanced object-oriented principles have been covered in these lessons. Alongside that, we have organized three Centennial Informatics Tournaments (CInTs), where contestants solve USACO-esque problems for cash prizes.
              </p>
            </RevealAnimation>
          </div>
          <div className={inherited_styles.pythonImageContainer}>
            <img src="/Website/logo.png" className={inherited_styles.logo} />
          </div>
        </div>

        <div className={styles.aboutcontainer}>
          <div className={inherited_styles.aboutInfoContainer}>
            <RevealAnimation>
              <h1 className={inherited_styles.title} style={{textAlign: 'center'}}>Board</h1>
            </RevealAnimation>
            <RevealAnimation>
              <p className={inherited_styles.text}>
                Put headshots and bios here
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className={styles.aboutcontainer}>
          <div className={inherited_styles.committee}>
            <RevealAnimation>
              <h1 className={inherited_styles.title} style={{textAlign: 'center'}}>Education Committee</h1>
            </RevealAnimation>
            <RevealAnimation>
              <p className={inherited_styles.text} style={{textAlign: 'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
              </p>
            </RevealAnimation>
          </div>
          <div className={inherited_styles.committee}>
            <RevealAnimation>
              <h1 className={inherited_styles.title} style={{textAlign: 'center'}}>Tournament Committee</h1>
            </RevealAnimation>
            <RevealAnimation>
              <p className={inherited_styles.text} style={{textAlign: 'center'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </main>
  )
}
