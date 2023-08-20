"use client"
import { useState, useEffect } from "react"
import {getAllUser, getUser} from "../services/userService"
import styles from "./page.module.css"

export default function Page() {
    let [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        if(leaderboard.length == 0) {
            getAllUser().then(users => {
                fetchCredits(users).then(lb => {
                    console.log(lb)
                    setLeaderboard(lb)
                })
            })
        }
    }, [])

    function calcCredits(user) {
        const creds = user.creditsBreakdown.reduce((accum, curVal) => accum + curVal.credits, 0)
        console.log(creds)
        return creds
    }

    async function fetchCredits(users) {
        let userCredits = []
        for(const [name, id] of Object.entries(users)) {
            let userData = (await getUser(id)).data();
            userCredits.push({
                name: name,
                credits: calcCredits(userData)
            })
        }

        return userCredits.sort((a, b) => a.credits - b.credits);
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.headertext}>Credit Leaderboard</h1>
                </div>
                <div className={styles.leaderboard}>
                {
                    leaderboard.map((entry, index) => 
                        <p>{index+1}. {entry.name} - {entry.credits} credits</p>
                    )
                }
                </div>
                
            </div>
        </main>
    )
}