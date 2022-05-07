// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeYsghUKNCprJ7QWDBRr1JA3Ql9gpJsUU",
  authDomain: "warhouse-management.firebaseapp.com",
  projectId: "warhouse-management",
  storageBucket: "warhouse-management.appspot.com",
  messagingSenderId: "332710699840",
  appId: "1:332710699840:web:b89b98a7c0ad91192a90a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth