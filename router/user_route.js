const express = require('express')
const userContoller = require('../controller/controller1')
const route = express.Router();
const { body, validationResult } = require('express-validator');
const upload = require('../util/multer').upload;

route.get('/', userContoller.home)
route.post('/load-data', userContoller.loadData)

route.get('/add-service', userContoller.addService)
route.post('/add-service', upload.single('image'), userContoller.addService)
route.get('/show-services', userContoller.showServices)

route.get('/add-provider', userContoller.addProvider)
route.post('/add-provider', upload.single('image'), userContoller.addProvider)
route.get('/add-provider-service', userContoller.addProviderService)
route.post('/add-provider-service', upload.single('image'), userContoller.addProviderService)
route.get('/show-providers', userContoller.showProviders)
route.get('/profile', userContoller.profile)

route.get('/orders', userContoller.showOrders) 
route.get('/chat', userContoller.chat) 
route.post('/load-chat', userContoller.loadChat) 
route.post('/send-chat', userContoller.sendChat) 
route.post('/update-order-status', userContoller.updateOrderStatus) 

module.exports = route