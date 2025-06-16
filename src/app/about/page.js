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
            <img src="/logo.png" className={inherited_styles.logo} />
          </div>
        </div>

          <div className={inherited_styles.aboutInfoContainer}>
            <RevealAnimation>
              <h1 className={inherited_styles.title} style={{textAlign: 'center'}}>Meet the Board</h1>
            </RevealAnimation>
            <RevealAnimation> 
            <div className={styles.boardContainer}>
              <div className={styles.boardMember}>
                <img src="/board/joshua_headshot.png" alt="Joshua Oh" className={styles.boardImage} />
                <h2 className={styles.boardName}>Joshua Oh</h2>
                <p className={styles.boardPosition}>President</p>
                <p className={styles.boardBio}>
                  Joshua is a senior at Centennial High School, where he is the president of CHS Pyoneers. He is also the director for QuHacks and the vice president of French Club. In his free time, he enjoys programming, collecting records, and playing the Alto Saxophone.
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/board/rana_headshot.png" alt="Rana Pratap Cherukuri" className={styles.boardImage} />
                <h2 className={styles.boardName}>Rana Pratap Cherukuri</h2>
                <p className={styles.boardPosition}>President</p>
                <p className={styles.boardBio}>
                  Rana is a senior at Centennial High School with a passion for technology, problem-solving, and collaboration. At CHS, he is actively involved in tech clubs and various honor societies. Outside of school, Rana enjoys looking for new challenges and opportunities to grow via internships. In his free time, he loves watching Marvel, playing Pokémon, and listening to music. 
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/board/lak_headshot.png" alt="Lakshith Senthil" className={styles.boardImage} />
                <h2 className={styles.boardName}>Lakshith Senthil</h2>
                <p className={styles.boardPosition}>Vice President</p>
                <p className={styles.boardBio}>
                  Lakshith is a junior at Centennial High School, where he is the Vice President of CHS Pyoneers. He was also in the Class Board of 2027 and National Math Honor Society. In his free time, he enjoys playing chess, programming, and watching different shows.
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/board/evan_headshot.png" alt="Evan Luo" className={styles.boardImage} />
                <h2 className={styles.boardName}>Evan Luo</h2>
                <p className={styles.boardPosition}>Secretary</p>
                <p className={styles.boardBio}>
                  Evan is a sophomore at Centennial High School and is currently the secretary of CHS Pyoneers. He also participates in Centennial's Competitive Coding Club and competes in FTC Robotics and VEX Robotics. In his free time, he enjoys playing video games, playing soccer, watching different movies and shows, and programming.
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/board/taha_headshot.png" alt="Taha Ahmed" className={styles.boardImage} />
                <h2 className={styles.boardName}>Taha Ahmed</h2>
                <p className={styles.boardPosition}>PR Manager</p>
                <p className={styles.boardBio}>
                  Taha is a sophmore at Centennial High School where he is the PR Manager of Pyoneers. He loves to be funny and to help others. He also enjoys wrestling, playing soccer video games, and taking care of his chickens. Outside of school he frequently volunteers at Miller Library and Howard County parks and recs.
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/board/jayson_headshot.png" alt="Jayson Liu" className={styles.boardImage} />
                <h2 className={styles.boardName}>Jayson Liu</h2>
                <p className={styles.boardPosition}>Member at Large</p>
                <p className={styles.boardBio}>
                  Jayson is a junior at Centennial High School, where he is the Member at Large of CHS Pyoneers. He is also the Member at Large for CHS Competitive Programming Club. In his free time, he enjoys playing the piano, programming, and running.
                </p>
              </div>
              <div className={styles.boardMember}>
                <img src="/board/zach_headshot.png" alt="Zachary Schmelzer" className={styles.boardImage} />
                <h2 className={styles.boardName}>Zachary Schmelzer</h2>
                <p className={styles.boardPosition}>Webmaster</p>
                <p className={styles.boardBio}>
                  Zachary is a sophomore at Centennial High School, where he is the Webmaster of CHS Pyoneers. He is also part of Centennial's Competitive Coding Club, Web Development Club, and competes in FTC Robotics. When outside the classroom, he likes to participate in hackathons, program bots for fun websites, and create full-stack web applications.
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
