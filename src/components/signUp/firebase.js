// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCdPOj0ZJe9jW6GGI7JxwhSOTuQLt70wg",
  authDomain: "authentication-72a6a.firebaseapp.com",
  databaseURL: "https://authentication-72a6a-default-rtdb.firebaseio.com",
  projectId: "authentication-72a6a",
  storageBucket: "authentication-72a6a.appspot.com",
  messagingSenderId: "1006138280299",
  appId: "1:1006138280299:web:8308d720a7db23e0e2642e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
