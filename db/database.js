const mongoose = require('mongoose')

// Link
const mongodbLink = process.env.DATABASE_URI
// const mongodbLink = 'mongodb://localhost:27017/portfolio'
// database setup
const database = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = database