const mongoose = require('mongoose')
// require('./database')
const { Schema } = mongoose
// create a schema
const userSchema = new Schema({
    name: Array,
    title: String,
    email: { type: String, required: true },
    age: Number,
    fathers_name: String,
    mothers_name: String,
    gender: String,
    nationality: String,
    religion: String,
    address: {
        village: "",
        post_office: "",
        post_code: "",
        thana: "",
        district: ""
    }

})

var userModel = mongoose.model('users', userSchema)
// module.exports = mongoose.model('users' + userModel)
module.exports = { userModel }