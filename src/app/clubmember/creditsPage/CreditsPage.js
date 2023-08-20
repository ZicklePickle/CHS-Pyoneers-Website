'use client'
import styles from './component.module.css'
import { useEffect, useState } from "react";
import { firebase } from '../../firebase/config';


export default function CreditsPage({ user, userDoc }) {

    const [totalCredits, setTotalCredits] = useState(userDoc.credits);
    const [creditBreakdown, setCreditBreakdown] = useState(userDoc.creditsBreakdown)

    return (
        <div className={styles.main}>
            <div className={styles.creditContainer}>
                <p2>You have</p2>
                <p1 className={styles.credits}>{totalCredits}</p1>
                <p2>Credits</p2>
            </div>
            <div className={styles.breakdownContainer}>
                <div className={styles.header}>
                    <h2>Credit Breakdown</h2>
                </div>
                {
                    creditBreakdown.map((opportunity, index) => (
                        <div className={styles.opportunityRow}>
                            <div className={styles.event}>
                                <p>{opportunity.for}</p>
                            </div>
                            <div className={styles.numCredits}>
                                <p>{opportunity.credits}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}