import firebaseApp from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG2LBfqkKdV5K22bH0n1GlXL1-1yust5M",
  authDomain: "kconsweb.firebaseapp.com",
  projectId: "kconsweb",
  storageBucket: "kconsweb.appspot.com",
  messagingSenderId: "837343930568",
  appId: "1:837343930568:web:a12efdb85bf125683addfd",
  measurementId: "G-4LG5NBNMXT",
};
// Initialize Firebase

firebaseApp.initializeApp(firebaseConfig);

// firebaseApp.initializeApp(firebaseConfig);

export default firebaseApp;
