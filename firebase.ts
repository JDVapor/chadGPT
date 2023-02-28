import {getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkD-DfvFGXWpTQnN9KbaA7QtLDEDPMLiM",
  authDomain: "gptmsg-abaed.firebaseapp.com",
  projectId: "gptmsg-abaed",
  storageBucket: "gptmsg-abaed.appspot.com",
  messagingSenderId: "67495120715",
  appId: "1:67495120715:web:dffe7a9df8d680506e22ce"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }