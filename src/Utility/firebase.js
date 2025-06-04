// import firebase from 'firebase/compat/app'
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from 'firebase'
// import 'firebase/auth' 
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDgXX3KgCqV3F63xh0q6MYNMah82GfCAyY",
//   authDomain: "clone-d72ca.firebaseapp.com",
//   projectId: "clone-d72ca",
//   storageBucket: "clone-d72ca.firebasestorage.app",
//   messagingSenderId: "983223362309",
//   appId: "1:983223362309:web:577ad33aff0fcc305e8d6c",
//   measurementId: "G-4L61VZS8WP"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);
// export const db = app.firestore();

// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDgXX3KgCqV3F63xh0q6MYNMah82GfCAyY",
  authDomain: "clone-d72ca.firebaseapp.com",
  projectId: "clone-d72ca",
  storageBucket: "clone-d72ca.firebasestorage.app",
  messagingSenderId: "983223362309",
  appId: "1:983223362309:web:577ad33aff0fcc305e8d6c",
  measurementId: "G-4L61VZS8WP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
