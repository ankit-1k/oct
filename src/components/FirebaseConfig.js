import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCCSYD6fToKEk0lBJtJr5IOuxZzQ9NoBfo",
  authDomain: "watchercontact-b404d.firebaseapp.com",
  projectId: "watchercontact-b404d",
  storageBucket: "watchercontact-b404d.appspot.com",
  messagingSenderId: "848768264143",
  appId: "1:848768264143:web:4a45074fa39c213114d4ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app)