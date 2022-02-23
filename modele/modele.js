const mongoose = require('mongoose')

const postShema = mongoose.Schema({
    titre:{type:String, require:true},
    text:{type:String, require:true},
    autor:{type:String, require:true},
    urlImage:{type:String, require:false}
})

module.exports = mongoose.model('Post', postShema)