'use client'
import styles from './Component.module.css'
import {useEffect,useState} from "react";
import {firebase} from '../../firebase/config';
import {getAllUser,updateCreds} from '../../services/userService'
export default function AdminPage ({user,userDoc}) {

        const[allUsers,setAllUsers] = useState({})

        useEffect(() => {
               getUsers();
              })

        

              const getUsers = async () => {
                setAllUsers(await getAllUser());
                }

    return(
    <div className={styles.main}>
        
        <div className={styles.Container}>

          
        <div className={styles.verifyIcon}></div>
<button className='btn-primary'>Verify/Roles</button>
        </div>


         <div className={styles.Container}>

         <div className={styles.creditIcon}></div>
         <button className='btn-primary'>Manage Credits</button>

        </div>       



        <div className={styles.Container}>
<div className={styles.announcementIcon}></div>
        <button className='btn-primary'>Announcements</button>
        </div>
    </div>
    
    
    )
    
    }