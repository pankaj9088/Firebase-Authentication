import { auth, googleProvider, microsoftProvider } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// ========== Signup ==========
const signupBtn = document.getElementById('signupBtn');
if (signupBtn) {
  signupBtn.addEventListener('click', async () => {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      window.location.href = "home.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// ========== Login ==========
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
  loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      window.location.href = "home.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// ========== Google Login ==========
const googleLogin = document.getElementById('googleLogin');
if (googleLogin) {
  googleLogin.addEventListener('click', async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
      window.location.href = "home.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

//========== Microsoft Login ==========
const microsoftLogin = document.getElementById('microsoftLogin');
if (microsoftLogin) {
  microsoftLogin.addEventListener('click', async () => {
    try {
      await signInWithPopup(auth, microsoftProvider);
      alert("Microsoft login successful!");
      window.location.href = "home.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
