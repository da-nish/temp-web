const firebase = require('firebase/app');
const firestore = require('firebase/firestore/lite');
const bucket = require('firebase/storage')

const firebaseConfig = {
  apiKey: "AIzaSyDWyDsWdQFEQFkpOxpAcziKJq-otoZrPGA",
  authDomain: "booking-app-d8dbd.firebaseapp.com",
  databaseURL: "https://booking-app-d8dbd.firebaseio.com",
  projectId: "booking-app-d8dbd",
  storageBucket: "booking-app-d8dbd.appspot.com",
  messagingSenderId: "430671569983",
  appId: "1:430671569983:web:8870d78e546e9dca1fc48a",
  measurementId: "G-72TWF5X52M"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore();
const storage = bucket.getStorage(app, 'gs://booking-app-d8dbd.appspot.com');

exports.firebase = firebase;
exports.db = db;
exports.storage = storage;