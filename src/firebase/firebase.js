import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyArh8ri99P7IfzgC43s0rqq2UOJmg1iMuw",
    authDomain: "test-9cc5a.firebaseapp.com",
    projectId: "test-9cc5a",
    storageBucket: "test-9cc5a.appspot.com",
    messagingSenderId: "87101726134",
    appId: "1:87101726134:web:64085d036149fc86327517"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider(app);