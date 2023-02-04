const mongoose = require('mongoose')

// Link
const mongodbLink = 'mongodb+srv://Mohmmad_amir:O25AXHL31XRYud0G@cluster0.shp9rwm.mongodb.net/portfolio?retryWrites=true&w=majority'
// const mongodbLink = 'mongodb://localhost:27017/portfolio'
// database setup
const database = module.exports = () => {
    mongoose.set('strictQuery', true);
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    }
    try {
        mongoose.connect(mongodbLink, connectionParams);
        console.log('database connected successfully');

    } catch (error) {
        console.log(error);
        console.log('database connect failed');
    }
}
