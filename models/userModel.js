const mongoose = require('mongoose')
// require('./database')
const { Schema } = mongoose
// create a schema
const userSchema = new Schema({
    name: [
        first_name,
        last_name
    ],
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


module.exports = mongoose.model("users", userSchema)