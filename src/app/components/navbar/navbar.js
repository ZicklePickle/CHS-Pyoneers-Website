import styles from './component.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href='/' className={styles.name}><span>&gt;</span>Pyoneers</a>
      <a className={styles.navlink} href='/about'>About</a>
      <a className={styles.navlink} href='/cint'>CInT</a>
      <a className={styles.navlink} href='/contact'>Contact</a>
      
    </nav>
  )
}
