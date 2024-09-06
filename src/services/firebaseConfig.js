// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOn-OHWZJEG-ZxECVoAVyE9wtgp90h-nE",
  authDomain: "react-ef.firebaseapp.com",
  projectId: "react-ef",
  storageBucket: "react-ef.appspot.com",
  messagingSenderId: "251347410390",
  appId: "1:251347410390:web:947fc700340897e2c81877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)