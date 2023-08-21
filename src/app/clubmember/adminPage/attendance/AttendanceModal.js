'use client'
import styles from './component.module.css'
import { useEffect, useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
import { allowAttendanceLogging, getAttendance, logAttendanceFor, setAllowAttendanceLogging } from '../../../services/attendanceService';
export default function AttendanceModal({ Users, closeModal }) {
  let [allowLogging, setAllowLogging] = useState(false)
  let [allNames, setAllNames] = useState(Object.keys(Users))
  let [selectedUsers, setSelectedUsers] = useState([])
  let [date, setDate] = useState(null)

  useEffect(() => {
    allowAttendanceLogging().then(allow => setAllowLogging(allow))
  }, [])

  async function updateAttendanceLogConfig(e) {
    let allow = e.target.checked
    setAllowLogging(allow)
    await setAllowAttendanceLogging(allow)
  }

  function dateChanged(e) {
    let dateStr = e.target.value;
    console.log(new Date(Date.parse(dateStr)))
    setDate(new Date(Date.parse(dateStr)))
  }

  async function showAttendanceLog() {
    if(date) {
      let logSnap = (await getAttendance(date))
      let log = logSnap ? logSnap.data() : null
      if(log) {
        alert(`
          Attendance for ${log.date.toDate().toString()}:\n
          ${
            log.users.map(id => `${getNameForId(id)} - Present`).join("\n")
          }
        `)
      } else {
        alert("No attendance records found for the date selected!")
      }
    } else {
      alert("No date selected!")
    }
  }

  function getNameForId(id) {
    for(let [displayName, uid] of Object.entries(Users)) {
      if(id == uid) return displayName;
    }

    return null;
  }

  async function updateAttendance() {
    if(!date) {
      alert("No date selected!")
      return
    }

    selectedUsers.forEach(async (name) => {
      let uid = Users[name]
      
      await logAttendanceFor(uid, date)
    })

    alert("Attendance Updated!")
  }

  return (
    <div className={styles.main}>
      <p1>Attendance</p1>
      <div>
        <input className={styles.allowLoggingBox} type="checkbox" id="allowLogging" name="allowLogging" defaultChecked={allowLogging} onChange={e => updateAttendanceLogConfig(e)} />
        <label for="allowLogging">Allow Attendance Logging</label>
      </div>
      <div className={styles.list}>
        <p>Manage Attendance For: </p>
        <input type="date" onChange={e => dateChanged(e)}></input> <br />
        <button className='btn-secondary' onClick={showAttendanceLog}>View Attendace</button>

        <p>Mark users present for the date selected above </p>
        <div className={styles.list}>
          <Multiselect
            isObject={false}
            onKeyPressFn={function noRefCheck() { }}
            onRemove={(event) => {
              setSelectedUsers(event);
              console.log(event)
            }}
            onSearch={function noRefCheck() { }}
            onSelect={(event) => {
              setSelectedUsers(event);
            }}
            options={allNames}

            style={
              {
                option: {
                  color: 'black',
                },
                inputField: {
                  color: 'white',
                },
              }
            }
          />
          <button className='btn-secondary' onClick={updateAttendance}>Update</button>
        </div>
      </div>
      <button className="btn-primary" onClick={closeModal}>Close</button>
    </div>
  )
}
