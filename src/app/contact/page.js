"use client";
import React, { useEffect } from 'react';
import styles from './page.module.css';
import { RevealAnimation } from "../components/revealAnimation/RevealAnimation";
import Typewriter from 'typewriter-effect/dist/core';

export default function Home() {
  const typewriterStrings = ['<font color="#f27fa5">Instagram</font>', '<font color="#b699d8">Discord</font>', '<font color="#d87f33">e-mail</font>'];

  useEffect(() => {
    const instance = new Typewriter('#typewriter', {
      strings: typewriterStrings,
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.homecontainer}>
        <div className={styles.textContainer}>
          <RevealAnimation>
            <span className={styles.title}>Contact Us</span>
            <p className={styles.subtext}>Have questions or want to reach out? Contact us via <span id="typewriter" className={styles.typewriter}></span></p>
            <p className={styles.responseTime}>Replies can take anywhere from 1-2 days; please join our Discord and DM/ping us for the fastest reply time.</p>
          </RevealAnimation>
        </div>
        <div className={styles.buttonsContainer}>
          <a href="https://www.instagram.com/chspyoneers/" target="_blank" className={`${styles.btn} ${styles.instagram}`}>
            Instagram
          </a>
          <a href="https://discord.gg/c4RF24rUp8s" target="_blank" className={`${styles.btn} ${styles.discord}`}>
            Discord
          </a>
          <a href="mailto:chspyoneers@gmail.com" className={`${styles.btn} ${styles.email}`}>
            Email
          </a>
        </div>
      </div>
    </main>
  );
}

