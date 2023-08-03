"use client"; // next js kinda weird need to add this.
import styles from './component.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar() {

  const scrollToComponent = (id) => {
    const targetComponent = document.getElementById(id); // Adjust the ID as needed
    if (targetComponent) {
      targetComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={styles.navbar}>
      <a href='/' className={styles.name}><span>&gt;</span>Pyoneers</a>
      <a className={styles.navlink} href='/about'>About</a>
      <a className={styles.navlink} href='/cint'>CInT</a>
      <a className={styles.navlink} href='/contact'>Contact</a>
      
    </nav>
  )
}
