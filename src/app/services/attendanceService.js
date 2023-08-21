import { firebase } from '../firebase/config';
import {updateDoc, arrayUnion} from "firebase/firestore"


function dateString(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    const dateStr = ('0' + month).slice(-2)
            + ('0' + day).slice(-2)
            + ('' + year).slice(-2);
    return dateStr;
}

async function logAttendanceFor(uid, date) {
    const dateStr = dateString(date)
            
    await logAttendanceForStr(uid, dateStr)
}

async function logAttendanceForStr(uid, dateStr) {
    const dayRef = firebase.firestore().collection("attendance").doc(dateStr);
    const daySnapshot = await dayRef.get()
    
    if(daySnapshot.exists) {
        await updateDoc(
            dayRef,
            {
                users: arrayUnion(uid)
            }
        )
    } else {
        const newAttendanceData = {
            date: date,
            users: [uid]
        }

        await dayRef.set(newAttendanceData)
    }
}

async function getAttendance(date) {
    const dateStr = dateString(date)
    return await getAttendanceForStr(dateStr);
}

async function getAttendanceForStr(dateStr) {
    const dayRef = firebase.firestore().collection("attendance").doc(dateStr);
    const daySnapshot = await dayRef.get()

    if(daySnapshot.exists) {
        return daySnapshot
    } else {
        return null;
    }
}

async function allowAttendanceLogging() {
    const config = (await firebase.firestore().collection("config").doc("attendance").get()).data();
    return config.allowLogging;
}

async function setAllowAttendanceLogging(allow) {
    const configRef = firebase.firestore().collection("config").doc("attendance");
    
    await configRef.update({
        allowLogging: allow
    })
}

async function isPresent(uid, date) {
    const dateStr = dateString(date)
    const dayRef = firebase.firestore().collection("attendance").doc(dateStr);
    const daySnapshot = await dayRef.get()
    
    if(daySnapshot.exists) {
        let att = daySnapshot.data()
        if(att.users.includes(uid)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export {
    dateString,
    isPresent,
    allowAttendanceLogging,
    setAllowAttendanceLogging,
    getAttendanceForStr,
    logAttendanceForStr,
    logAttendanceFor,
    getAttendance,
}