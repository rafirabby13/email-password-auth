// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3D4l_dYoVDnKWzQG6o_fcOXhi9FhA7sM",
  authDomain: "email-password-auth-f08fb.firebaseapp.com",
  projectId: "email-password-auth-f08fb",
  storageBucket: "email-password-auth-f08fb.firebasestorage.app",
  messagingSenderId: "69903404807",
  appId: "1:69903404807:web:709b9b7ee5e27efe883fa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;