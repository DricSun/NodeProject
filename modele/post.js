const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    titre : {type:string, required:true},
    text : {type:string, required:true},
    autor : {type: string, required:true},
    urlImage : {type:string, required:false},
})

module.exports = mongoose.model('Post', postSchema)