// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQQVsBfGcfKD-PqXkBXshrX32eJP7uCV8",
  authDomain: "juristic-4bf27.firebaseapp.com",
  projectId: "juristic-4bf27",
  storageBucket: "juristic-4bf27.appspot.com",
  messagingSenderId: "473377699181",
  appId: "1:473377699181:web:a460f321893edc33abd664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;