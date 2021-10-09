
const firestore = require('firebase/firestore/lite');
const bucket = require('firebase/storage')
const {firebase, db, storage} = require('../util/firebase');

exports.getServices = async (path) => {
  const reference = firestore.collection(db, path);
  const getData = await firestore.getDocs(reference);
  const list = getData.docs.map(doc => doc.data());
  return list;
}

exports.getProvidersInfo = async (path) => {
  const reference = firestore.collection(db, path);
  const getData = await firestore.getDocs(reference);
  const list = getData.docs.map(doc => doc.data());
  return list;
}


exports.getProviders = async (path) => {
  const reference = firestore.collection(db, path);
  const getData = await firestore.getDocs(reference);
  const list = getData.docs.map(doc => doc.data());
  return list;
}


exports.getChat = async (path) => {
  const reference = firestore.collection(db, path);
  const getData = await firestore.getDocs(reference);
  const list = getData.docs.map(doc => doc.data());
  return list;
}