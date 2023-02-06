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
const moviesSchema = new Schema({
    name: String,
    years: Number,
    directed_by: String,
    written_by: String,
    produced_by: Array,
    starting: Object,
    cinematography: String,
    edited_by: Object,
    music_by: String

})

var userModel = mongoose.model('users', userSchema)
var moviesModel = mongoose.model('movies', moviesSchema)
// module.exports = mongoose.model('users' + userModel)
module.exports = { userModel, moviesModel }