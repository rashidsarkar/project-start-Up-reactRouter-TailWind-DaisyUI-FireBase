// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCglUp-BGNw3arJwMkHLLBemk0ibLNGqeg",
  authDomain: "auth-moha-milon-8f640.firebaseapp.com",
  projectId: "auth-moha-milon-8f640",
  storageBucket: "auth-moha-milon-8f640.appspot.com",
  messagingSenderId: "704376947978",
  appId: "1:704376947978:web:fa182892fad09351fd26f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
