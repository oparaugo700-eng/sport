// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUvxNyItlWzlXcsiiRqeSpv4kR4xaSJAA",
    authDomain: "join-sport-877dd.firebaseapp.com",
    projectId: "join-sport-877dd",
    storageBucket: "join-sport-877dd.firebasestorage.app",
    messagingSenderId: "808684594353",
    appId: "1:808684594353:web:c362089772eab25d592e90"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app)

export { db, storage }