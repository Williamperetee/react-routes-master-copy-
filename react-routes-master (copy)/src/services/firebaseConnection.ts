// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATekNT2oRoCQmeTVdb9Y3mRIRpF0XE0ak",
  authDomain: "react-routes-bc67c.firebaseapp.com",
  projectId: "react-routes-bc67c",
  storageBucket: "react-routes-bc67c.appspot.com",
  messagingSenderId: "104723266808",
  appId: "1:104723266808:web:dc5e715d73e79748d98f0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)
export{
auth,db
}
