const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
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