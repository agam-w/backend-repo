// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9P0Xx9A-HbAERpaYulvXkHFcedqNdoew",
  authDomain: "ebudytest.firebaseapp.com",
  projectId: "ebudytest",
  storageBucket: "ebudytest.appspot.com",
  messagingSenderId: "123381081546",
  appId: "1:123381081546:web:58f3ca10a95edc1e715b33",
  measurementId: "G-XPS68NRENH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
