const express = require('express')
const userContoller = require('../controller/controller1')
const route = express.Router();
const { body, validationResult } = require('express-validator');
const upload = require('../util/multer').upload;

route.get('/', userContoller.home)
route.post('/load-data', userContoller.loadData)

route.get('/add-service', userContoller.addService)
route.post('/add-service', upload.single('image'), userContoller.service)
route.get('/show-services', userContoller.showServices)

route.get('/add-provider', userContoller.addProvider)
route.post('/add-provider', upload.single('image'), userContoller.providerProfile)
route.get('/show-providers', userContoller.showProviders)
route.get('/profile', userContoller.profile) 

// route.get('/reset/:token/:email', userContoller.getReset)//from link 

module.exports = route
