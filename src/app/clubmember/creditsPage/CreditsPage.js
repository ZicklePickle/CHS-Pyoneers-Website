'use client'
import styles from './Component.module.css'
import {useEffect,useState} from "react";
import {firebase} from '../../firebase/config';


export default function CreditsPage ({user,userDoc}) {

    const[totalCredits,setTotalCredits] = useState(userDoc.credits);

return(
<div className={styles.main}>
    <div className={styles.creditContainer}>
    <p2>You have</p2>
    <p1 className={styles.credits}>{totalCredits}</p1>
    <p2>Credits</p2>
    </div>
</div>


)

}