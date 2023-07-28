import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homecontainer}>
        <img src="/logo.png" className={styles.logo} />
        <div>
          <span className={styles.title}>CHS Pyoneers</span>
          <p>Some subtitle text goes here...</p>
          <div className={styles.btngroup}>
              <button className='btn-primary'>Log Attendance</button>
              <button className='btn-secondary'>View Credits</button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1>Header Text</h1>
        <h2>Header Text</h2>
        <h3>Header Text</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis. Proin libero nunc consequat interdum varius. Ut sem nulla pharetra diam sit. Etiam sit amet nisl purus in mollis nunc. Eros in cursus turpis massa tincidunt. Id consectetur purus ut faucibus pulvinar elementum integer. Sit amet tellus cras adipiscing. Luctus accumsan tortor posuere ac ut. Sagittis eu volutpat odio facilisis mauris sit amet. Pretium lectus quam id leo in vitae turpis. Volutpat lacus laoreet non curabitur gravida arcu ac. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ultrices dui sapien eget mi proin. Non curabitur gravida arcu ac tortor dignissim. Amet nisl suscipit adipiscing bibendum est. Non curabitur gravida arcu ac tortor. Sed egestas egestas fringilla phasellus.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis. Proin libero nunc consequat interdum varius. Ut sem nulla pharetra diam sit. Etiam sit amet nisl purus in mollis nunc. Eros in cursus turpis massa tincidunt. Id consectetur purus ut faucibus pulvinar elementum integer. Sit amet tellus cras adipiscing. Luctus accumsan tortor posuere ac ut. Sagittis eu volutpat odio facilisis mauris sit amet. Pretium lectus quam id leo in vitae turpis. Volutpat lacus laoreet non curabitur gravida arcu ac. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ultrices dui sapien eget mi proin. Non curabitur gravida arcu ac tortor dignissim. Amet nisl suscipit adipiscing bibendum est. Non curabitur gravida arcu ac tortor. Sed egestas egestas fringilla phasellus.
        </p>
      </div>
    </main>
  )
}
