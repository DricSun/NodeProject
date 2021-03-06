const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Post = require('./modele/post')
const port = 3000
const testRoutes = require('./Route/route')
//const userRoutes = require('./Route/user')
const path = require('path')
mongoose.connect('mongodb+srv://cedric:test@cluster0.tmvh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=> console.log("db valid"))
.catch(()=> console.log("db error"))
/*
app.use('/',(req, res,next) =>{
    res.json({message: "oklm"})
})*/
app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    next()
})

app.use(express.json())
app.use(express.urlencoded({
    extended :true
}))

app.use('/post',testRoutes)
app.use('/',(req, res,next) =>{
    res.json({message: "oklm"})
})
module.exports = app




