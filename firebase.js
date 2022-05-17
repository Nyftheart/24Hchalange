import { initializeApp } from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyD4Pr1C3kLp132Tk16lfV1V3FYU_9GcjV8",
    authDomain: "projet24h.firebaseapp.com",
    projectId: "projet24h",
    storageBucket: "projet24h.appspot.com",
    messagingSenderId: "494356081161",
    appId: "1:494356081161:web:c450d111b455090e98a6d8",
    measurementId: "G-W85YPWJP3K"
};

const app = initializeApp(firebaseConfig);

export {app}

