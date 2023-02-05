const mongoose = require('mongoose')
// require('./database')
const { Schema } = mongoose
// create a schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    // name: String,
    // email: String,
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