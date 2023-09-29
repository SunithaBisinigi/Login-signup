import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFs9DKkWKNldClumN4r7j43wJPj9fOdlY",
  authDomain: "signin-signup-5901c.firebaseapp.com",
  projectId: "signin-signup-5901c",
  storageBucket: "signin-signup-5901c.appspot.com",
  messagingSenderId: "319094554938",
  appId: "1:319094554938:web:716db3195bcdd71d41d003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);