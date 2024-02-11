// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyB2nHitlnjU0hkPutHtGNwcnTti64pOdSc",
//   authDomain: "chat-bb0b6.firebaseapp.com",
//   projectId: "chat-bb0b6",
//   storageBucket: "chat-bb0b6.appspot.com",
//   messagingSenderId: "30366555200",
//   appId: "1:30366555200:web:e6dd0bff025171b87c53a5"
// };

// // Initialize Firebase


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFkx2tEAkjA-bWeEXpmbChOnRBPNCMW7w",
  authDomain: "chatapplication-571c0.firebaseapp.com",
  projectId: "chatapplication-571c0",
  storageBucket: "chatapplication-571c0.appspot.com",
  messagingSenderId: "502208443351",
  appId: "1:502208443351:web:2b1e6fc0d3ea66ec879192",
  measurementId: "G-XC5LZVTCEF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore()