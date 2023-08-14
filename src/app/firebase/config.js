// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

let firebase = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase;