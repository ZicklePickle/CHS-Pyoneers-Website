import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homecontainer}>
        <img src="/logo.png" className={styles.logo} />
        <div>
          <h1 className={styles.title}>CHS Pyoneers</h1>
          <p>Some subtitle text goes here...</p>
          <div className={styles.btngroup}>
              <button className='btn-primary'>Log Attendance</button>
              <button className='btn-secondary'>View Credits</button>
          </div>
        </div>
      </div>
    </main>
  )
}
