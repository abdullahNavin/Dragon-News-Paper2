// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCceAGH2vVClNlnySDVI4VfZeOd4wzMU7I",
  authDomain: "dragon-news-paper-4a3f9.firebaseapp.com",
  projectId: "dragon-news-paper-4a3f9",
  storageBucket: "dragon-news-paper-4a3f9.appspot.com",
  messagingSenderId: "1053064962597",
  appId: "1:1053064962597:web:92b03ecca8bc048be915cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)