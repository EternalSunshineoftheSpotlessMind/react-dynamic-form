// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4pY4IF3UX2wq4Lgm9gYA9Ti5fswPZF5w",
  authDomain: "capstone2236.firebaseapp.com",
  projectId: "capstone2236",
  storageBucket: "capstone2236.appspot.com",
  messagingSenderId: "107227379508",
  appId: "1:107227379508:web:ecab5e4cee06a01f555761",
  measurementId: "G-DL1J9WSQS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);