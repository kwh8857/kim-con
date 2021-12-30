import firebaseApp from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/performance";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7m4H1jBYnMDERovliN6Kg2tLtCkgPBMg",
  authDomain: "steadee-pf.firebaseapp.com",
  databaseURL: "https://steadee-pf-default-rtdb.firebaseio.com",
  projectId: "steadee-pf",
  storageBucket: "steadee-pf.appspot.com",
  messagingSenderId: "252193488049",
  appId: "1:252193488049:web:91ac4e6226103257ba3690",
  measurementId: "G-CWH0DV2B5L",
};
// Initialize Firebase
if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(firebaseConfig);
} else {
  firebaseApp.app(); // if already initialized, use that one
}
// firebaseApp.initializeApp(firebaseConfig);
firebaseApp.analytics();
firebaseApp.performance();
export default firebaseApp;
