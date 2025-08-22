import styles from './component.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <main className={styles.container}>
        <div className={styles.col}>
            <Link href="/" className={styles.sectionheader}>CHS Pyoneers</Link>
            <a className={styles.navlink} href="mailto:chspyoneers@gmail.com">Email</a>
            <a className={styles.navlink} href="https://discord.gg/rv3pBqQUcX">Join our Discord!</a>
        </div>
        <div className={styles.col}>
            <h3 className={styles.sectionheader}>Site Links</h3>
            <Link className={styles.navlink} href='/about'>&gt; About</Link>
            <Link className={styles.navlink} rel="noreferrer noopener" target="_blank" href='https://cint.info'>&gt; CInT</Link>
            <Link className={styles.navlink} href='/contact'>&gt; Contact</Link>
        </div>
        <div className={styles.lastcol}>
            <h3 className={styles.sectionheader}>Contributors</h3>
            <p className={styles.contribs}>
              Daud Idrees<br/>
              Ramy Kaddouri<br/>
              Jaden Li<br/>
              Aryan Sharma<br/>
              Zachary Schmelzer<br/>
            </p>
        </div>
    </main>
  )
}
