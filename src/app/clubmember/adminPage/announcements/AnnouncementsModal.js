'use client'
import styles from './Component.module.css'
import { useEffect, useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
import {motion} from "framer-motion";
import { RevealAnimation } from '../../../components/revealAnimation/RevealAnimation';
import { addAnnouncements,getAnnouncements,deleteAnnouncement } from '../../../services/announcementService'
import { color } from 'framer-motion';
export default function AnnouncementsModal({ Users, closeModal }) {
    const [allAnnouncements, setAllAnnouncements] = useState([])
    const [selectedAnnouncements,setSelectedAnnouncements] = useState([])
    const [word,setWord] = useState('')
    const [link,setLink] = useState('')
    const [newAnnouncement,setNewAnnouncement] = useState('');
    const [currentPage,setCurrentPage] = useState('add')
    const [allData,setAllData] = useState()

    useEffect(() => {
      async function fetchAnnouncements() {
        try {
          const fetchedData = await getAnnouncements();
          setAllData(fetchedData)
          console.log('Fetched Data:', fetchedData);
    
          setAllAnnouncements(prevAnnouncements => [
            ...prevAnnouncements,
            ...fetchedData.map(item => item.announcement),
          ]);
    
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    
      fetchAnnouncements();
    }, []);
    

    const handleUpdate = async() =>{

        try{
          if(newAnnouncement.length<1){
            alert("please enter a valid announcement");
            return;
          }
          addAnnouncements(newAnnouncement,[word,link])

          alert("announcemented added")
        }catch{
          alert("there was an error, please contact an admin")
        }

        closeModal();

    }
    const handleDelete = async() =>{

      try{
       deleteAnnouncement(allData,selectedAnnouncements)
       alert("announcemetns deleted")
      }catch{
        alert("err: please contact an admin")
      }
        closeModal();
    
       
     

      closeModal();
    }
    const handleCancel = () =>{
      setNewAnnouncement('');
      setWord('');
      setLink('');
      setSelectedAnnouncements([])
      closeModal();

    }
  
    return (
      
      <motion.div transition={{duration:.4,delay:.1}} initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} className={styles.main}>
        

        <p1 className={styles.title}>Announcements</p1>

        






<div className={styles.btnContainer}>

<button className={currentPage=="add"?'btn-primary':'btn-secondary'} onClick={()=>setCurrentPage("add")}>Add</button>
<button className={currentPage=="delete"?'btn-primary':'btn-secondary'} onClick={()=>setCurrentPage("delete")}>Delete</button>

</div>
<p1>Announcement</p1>

{currentPage=="add"?(
  <><div className={styles.btnContainer}>

  <textarea
            className={styles.inputReason}
           
            onChange={(e) => setNewAnnouncement(e.target.value)}
          />
  </div>
  
  <p1>Embeded link Word</p1>
  
  <div className={styles.btnContainer}>
  
  <textarea
            className={styles.inputLink}
           
            onChange={(e) => setWord(e.target.value)}
          />
  </div>
  
  <p1>Embeded link url</p1>
  
  <div className={styles.btnContainer}>
  
  <textarea
            className={styles.inputLink}
           
            onChange={(e) => setLink(e.target.value)}
          />
  </div>
  <button onClick={()=>handleCancel()} className='btn-secondary'>Cancel</button>
  <button onClick={()=>handleUpdate()} className='btn-primary'>Confirm</button></>
):(

  <>


<div className={styles.list}>
        <Multiselect
  isObject={false}



  onKeyPressFn={function noRefCheck(){}}
  onRemove={(event)=>{
    setSelectedAnnouncements(event);
    console.log(event)
  }}
  onSearch={function noRefCheck(){}}
  onSelect={(event)=>{
    setSelectedAnnouncements(event);
  }}
  options={allAnnouncements}

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

<button onClick={()=>handleCancel()} className='btn-secondary'>Cancel</button>
  <button onClick={()=>handleDelete()} className='btn-primary'>Delete</button>
  
  </>
)}

</motion.div>
      
    )
  }
  