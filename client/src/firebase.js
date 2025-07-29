// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estateease-8f898.firebaseapp.com",
  projectId: "estateease-8f898",
  storageBucket: "estateease-8f898.firebasestorage.app",
  messagingSenderId: "296563615301",
  appId: "1:296563615301:web:72526b87dd30c54ec2e52c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);