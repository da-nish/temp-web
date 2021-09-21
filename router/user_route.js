const express = require('express')
const userContoller = require('../controller/controller1')
const route = express.Router();
const { body, validationResult } = require('express-validator');
const upload = require('../util/fileupload').upload;

route.get('/', userContoller.home)

route.get('/add-service', userContoller.addService)
route.post('/add-service', upload.single('image'), userContoller.service)

route.get('/add-provider', userContoller.addProvider)
route.get('/profile', userContoller.profile) 

// route.get('/reset/:token/:email', userContoller.getReset)//from link 

module.exports = route
