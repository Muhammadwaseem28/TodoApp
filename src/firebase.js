// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdoJpD9zNm6aW_vTkIxopnbyBjKkAQeRE",
  authDomain: "todo-app-d4fe3.firebaseapp.com",
  projectId: "todo-app-d4fe3",
  storageBucket: "todo-app-d4fe3.appspot.com",
  messagingSenderId: "40782112054",
  appId: "1:40782112054:web:4f31e3ee97db8b2801ff97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)