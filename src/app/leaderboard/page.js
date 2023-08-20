"use client"
import { useState, useEffect } from "react"
import {getAllUser} from "../services/userService"
import styles from "./page.module.css"

export default function Page() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        console.log(users)
        if(users.length == 0) {
            getAllUser().then(u => {
                console.log(u)
                u.sort((a, b) => calcCredits(a) - calcCredits(b))
                setUsers(u)
            })
        }
    }, [users])

    function calcCredits(user) {
        const creds = user.creditsBreakdown.reduce((accum, curVal) => accum + curVal)
        return creds
    }

    return (
        <main className={styles.main}>
            <div>
                <ol>
                    
                </ol>
            </div>
        </main>
    )
}