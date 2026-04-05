import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Replace with your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArhhCkwrYzFlfsp2jw4q3rxVDapnTU43M",
  authDomain: "fir-workshop-11bbe.firebaseapp.com",
  databaseURL: "https://fir-workshop-11bbe-default-rtdb.firebaseio.com",
  projectId: "fir-workshop-11bbe",
  storageBucket: "fir-workshop-11bbe.firebasestorage.app",
  messagingSenderId: "135310897387",
  appId: "1:135310897387:web:075d5cace830d44a048eae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Realtime Database
export const realtimeDB = getDatabase(app);
