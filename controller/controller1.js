
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const { body, validationResult } = require('express-validator');
const {firebase, db, storage} = require('../util/firebase');
const uploader = require('../util/uploader');//image upload
var fs = require('fs');
// const firestore = require('firebase/storage');

const firestore = require('firebase/firestore/lite');
const firebase_read = require('../firebase/read');
const firebase_write = require('../firebase/write');


//HOME
exports.home = (req, res, next) =>{
    res.render('home', {pageTitle:'Home', data:null, path:'/'})
}

exports.loadData = async (req, res, next) =>{
    const providerInfo = await firebase_read.getProvidersInfo('provider-info');
    const providers = await firebase_read.getProviders('providers');
    const services = await firebase_read.getServices('services');

    const data = {services: services, providerInfo:providerInfo, providers: providers};
    return res.send(JSON.stringify(data)); 
}

//Get - Show All Services
exports.showServices = async (req, res, next) => {

    // const testFolder = '../images/';

    // //get list of filename in /images and compare with firestore image data
    // fs.readdirSync(testFolder).forEach(file => {
    //     console.log(file);
    // });

    const data = await firebase_read.getServices('services');
    res.render('show-services', {pageTitle:'All Services', data:data, path:'/show-services'})
}


//Get - Show All Providers
exports.showProviders = async (req, res, next) => {

    // const testFolder = '../images/';

    // //get list of filename in /images and compare with firestore image data
    // fs.readdirSync(testFolder).forEach(file => {
    //     console.log(file);
    // });
    // const providerInfo = await firebase_read.getProvidersInfo('provider-info');
    // const providers = await firebase_read.getProviders('providers');

    // for(var j=0; j<providerInfo.length; j++){
    //     const services = []
    //     for(var i=0; i<providers.length; i++){
    //         if(providers[i].providerId==providerInfo[j].providerId){
    //             services.push(providers[i]);
    //         }
    //     }
    //     providerInfo[j]['services'] = services;
    // }
    // console.log(providerInfo[0].services)
    res.render('show-providers', {pageTitle:'All Providers', path:'/show-providers'})
}

//Get - Add Service
exports.addService = async (req, res, next) =>{
    let requestMethod = req.method;
    console.log(requestMethod);
    if(requestMethod=='GET'){
        return res.render('add-service', {pageTitle:'Add Service', path:'/add-service'})
    }

    var image = req.file;
    var filename;
    if(image) {
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
    firestore.addDoc(firestore.collection(db, "services"),{
        title: req.body.title,
        desc: req.body.desc,
        img: filename,
        form: form,
        status:true,
        serviceId: Date.now().toString()
      });

    res.render('result', {pageTitle:'Success',  path:'/'})
}


// Add Provider
exports.addProvider = async (req, res, next) =>{
    let requestMethod = req.method;
    console.log(requestMethod);
    if(requestMethod=='GET'){
        return res.render('add-provider', {pageTitle:'Add Provider', path:'/add-provider'})
    }
    var image = req.file;
    var filename;
    if(image) {
        const uploadResult = await uploader.image(image, 'providers/');
        if(!uploadResult){
            return res.render('result', {pageTitle:'Fail',  path:'/'});
        }
        filename = req.file.filename;

    }else{
        console.log('no imgae');
        filename = '';
    }
    
    firestore.addDoc(firestore.collection(db, "provider-info"),{
        name: req.body.name,
        desc: req.body.desc,
        address: req.body.address,
        img: filename,
        providerId: Date.now().toString()
      });

    return res.render('result', {pageTitle:'Success',  path:'/'})
    
}


// Add Provider Service
exports.addProviderService = async (req, res, next) =>{
    let requestMethod = req.method;
    console.log(requestMethod);
    if(requestMethod=='GET'){
        return res.render('add-provider-service', {pageTitle:'Add Provider Service', path:'/add-provider-service'})
    }
    var image = req.file;
    var filename;
    if(image) {
        const uploadResult = await uploader.image(image, 'providers/');
        if(!uploadResult){
            return res.render('result', {pageTitle:'Fail',  path:'/'});
        }
        filename = req.file.filename;

    }else{
        console.log('no imgae');
        filename = '';
    }

    console.log(req.body);
    
    firestore.addDoc(firestore.collection(db, "providers"),{
        status:true,
        title: req.body.title,
        desc: req.body.desc,
        address: req.body.address,
        charges:req.body.charges,
        img: filename,
        serviceId:req.body.serviceid1,
        providerId:req.body.providerid1,
        providerServiceID: Date.now().toString()
      });

    return res.render('result', {pageTitle:'Success',  path:'/'})
    
}


// Chat page
exports.chat = (req, res, next) =>{
    console.log('Chat PAGE')
    res.render('chat', {pageTitle:'Chat', path:'/chat'})    
}

// Load Chat
exports.loadChat = async (req, res, next) =>{
    const chats = await firebase_read.getChat('chat');
    const data = {data: chats};
    return res.send(JSON.stringify(data)); 
}

// Load Chat
exports.sendChat = async (req, res, next) =>{
    console.log('callled')
    // console.log(req.body.toId)
    // console.log(req.body);
	// res.send(req.body);
    // return res.send(JSON.stringify(data)); 


    var map = { 
        orderId:"null", 
        receiverId:req.body.id, 
        senderId:"admin", 
        text:req.body.message, 
        time: firestore.Timestamp.fromMillis(Date.now()),
        type:"message"
    };

    const chats = await firebase_write.setChat('chat', map);

    return res.send({response:'message sent', map}); 
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
