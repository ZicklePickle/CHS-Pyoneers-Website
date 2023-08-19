'use client'
import styles from './Component.module.css'
import { useEffect, useState } from "react";
import Multiselect from 'multiselect-react-dropdown';

import { getAllUser, updateCreds,updatePermissions } from '../../../services/userService'
import { color } from 'framer-motion';
export default function VerifyModal({ Users, closeModal }) {
    const [allNames, setAllNames] = useState(Object.keys(Users))
    const [selectedUsers,setSelectedUsers] = useState([])
    const [isVerified,setVerified] = useState(true)
    const [role,setRole] = useState('student')

    const handleUpdate = async() =>{

        selectedUsers.map((name)=>updatePermissions(Users[name],role,isVerified));

        alert('users updated');

        closeModal();

    }
  
    return (
      <div className={styles.main}>

        <p1>Users</p1>
        <div className={styles.list}>
        <Multiselect
  isObject={false}



  onKeyPressFn={function noRefCheck(){}}
  onRemove={(event)=>{
    setSelectedUsers(event);
    console.log(event)
  }}
  onSearch={function noRefCheck(){}}
  onSelect={(event)=>{
    setSelectedUsers(event);
  }}
  options={allNames}

  style={
    {
        option:{
            color:'black',
        },
        inputField:{
            color:'white',
        },
    }
  }

/>
</div>

<p1>Verified</p1>

<div className={styles.btnContainer}>

<button className={isVerified?'btn-primary':'btn-secondary'} onClick={()=>setVerified(true)}>Yes</button>
<button className={!isVerified?'btn-primary':'btn-secondary'} onClick={()=>setVerified(false)}>No</button>

</div>

<p1>Role</p1>

<div className={styles.btnContainer}>

<button className={role=='student'?'btn-primary':'btn-secondary'} onClick={()=>setRole('student')}>Student</button>
<button className={role=='instructor'?'btn-primary':'btn-secondary'} onClick={()=>setRole('instructor')}>Instructor</button>
<button className={role=='admin'?'btn-primary':'btn-secondary'} onClick={()=>setRole('admin')}>Admin</button>
</div>



<button onClick={()=>handleUpdate()} className='btn-primary'>Confirm</button>
        
      </div>
    )
  }
  