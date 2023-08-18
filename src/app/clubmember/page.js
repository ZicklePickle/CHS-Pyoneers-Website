'use client';
import { signInWithPopup, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth, provider, firebase } from '../firebase/config'; // Make sure to import the firestore object
import styles from './page.module.css'
import { useState, useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import CreditsPage from './creditsPage/CreditsPage'
import AdminPage from './adminPage/AdminPage'
import {getUser} from "../services/userService"

export default function ClubMember() {
  let [user, setUser] = useState(null);
  let [userDocData, setUserDocData] = useState({});
  let [currentPage, setCurrentPage] = useState('credits')

  auth.onAuthStateChanged(user => {
    setUser(user)
  })

  useEffect(() => {
    console.log("HELLO WORLD!")
    console.log(auth.currentUser)
    if(user) {
      getUser(user.uid).then(snap => {
        setUserDocData(snap.data())
      }).catch(err => alert("An Error Occured"))
    }
  }, [user])

  const handleGoogleSignIn = async () => {
    let authUser;
    if(user == null) {
      try {
        await setPersistence(auth, browserSessionPersistence)
        const result = await signInWithPopup(auth, provider)
        authUser = result.user
        setUser(authUser)
      } catch(err) {
        console.log(err)
      }
    }

    let userSnapshot = await getUser(authUser.uid)

    if(!userSnapshot.exists) {
      await registerUserDoc(authUser, "student", true)
    } else {
      console.log(userSnapshot.data())
    }
  };

  const handleLogout = async () => {
    await auth.signOut()
    setUser(null);
  };

  return (
    <div className={styles.main}>
      {user ? (
        <>
          <button className={styles.logoutbtn} onClick={handleLogout}>Logout</button>
          <p1>Welcome, {user.displayName}</p1>

          {userDocData.verified ? (<>
            {userDocData.role == "admin" ? (

              <>
                <div className={styles.adminBtns}>
                  <button className='btn-secondary' onClick={() => setCurrentPage('credits')}>Credits</button>
                  <button className='btn-primary' onClick={() => setCurrentPage('admin')}>Admin</button>
                </div>

                {currentPage == "credits" ? <CreditsPage user={user} userDoc={userDocData} /> : <AdminPage user={user} userDoc={userDocData} />}

              </>
            ) : (

              <CreditsPage />

            )

            }</>) : (<div>Please ask an admin to verify your account</div>)}
        </>
      ) : (
        <div>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      )}
    </div>
  );
}
