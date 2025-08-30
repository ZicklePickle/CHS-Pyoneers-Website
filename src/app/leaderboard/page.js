"use client"
import { useState, useEffect } from "react"
import { getAllUser, getUser, getUsersByIds } from "../services/userService"
import styles from "./page.module.css"

export default function Page() {
    let [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        if (leaderboard.length == 0) {
            getAllUser().then(users => {
                fetchCredits(users).then(lb => {
                    setLeaderboard(lb)
                })
            })
        }
    }, [])

    function calcCredits(user) {
        const creds = user.credits;
        return creds
    }

    async function fetchCredits(users) {
        let userCredits = []
        const entries = Object.entries(users);
        const uids = entries.map(([name, id]) => id);
        const snaps = await getUsersByIds(uids);

        for (let i = 0; i < snaps.length; i++) {
            const snap = snaps[i];
            const name = entries[i][0];
            const userData = snap.data();
            if (userData != undefined) {
                userCredits.push({ name: name, credits: calcCredits(userData) })
            }
        }

        return userCredits.sort((a, b) => b.credits - a.credits);
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
                            <p key={index}>{(index + 1) == 1 ? "🥇" : (index + 1) == 2 ? "🥈" : (index + 1) == 3 ? "🥉" : `${index + 1}. `} {entry.name} - {calcCredits(entry)} credits</p>
                        )
                    }
                </div>

            </div>
        </main>
    )
}