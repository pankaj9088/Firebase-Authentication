// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7ovJF9xu3u59V27P0BraWjg-XleVzh1s",
  authDomain: "auth-app-35c70.firebaseapp.com",
  projectId: "auth-app-35c70",
  storageBucket: "auth-app-35c70.firebasestorage.app",
  messagingSenderId: "14606475877",
  appId: "1:14606475877:web:bae7ff03e63a704c71dc8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider('microsoft.com');