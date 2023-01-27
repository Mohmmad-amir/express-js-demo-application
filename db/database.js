const mongoose = require('mongoose')

// Link
const mongodbLink = 'mongodb+srv://Mohmmad_amir:O25AXHL31XRYud0G@cluster0.shp9rwm.mongodb.net/?retryWrites=true&w=majority'
// database setup
const database = module.exports = () => {
    mongoose.set('strictQuery', true);
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect(mongodbLink, connectionParams);
        console.log('database connected successfully');
    } catch (error) {
        console.log(error);
        console.log('database connect failed');
    }
}
