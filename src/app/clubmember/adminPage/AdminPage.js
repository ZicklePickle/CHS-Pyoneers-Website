'use client'
import styles from './Component.module.css'
import { useEffect, useState } from "react";
import { firebase } from '../../firebase/config';
import { getAllUser, updateCreds } from '../../services/userService'
import VerifyModal from './verify/VerifyModal'
export default function AdminPage({ user, userDoc }) {

  const [allUsers, setAllUsers] = useState({})
  const[currentModal,setCurrentModal] = useState("none")

  useEffect(() => {
    getUsers();
    console.log(allUsers)
  },[])

  const getUsers = async () => {
    setAllUsers(await getAllUser());
  }

  const closeModal = () =>{
setCurrentModal('none')
  }
  return (
    <div className={styles.main}>

      <div className={styles.Container}>
        <div className={styles.verifyIcon}></div>
        <button onClick={()=>setCurrentModal('verify')} className='btn-primary'>Verify/Roles</button>
      </div>


      <div className={styles.Container}>

        <div className={styles.creditIcon}></div>
        <button className='btn-primary'>Manage Credits</button>

      </div>



      <div className={styles.Container}>
        <div className={styles.announcementIcon}></div>
        <button className='btn-primary'>Announcements</button>
      </div>


      {currentModal=="verify"? <VerifyModal closeModal={closeModal} Users={allUsers}/> : <></>}


    </div>


  )

}