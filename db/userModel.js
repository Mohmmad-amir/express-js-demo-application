const mongoose = require('mongoose')
require('./database')
const { Schema } = mongoose
// create a schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    // name: String,
    // email: String,
})

var userModel = mongoose.model('users', userSchema)
// module.exports = mongoose.model('users' + userModel)
exports = userModel