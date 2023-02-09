const mongoose = require('mongoose')
// require('./database')
const { Schema } = mongoose
// create a schema
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


module.exports = mongoose.model("movies", moviesSchema)