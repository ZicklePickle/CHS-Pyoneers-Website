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

          <div className={inherited_styles.aboutInfoContainer}>
            <RevealAnimation>
              <h1 className={inherited_styles.title} style={{textAlign: 'center'}}>Meet the Board</h1>
            </RevealAnimation>
            <RevealAnimation>
            <div className={styles.boardContainer}>
              <div className={styles.boardMember}>
                <img src="/Website/caleb_headshot.jpg" alt="Board Member" className={styles.boardImage} />
                <h2 className={styles.boardName}>Caleb Shim</h2>
                <p className={styles.boardPosition}>President</p>
                <p className={styles.boardBio}>
                Caleb Shim is a junior at Centennial High School who is a writer for the Tournament Committee of CHS Pyoneers. He enjoys growing his programming skills and participating in competitions. He is also a member of the CHS math team and the National Math Honor Society. In his free time, he likes playing the piano, playing basketball and videogames with his friends, and procrastinating.
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/Website/joel_headshot.jpg" alt="Board Member" className={styles.boardImage} />
                <h2 className={styles.boardName}>Joel Chemmanur</h2>
                <p className={styles.boardPosition}>Vice President</p>
                <p className={styles.boardBio}>
                Joel is a junior at Centennial High School and one of the problem writers for the Tournament Committee of the CHS Pyoneers. He is also a member of Science Olympiad, FIRST Tech Challenge, and the CHS Competitive Coding club. In his free time, he likes talking to friends, playing various video games, and working on random Python scripts and programs for fun.
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/Website/anurag_headshot.jpg" alt="Board Member" className={styles.boardImage} />
                <h2 className={styles.boardName}>Anurag Sodhi</h2>
                <p className={styles.boardPosition}>Vice President</p>
                <p className={styles.boardBio}>
                  Anurag is a senior at Centennial High School, where he is the Vice President of CHS Pyoneers. He is also a member of the National Math Honor Society, It's Academic, Science Bowl, Science Olympiad, Math Team, Speech and Debate, and Science Journal. Outside of school, Anurag enjoys Tetris, biking, reading chemistry textbooks, and being better than Daeyong at toughlovearena.com.
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/Website/aryan_headshot.jpg" alt="Board Member" className={styles.boardImage} />
                <h2 className={styles.boardName}>Aryan Sharma</h2>
                <p className={styles.boardPosition}>Secretary</p>
                <p className={styles.boardBio}>
                  Aryan is a junior at Centennial High School, where he is part of the education and tournament committees on Pyoneers. Alongside that, he's a member of the CHS Math Team and CHS AI Club. Some of his favorite hobbies include wasting time on FIFA, playing football and basketball, and learning about recent machine learning advances. Sometimes, he attempts to read recent AI papers.
                </p>
              </div>

              <div className={styles.boardMember}>
                <img src="/Website/jaden_headshot.jpg" alt="Board Member" className={styles.boardImage} />
                <h2 className={styles.boardName}>Jaden Li</h2>
                <p className={styles.boardPosition}>Credit Chair</p>
                <p className={styles.boardBio}>
                  Jaden is a junior at Centennial High School, where he is a problem writer for the Tournament Committee of CHS Pyoneers and an educator for the Dunloggin Middle School branch of the Education Committee. He is also a member of Science Olympiad, the CHS Math Team, and the varsity tennis team. In his free time, he enjoys improving his programming and math skills, practicing the piano and cello, playing tennis with friends, and playing videogames on his switch (Mario Kart is his specialty).
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/Website/ramy_headshot.jpeg" alt="Board Member" className={styles.boardImage} />
                <h2 className={styles.boardName}>Ramy Kaddouri</h2>
                <p className={styles.boardPosition}>Education Chair</p>
                <p className={styles.boardBio}>
                  Ramy is a senior at Centennial High School, where he is part of the Centennial Competitive Coding club board, a problem writer for the Pyoneers Tournament Committee, and an author for the CHS Math Journal. Ramy is also an organizer for QuHacks, a local project-based hackathon. In his free time, he enjoys competing in programming competitions, working on side projects, reading the news, and wasting too much time tinkering with flight simulators (X-Plane {'>'} MSFS).
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/Website/jasir_headshot.jpg" alt="Board Member" className={styles.boardImage} />
                <h2 className={styles.boardName}>Jasir Siddiqui</h2>
                <p className={styles.boardPosition}>Treasurer</p>
                <p className={styles.boardBio}>
                Caleb Shim is a junior at Centennial High School who is a writer for the Tournament Committee of CHS Pyoneers. He enjoys growing his programming skills and participating in competitions. He is also a member of the CHS math team and the National Math Honor Society. In his free time, he likes playing the piano, playing basketball and videogames with his friends, and procrastinating.
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/Website/nicole_headshot.png" alt="Board Member" className={styles.boardImage} />
                <h2 className={styles.boardName}>Nicole Luo</h2>
                <p className={styles.boardPosition}>PR Manager</p>
                <p className={styles.boardBio}>
                Nicole is a junior at Centennial High School, where she is a member of SGA, her Class Board, and various other clubs. She is currently also an intern for the non-profit organization Code Your Chances, a group that aims to break down gender barriers in STEM. In her free time, she loves to listen to music and rewatch Ratatouille.
                </p>
              </div>
            </div>
            </RevealAnimation>
          </div>

        <div className={styles.aboutcontainer}>
          <div className={inherited_styles.committee}>
            <RevealAnimation>
              <h1 className={inherited_styles.title} style={{textAlign: 'center'}}>Education Committee</h1>
            </RevealAnimation>
            <RevealAnimation>
              <p className={inherited_styles.text} style={{textAlign: 'center'}}>
                The education committee is in charge of lessons! They teach both virtually and in-person at our schools. All instructors are qualified to teach beginner and advanced lessons, and they pass interviews before becoming teachers. Applications to join the committee open near the first or second month of the school year.
              </p>
            </RevealAnimation>
          </div>
          <div className={inherited_styles.committee}>
            <RevealAnimation>
              <h1 className={inherited_styles.title} style={{textAlign: 'center'}}>Tournament Committee</h1>
            </RevealAnimation>
            <RevealAnimation>
              <p className={inherited_styles.text} style={{textAlign: 'center'}}>
              The tournament committee handles everything CInT! It's split into two portions: the marketing team and the informatics team. Marketing team handles sponsorships, while the informatics team writes problems for competition day. Applications to join the committee open near the first or second month of the school year.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </main>
  )
}
