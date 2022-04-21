// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAYvfIjBGN1K2GTg28hOPeL-FpTCqx5vyU",
    authDomain: "twitter-clone-3a08e.firebaseapp.com",
    projectId: "twitter-clone-3a08e",
    storageBucket: "twitter-clone-3a08e.appspot.com",
    messagingSenderId: "124688103549",
    appId: "1:124688103549:web:fa8527edf9f67f81649914"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
