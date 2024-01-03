const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
         
    },
    phone: {
        type: Number,
         
         
    },
    message: {
        type: String,
    }
})

module.exports = mongoose.model('contactformdatas', userSchema)
 