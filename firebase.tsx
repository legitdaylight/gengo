// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBPGxGJiMnPWQ2gHiPSF_1Xdy3kiQoMiE",
  authDomain: "gengo-ae864.firebaseapp.com",
  projectId: "gengo-ae864",
  storageBucket: "gengo-ae864.firebasestorage.app",
  messagingSenderId: "248292749203",
  appId: "1:248292749203:web:68c9f9de2986bea8d4c266",
  measurementId: "G-5S6YX6DKYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
