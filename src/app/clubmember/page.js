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
        const newUserDocData = {
            displayName: user.displayName,
            email: user.email,
            credits: 0,
            confirmed: false,
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
        <div>
          <p>Welcome, {user.displayName}</p>
          <button className={styles.logoutbtn} onClick={handleLogout}>Logout</button>

          {userDocData.role=="student"? (

            <div>
              <button onClick={()=>setCurrentPage('credits')}>Credits</button>
              <button onClick={()=>setCurrentPage('admin')}>Admin</button>
              {currentPage=="credits"?<CreditsPage user={user} userDoc={userDocData}/>:<AdminPage user={user} userDoc={userDocData} />}
            </div>
          ) : (

            <CreditsPage/>
          )

          }
        </div>
      ) : (
        <div>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      )}
    </div>
  );
}
