import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyDOu8rZeYXE7qVgy3I0SIJBzv3mYO8h2TU",
    authDomain: "mi-e-commerce-fe693.firebaseapp.com",
    projectId: "mi-e-commerce-fe693",
    storageBucket: "mi-e-commerce-fe693.firebasestorage.app",
    messagingSenderId: "980839064924",
    appId: "1:980839064924:web:9addee0dc103fed38d0d99"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);