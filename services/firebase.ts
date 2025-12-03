import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEwnyIK9WJXnavsLSVhS7Dhuwy1YuYhDg",
  authDomain: "se224revisionguide.firebaseapp.com",
  projectId: "se224revisionguide",
  storageBucket: "se224revisionguide.firebasestorage.app",
  messagingSenderId: "609909052540",
  appId: "1:609909052540:web:2b681a7872e1017732e5f9",
  measurementId: "G-G2FWLV778L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);