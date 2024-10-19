// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiIfKT6ZeZVo5MJpOBaTZTvO2whCB3yjY",
  authDomain: "bolos-da-yasmin.firebaseapp.com",
  projectId: "bolos-da-yasmin",
  storageBucket: "bolos-da-yasmin.appspot.com",
  messagingSenderId: "741215947057",
  appId: "1:741215947057:web:cda2faf81ec994a8a68810",
  measurementId: "G-Q9QFFWM71H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('Firebase initialized successfully');
