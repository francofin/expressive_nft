import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3a6eZl3i-dI3uM0bEq0DPalBQ8E5q5mI",
    authDomain: "expressivenft.firebaseapp.com",
    projectId: "expressivenft",
    storageBucket: "expressivenft.appspot.com",
    messagingSenderId: "597022305838",
    appId: "1:597022305838:web:4a3c90c57ac252ef35f9bf",
    measurementId: "G-62RPTWWXB9"
  };


//create a face book app, pass id, to facebook app. 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const fireBaseAuth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

//Add app to facebook to get log in access. 
export const facebookAuthProvider = new FacebookAuthProvider();