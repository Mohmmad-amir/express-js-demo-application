const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    name: String,
    email: String,
    address: {
        village: String,
        thana: String,
        post_code: Number
    },
    hobby: Array
});

module.exports = mongoose.model("Person", personSchema)