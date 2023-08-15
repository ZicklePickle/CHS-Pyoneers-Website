'use client';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider, firebase } from '../firebase/config'; // Make sure to import the firestore object
import styles from './page.module.css'
import { useState,useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { Component } from 'react';
import CreditsPage from './creditsPage/CreditsPage'
import AdminPage from './adminPage/AdminPage'

export default function ClubMember() {
  const [user, setUser] = useState(null);
  const [userDocData,setUserDocData]=useState({});
  const [currentPage,setCurrentPage] = useState('credits')

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setUser(user);
      const userid = user.uid

      const userRef = firebase.firestore().collection('users').doc(userid);
      const userSnapshot = await userRef.get();

      if (!userSnapshot.exists) {
        let signUpDate = new Date();

        let date = signUpDate.getDate();
let month = signUpDate.getMonth() + 1;
let year = signUpDate.getFullYear();

let finalDate = month + "-" + date + "-"+year;
        const newUserDocData = {
            displayName: user.displayName,
            email: user.email,
            credits: 0,
            verified: false,
            creditsBreakdown:[{credits:0, for:"Website signup", date:finalDate},],
            role: "student",
          };
    
          setUserDocData(newUserDocData);
          userRef.set(newUserDocData);
      }else{
        setUserDocData(userSnapshot.data());
 
      }

     

      
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className={styles.main}>
      {user ? (
        <>
        <button className={styles.logoutbtn} onClick={handleLogout}>Logout</button>
          <p1>Welcome, {user.displayName}</p1>
          
          {userDocData.verified ?(<>
          {userDocData.role=="admin"? (

           <>
              <div className={styles.adminBtns}>
              <button className='btn-secondary' onClick={()=>setCurrentPage('credits')}>Credits</button>
              <button className='btn-primary' onClick={()=>setCurrentPage('admin')}>Admin</button>
              </div>
             
              {currentPage=="credits"?<CreditsPage user={user} userDoc={userDocData}/>:<AdminPage  user={user} userDoc={userDocData} />}
             
           </>
          ) : (
          
            <CreditsPage />
            
          )

          }</>):(<div>Please ask an admin to verify your account</div>)} 
        </>
      ) : (
        <div>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      )}
    </div>
  );
}
