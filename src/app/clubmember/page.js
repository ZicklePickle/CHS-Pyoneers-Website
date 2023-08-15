'use client'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider, firebase } from '../firebase/config'; // Make sure to import the firestore object

import { useState } from 'react';
import { GoogleButton } from 'react-google-button';

export default function ClubMember() {
  const [user, setUser] = useState(null);
  const [userDocData,setUserDocData]=useState(null);

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
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      )}
    </div>
  );
}
