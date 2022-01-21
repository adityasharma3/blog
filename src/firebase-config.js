// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcdCHChmERrt0ph_O2AjFx6f52ut-ZyGg",
    authDomain: "react-blog-71813.firebaseapp.com",
    projectId: "react-blog-71813",
    storageBucket: "react-blog-71813.appspot.com",
    messagingSenderId: "1000340924642",
    appId: "1:1000340924642:web:e49f01cf76b720bb1816bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();