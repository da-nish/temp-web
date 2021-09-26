
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const { body, validationResult } = require('express-validator');
const {firebase, db, storage} = require('../util/firebase');
const uploader = require('../util/uploader');//image upload
var fs = require('fs');
// const firestore = require('firebase/storage');

const firestore = require('firebase/firestore/lite');

//HOME
exports.home = (req, res, next) =>{
    res.render('home', {pageTitle:'Home',  path:'/'})
}

//Get - Add Service
exports.addService = (req, res, next) =>{
    res.render('add-service', {pageTitle:'Add Service', path:'/add-service'})
}

//Post - Add service Request
exports.service = async (req, res, next) =>{

    var image = req.file;
    var filename;
    if(image) {
        console.log(image);
        console.log(image.path);
        const uploadResult = await uploader.image(image, 'services/');
        if(!uploadResult){
            return res.render('result', {pageTitle:'Fail',  path:'/'});
        }
        filename = req.file.filename;

    }else{
        console.log('no imgae');
        filename = '';
    }
    
    const form = JSON.parse(req.body.data);
    console.log(filename);
    console.log(form);
    firestore.addDoc(firestore.collection(db, "services"),{
        title: req.body.title,
        desc: req.body.desc,
        img: filename,
        form: form
      });

    res.render('result', {pageTitle:'Success',  path:'/'})
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
