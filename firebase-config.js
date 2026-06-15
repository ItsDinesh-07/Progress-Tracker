// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDxxvnSrsYcPoP8cK0ogwOPu4qOwuRCWM",
  authDomain: "progress-tracker-36d07.firebaseapp.com",
  projectId: "progress-tracker-36d07",
  storageBucket: "progress-tracker-36d07.firebasestorage.app",
  messagingSenderId: "250041537940",
  appId: "1:250041537940:web:b1231a14f7edc0db9a2b81"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);