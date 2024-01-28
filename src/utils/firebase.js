// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArlZo8HJW7L85eIf2rH_Fls5lbF_zFovs",
  authDomain: "netflix-gpt-4835a.firebaseapp.com",
  projectId: "netflix-gpt-4835a",
  storageBucket: "netflix-gpt-4835a.appspot.com",
  messagingSenderId: "1037042759846",
  appId: "1:1037042759846:web:55ef19c1721b5963831c67",
  measurementId: "G-SR4X3VDL6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


