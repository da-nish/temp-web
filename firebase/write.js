
const firestore = require('firebase/firestore/lite');
const bucket = require('firebase/storage')
const {firebase, db, storage} = require('../util/firebase');

exports.setChat = async (path, map) => {
    firestore.addDoc(
        firestore.collection(db, path),map)
        .then(re=>console.log(re))
        .catch(err=> console.log(err));
}