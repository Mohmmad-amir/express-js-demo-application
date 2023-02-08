const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String
});

module.exports = mongoose.model("Person", personSchema)