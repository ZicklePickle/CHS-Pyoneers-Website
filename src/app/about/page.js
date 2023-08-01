import styles from "./page.module.css"

export default function Page() {
    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>About</h1>
            <div className={styles.missionContainer}>
                <h2 className={styles.subheading}>Our Mission</h2>
                <p classname={styles.blurbText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Praesent tristique magna sit amet purus gravida quis. Proin libero nunc consequat interdum varius. 
                    Ut sem nulla pharetra diam sit. Etiam sit amet nisl purus in mollis nunc. Eros in cursus turpis massa tincidunt. 
                    Id consectetur purus ut faucibus pulvinar elementum integer. Sit amet tellus cras adipiscing. 
                    Luctus accumsan tortor posuere ac ut. Sagittis eu volutpat odio facilisis mauris sit amet. 
                    Pretium lectus quam id leo in vitae turpis. Volutpat lacus laoreet non curabitur gravida arcu ac. 
                    Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ultrices dui sapien eget mi proin. 
                    Non curabitur gravida arcu ac tortor dignissim. Amet nisl suscipit adipiscing bibendum est. 
                    Non curabitur gravida arcu ac tortor. Sed egestas egestas fringilla phasellus.
                </p>
            </div>
            <div className={styles.statsContainer}>
                <h2 className={styles.subheading}>What We've Accomplished</h2>
                <p classname={styles.blurbText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Praesent tristique magna sit amet purus gravida quis. Proin libero nunc consequat interdum varius. 
                    Ut sem nulla pharetra diam sit. Etiam sit amet nisl purus in mollis nunc. Eros in cursus turpis massa tincidunt. 
                    Id consectetur purus ut faucibus pulvinar elementum integer. Sit amet tellus cras adipiscing. 
                    Luctus accumsan tortor posuere ac ut. Sagittis eu volutpat odio facilisis mauris sit amet. 
                    Pretium lectus quam id leo in vitae turpis. Volutpat lacus laoreet non curabitur gravida arcu ac. 
                    Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ultrices dui sapien eget mi proin. 
                    Non curabitur gravida arcu ac tortor dignissim. Amet nisl suscipit adipiscing bibendum est. 
                    Non curabitur gravida arcu ac tortor. Sed egestas egestas fringilla phasellus.
                </p>
            </div>
            <div className={styles.committeeContainer}>
                <h2 className={styles.subheading}>Committees</h2>
                <p className={styles.subtext}>The club consists of two committees:</p>
                <div className={styles.committeeGroup}>
                    <div className={styles.committee}>
                        <h3 className={styles.subsubheading}>Education Committee</h3>
                        <p classname={styles.blurbText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Praesent tristique magna sit amet purus gravida quis. Proin libero nunc consequat interdum varius. 
                            Ut sem nulla pharetra diam sit. Etiam sit amet nisl purus in mollis nunc. Eros in cursus turpis massa tincidunt. 
                            Id consectetur purus ut faucibus pulvinar elementum integer. Sit amet tellus cras adipiscing. 
                            Luctus accumsan tortor posuere ac ut. Sagittis eu volutpat odio facilisis mauris sit amet. 
                            Pretium lectus quam id leo in vitae turpis. Volutpat lacus laoreet non curabitur gravida arcu ac. 
                            Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ultrices dui sapien eget mi proin. 
                            Non curabitur gravida arcu ac tortor dignissim. Amet nisl suscipit adipiscing bibendum est. 
                            Non curabitur gravida arcu ac tortor. Sed egestas egestas fringilla phasellus.
                        </p>
                    </div>
                    <div className={styles.committee}>
                        <h3 className={styles.subsubheading}>Tournament Committee</h3>
                        <p classname={styles.blurbText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Praesent tristique magna sit amet purus gravida quis. Proin libero nunc consequat interdum varius. 
                            Ut sem nulla pharetra diam sit. Etiam sit amet nisl purus in mollis nunc. Eros in cursus turpis massa tincidunt. 
                            Id consectetur purus ut faucibus pulvinar elementum integer. Sit amet tellus cras adipiscing. 
                            Luctus accumsan tortor posuere ac ut. Sagittis eu volutpat odio facilisis mauris sit amet. 
                            Pretium lectus quam id leo in vitae turpis. Volutpat lacus laoreet non curabitur gravida arcu ac. 
                            Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ultrices dui sapien eget mi proin. 
                            Non curabitur gravida arcu ac tortor dignissim. Amet nisl suscipit adipiscing bibendum est. 
                            Non curabitur gravida arcu ac tortor. Sed egestas egestas fringilla phasellus.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.boardContainer}>
                <h2 className={styles.subheading}>Meet the Board</h2>
            </div>
        </main>
    )
}