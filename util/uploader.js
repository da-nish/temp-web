
const {firebase, db, storage} = require('./firebase');
const firestore = require('firebase/storage')
const upload = require('./multer').upload;
var fs = require('fs');
const { StringFormat } = require('firebase/storage');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
  };

async function image(file, collection) {
    var base64str = fs.readFileSync(file.path, 'base64');
    const ext = MIME_TYPE_MAP[file.mimetype];
    file.filename = file.filename+'.'+ext;
    const storageRef = firestore.ref(storage, collection+file.filename);
    const metadata1 = {
        contentType: file.mimetype, 
        name: file.filename
      };
    return await firestore.uploadString(storageRef, base64str, StringFormat.BASE64, metadata1).then((snapshot) => {
        console.log('Uploaded file!');
        return true;
    }).catch(err => {
        console.log('Image upload error: '+ err);
        return false;
    });
}

exports.image = image;