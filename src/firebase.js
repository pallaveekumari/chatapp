// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB2nHitlnjU0hkPutHtGNwcnTti64pOdSc",
  authDomain: "chat-bb0b6.firebaseapp.com",
  projectId: "chat-bb0b6",
  storageBucket: "chat-bb0b6.appspot.com",
  messagingSenderId: "30366555200",
  appId: "1:30366555200:web:e6dd0bff025171b87c53a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore()