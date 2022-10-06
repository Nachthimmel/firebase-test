import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1GFsV6kl2NQyrOZ0O5iakcSPX1Hq5Nio",
  authDomain: "fir-4de67.firebaseapp.com",
  projectId: "fir-4de67",
  storageBucket: "fir-4de67.appspot.com",
  messagingSenderId: "370652158088",
  appId: "1:370652158088:web:8891b51b52c031fdf3a73d",
  measurementId: "G-T9W1V7TQ6J",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
