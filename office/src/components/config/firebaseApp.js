import firebaseApp from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/performance";
import "firebase/analytics";

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
if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(firebaseConfig);
} else {
  firebaseApp.app(); // if already initialized, use that one
}
// firebaseApp.initializeApp(firebaseConfig);
export default firebaseApp;
