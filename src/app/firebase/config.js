// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuXD--TC47HNVL2MWPrt8yJz39UWAbvtc",
  authDomain: "chspyoneerswebsite.firebaseapp.com",
  projectId: "chspyoneerswebsite",
  storageBucket: "chspyoneerswebsite.appspot.com",
  messagingSenderId: "751197503950",
  appId: "1:751197503950:web:36930508a62377da53ab9f",
  measurementId: "G-2KE8JE80ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase;