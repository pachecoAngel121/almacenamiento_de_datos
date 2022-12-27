import firebase from 'firebase/app';
import 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgsNu-vu7Pef4apFYFqKwxi0J-ABVXiNc",
    authDomain: "aplicaciones-web-1.firebaseapp.com",
    projectId: "aplicaciones-web-1",
    storageBucket: "aplicaciones-web-1.appspot.com",
    messagingSenderId: "925358449034",
    appId: "1:925358449034:web:69e974de7315029839a873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);