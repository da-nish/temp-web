// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWyDsWdQFEQFkpOxpAcziKJq-otoZrPGA",
  authDomain: "booking-app-d8dbd.firebaseapp.com",
  projectId: "booking-app-d8dbd",
  storageBucket: "booking-app-d8dbd.appspot.com",
  messagingSenderId: "430671569983",
  appId: "1:430671569983:web:8870d78e546e9dca1fc48a",
  measurementId: "G-72TWF5X52M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);