// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFaqvAxkmGnsJ7paHb_mi9f_GnY-MZjtI",
  authDomain: "myecom-f0463.firebaseapp.com",
  projectId: "myecom-f0463",
  storageBucket: "myecom-f0463.firebasestorage.app",
  messagingSenderId: "324071008099",
  appId: "1:324071008099:web:7c7a717de9d244b39e1556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };