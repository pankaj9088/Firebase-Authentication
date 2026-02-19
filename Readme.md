## Firebase Auth App

A simple authentication web app built using **Firebase Authentication**, HTML, CSS, and JavaScript.  
This project includes features like **Signup, Login, Logout, and Protected Home Page Access**.

---

## 📁 Project Structure

```
FIREBASE-AUTH-APP/
│── components/
│── css/
│── js/
│   ├── auth.js
│   ├── firebase.js
│   ├── home.js
│── home.html
│── index.html       # Login Page
│── signup.html      # Signup Page
│── Readme.md
│── package.json
│── package-lock.json
```

---

## 🚀 Features

- User Signup  
- User Login  
- Firebase Authentication Integration  
- Redirect Based on Login State  
- Protected Home Page  
- Clean and simple UI  

---

## 🔧 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/pankaj9088/Firebase-Authentication.git
cd firebase-auth-app
```

### 2. Install dependencies (optional)
```bash
npm install
```

### 3. Add Firebase Config
Open `js/firebase.js` and paste your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
```

---

## ▶️ Run Project

Simply open **index.html** in a browser or use VS Code Live Server.

```
Right Click → "Open With Live Server"
```

---

## 🔐 Authentication Flow

1. **User opens index.html** → Login  
2. **Signup page** creates a new user  
3. **On success**, user is redirected to `home.html`  
4. Home page checks `auth state` and blocks unauth users  
5. User can log out  

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to **fork**, improve, and submit a PR.

---

## 📄 License

This project is licensed under the **MIT License**.
