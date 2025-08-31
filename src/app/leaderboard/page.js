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

    function calcCredits(userOrEntry) {
        if (userOrEntry == null) return 0;
        if (typeof userOrEntry === "number") return userOrEntry;
        if (typeof userOrEntry === "object" && "credits" in userOrEntry) return userOrEntry.credits || 0;
        return 0;
    }

    function parseDate(dateStr) {
        if (!dateStr) return NaN;
        const d = new Date(dateStr);
        if (!isNaN(d)) return d.getTime();
        const parts = String(dateStr).split("-").map(p => p.trim());
        if (parts.length === 3) {
            let [a, b, c] = parts
            const month = parseInt(a, 10) - 1
            const day = parseInt(b, 10)
            const year = parseInt(c, 10)
            const tryDate = new Date(year, month, day);
            if (!isNaN(tryDate)) return tryDate.getTime();
        }
        return NaN;
    }

    function computeDateAchieved(userData) {
        if (!userData || typeof userData.credits !== "number") return Infinity;
        const target = userData.credits;
        const breakdown = Array.isArray(userData.creditsBreakdown) ? userData.creditsBreakdown.slice() : [];
        if (breakdown.length === 0) {
            return Infinity;
        }
        const withTimes = breakdown.map(item => {
            const t = parseDate(item.date)
            return {
                credits: Number(item.credits) || 0,
                time: isNaN(t) ? Infinity : t
            };
        })
        withTimes.sort((a, b) => a.time - b.time)
        let acc = 0;
        for (let i = 0; i < withTimes.length; i++) {
            acc += withTimes[i].credits;
            if (acc >= target) {
                return withTimes[i].time;
            }
        }
        return Infinity;
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
                const displayName = userData.displayName || name;
                const credits = calcCredits(userData);
                const dateAchieved = computeDateAchieved(userData);
                userCredits.push({
                    name: displayName,
                    credits: credits,
                    dateAchieved: dateAchieved
                });
            }
        }

        return userCredits.sort((a, b) => {
            if (b.credits !== a.credits) return b.credits - a.credits
            if (a.dateAchieved !== b.dateAchieved) {
                return (a.dateAchieved || Infinity) - (b.dateAchieved || Infinity)
            }
            const na = (a.name || "").toLowerCase()
            const nb = (b.name || "").toLowerCase()
            if (na < nb) return -1
            if (na > nb) return 1
            return 0
        });
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