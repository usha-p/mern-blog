// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VIT_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-befbe.firebaseapp.com",
  projectId: "mern-blog-befbe",
  storageBucket: "mern-blog-befbe.appspot.com",
  messagingSenderId: "904304960642",
  appId: "1:904304960642:web:56c5ee489ee6b29e1f809b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);