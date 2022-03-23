import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app"


/* code from our Firebase console */
export const firebaseConfig = {
    apiKey: "AIzaSyDoJkbzZ52Mbc6p_iFfo4wSr3jvBvYN_Uk",
    authDomain: "studenthub-18f50.firebaseapp.com",
    projectId: "studenthub-18f50",
    storageBucket: "studenthub-18f50.appspot.com",
    messagingSenderId: "638527148771",
    appId: "1:638527148771:web:4957afd929706338806bd6"
};


// Initialize Firebase
initializeApp(firebaseConfig);
// init firebase auth

const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider }
