import styles from './component.module.css'

export default function Footer() {
  return (
    <main className={styles.container}>
        <div className={styles.col}>
            <a href="/" className={styles.sectionheader}>CHS Pyoneers</a>
            <a className={styles.navlink} href="mailto:chspyoneers@gmail.com">Email</a>
            <a className={styles.navlink} href="<LINK HERE>">Join our Discord!</a>
        </div>
        <div className={styles.col}>
            <h3 className={styles.sectionheader}>Site Links</h3>
            <a className={styles.navlink} href='/about'>&gt; About</a>
            <a className={styles.navlink} href='/cint'>&gt; CInT</a>
            <a className={styles.navlink} href='/contact'>&gt; Contact</a>
        </div>
        <div className={styles.lastcol}>
            <h3 className={styles.sectionheader}>Contributors</h3>
            <p className={styles.contribs}>List of contibutors goes here</p>
        </div>
    </main>
  )
}