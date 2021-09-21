
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const { body, validationResult } = require('express-validator');
const {firebase, db, storage} = require('../util/firebase');
const firestore = require('firebase/firestore/lite');
const bucket = require('firebase/storage')
const upload = require('../util/fileupload').upload;

var fs = require('fs');


//HOME
exports.home = (req, res, next) =>{
    

    res.render('home', {pageTitle:'Home',  path:'/'})
}

//Get - Add Service
exports.addService = (req, res, next) =>{
    res.render('add-service', {pageTitle:'Add Service', path:'/add-service'})
}


//Post - Add service Request
exports.service = (req, res, next) =>{
    var image = req.file;
    
    // const storageRef = bucket.ref(storage, 't/name.jpg');
    // const file = new Uint8Array().subarray(0, 4);

    // bucket.uploadBytes(storageRef, image).then((snapshot) => {
    //     console.log('Uploaded file!');
    // });

    console.log(image)
    const data = req.body;
    // const form = JSON.parse(req.body.data);
    // console.log(form);

    console.log();
    res.render('home', {pageTitle:'Home',  path:'/'})
}

// Add Provider
exports.addProvider = async (req, res, next) =>{
    res.render('add-provider', {pageTitle:'Add Provider', path:'/add-provider'})
}


// PROFILE
exports.profile = (req, res, next) =>{
    console.log('PROFILE PAGE')

    res.render('profile', {pageTitle:'Profile', path:'/profile'})    
}

// LOGIN
exports.getLogin = (req, res, next) =>{
    console.log('LOGIN PAGE')

    res.render('login', {
        pageTitle:'get login', 
        isAuth:req.session.isAuth, 
        user: req.session.c_user, 
        formErr:req.flash('error'), 
        formSucc:req.flash('success'), 
        reset_succ:req.flash('reset_succ'), 
        reset_err:req.flash('reset_err'), 
        csrfToken: req.csrfToken(), 
        path:'/login',
        oldInput: {
            email: ''
        }
    })
}
