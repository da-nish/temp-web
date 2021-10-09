const express = require('express')
const cors = require("cors")
const firebase= require('./util/firebase')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const flash = require('connect-flash')

app.set('view engine', 'ejs')
app.set('views', 'views')

const userRoute = require('./router/user_route')

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
//static file serve: css, js


//using flash
app.use(flash())

//ROUTER
app.use(userRoute)
app.use((req,res,next)=>{
    res.send('<h1> 404 ERROR </h1>')
})

app.listen(8001)
console.log('http://localhost:8001/')
console.log('NodeJS is running')