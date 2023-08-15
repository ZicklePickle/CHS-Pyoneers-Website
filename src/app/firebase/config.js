// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwwlG7HfMzLvXTbjBwyJvjbtbNfOlEHz0",
  authDomain: "chspyoneerswebsite-93c7c.firebaseapp.com",
  projectId: "chspyoneerswebsite-93c7c",
  storageBucket: "chspyoneerswebsite-93c7c.appspot.com",
  messagingSenderId: "437432821867",
  appId: "1:437432821867:web:51f266c6871c320236692e",
  measurementId: "G-QW1NJZKY0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
