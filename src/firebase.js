// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpazeUJgfAMFsa3wiF8sJQgh7TEjyOyuY",
  authDomain: "dayappfirestore.firebaseapp.com",
  projectId: "dayappfirestore",
  storageBucket: "dayappfirestore.appspot.com",
  messagingSenderId: "307249805799",
  appId: "1:307249805799:web:142a3465f3a0e7eb186542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
