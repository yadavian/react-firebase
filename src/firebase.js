// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2gmuRzyll-dMPAK2sVLDKev5JbtDhZbc",
  authDomain: "react-firebase-2a256.firebaseapp.com",
  projectId: "react-firebase-2a256",
  storageBucket: "react-firebase-2a256.appspot.com",
  messagingSenderId: "1062089784283",
  appId: "1:1062089784283:web:bd41d5ad9406682ab6c5fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();