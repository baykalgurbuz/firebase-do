// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO4UAu2HKUVd5sPUhMeYRFgcmqjmJRXfU",
  authDomain: "fir-todo-49616.firebaseapp.com",
  projectId: "fir-todo-49616",
  storageBucket: "fir-todo-49616.appspot.com",
  messagingSenderId: "1030913640766",
  appId: "1:1030913640766:web:c3378d928afd6df8b7046f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);