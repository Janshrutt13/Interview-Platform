// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7HDvUz7vUTaGuBW-7FK5aH8AfzHZs5CI",
    authDomain: "instaprep-6aae5.firebaseapp.com",
    projectId: "instaprep-6aae5",
    storageBucket: "instaprep-6aae5.firebasestorage.app",
    messagingSenderId: "350148478124",
    appId: "1:350148478124:web:a41dd27b071b374d974b09",
    measurementId: "G-GJ3VNLPP4M"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);