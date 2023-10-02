import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // for realtime database
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQ1hqBPt7w_M__7unhVgpcw9czdGMUaOI",
    authDomain: "popular-social-mern-f720d.firebaseapp.com",
    projectId: "popular-social-mern-f720d",
    storageBucket: "popular-social-mern-f720d.appspot.com",
    messagingSenderId: "265285708430",
    appId: "1:265285708430:web:88d77c675851f43cf5f7df",
    measurementId: "G-P7ECZ13NFG",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export default db;
export { auth, provider };
