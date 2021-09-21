
// const firebase = require('firebase/app');
// const firestore = require('firebase/firestore/lite');


// const firebaseConfig = {
//   apiKey: "AIzaSyDWyDsWdQFEQFkpOxpAcziKJq-otoZrPGA",
//   authDomain: "booking-app-d8dbd.firebaseapp.com",
//   databaseURL: "https://booking-app-d8dbd.firebaseio.com",
//   projectId: "booking-app-d8dbd",
//   storageBucket: "booking-app-d8dbd.appspot.com",
//   messagingSenderId: "430671569983",
//   appId: "1:430671569983:web:8870d78e546e9dca1fc48a",
//   measurementId: "G-72TWF5X52M"
// };

// const app = firebase.initializeApp(firebaseConfig);

// const db = firestore.getFirestore();

// function write() {
// firestore.addDoc(firestore.collection(db, "users"),{
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// }).then(re=>console.log(re)).catch(err=> console.log(err));
// }
// write();
// function writeData() {
//   @ts-ignore
//   fire_db.getDatabase(db);

//   fire_db.ref('mydb/'). push({
//     title: '1',
//     description: '2',
//     tags: '3'
//   }).then(function() {
//     console.log('Upload succeeded');
//   }).catch(function(error) {
//     console.log('Upload failed');
//   });;
// }

// writeData();

// async function getCities(db) {
//   const citiesCol = firestore.collection(db, 'services');
//   const citySnapshot = await firestore.getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

// getCities(db).then(re => console.log(re));

// getCities(db).then(re => console.log(re));