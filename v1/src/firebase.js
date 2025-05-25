import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyyyzMH15TOPlWQ8jB6P-y7NvQP_5ZHEk",
  authDomain: "entry-65c69.firebaseapp.com",
  projectId: "entry-65c69",
  storageBucket: "entry-65c69.firebasestorage.app",
  messagingSenderId: "673193618919",
  appId: "1:673193618919:web:f8011d7c62ad1ae3f1a142",
  measurementId: "G-K5M7V3NZ7D"
};

// Якщо додаток ще не ініціалізовано — ініціалізуємо його, інакше використовуємо вже існуючий
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth };