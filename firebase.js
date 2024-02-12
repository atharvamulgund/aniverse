import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "webaniverse.firebaseapp.com",
  projectId: "webaniverse",
  storageBucket: "webaniverse.appspot.com",
  messagingSenderId: "146362361857",
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);