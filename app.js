// Initialiser le projet

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://cedric:tennis78@cluster0.tmvh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then((result) =>console.log("ok") )
    .catch((err) => console.log(Error))

app.use((req, res) => {
    res. json({ message: 'Server On'});
});


app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    next()
})

//  YO
module.exports = app;




