// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJdiyFRotyNTFGzAz7dMb2dfY6dv4TMKQ",
    authDomain: "socialshare-f61e1.firebaseapp.com",
    projectId: "socialshare-f61e1",
    storageBucket: "socialshare-f61e1.appspot.com",
    messagingSenderId: "196850049928",
    appId: "1:196850049928:web:15946ac9ae43367a3a903d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;