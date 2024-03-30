// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyB0pC-QNPK41RT6ZG312D9zq6AT3B8OD5E",
  authDomain: "poojawala-16bc4.firebaseapp.com",
  projectId: "poojawala-16bc4",
  storageBucket: "poojawala-16bc4.appspot.com",
  messagingSenderId: "977411671196",
  appId: "1:977411671196:web:1007bed6d3edf1b4a51959",
  measurementId: "G-12YWZT61QX"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// var db = firebase.firestore();
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
// const analytics = getAnalytics(app);