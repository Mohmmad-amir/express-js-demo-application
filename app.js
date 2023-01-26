const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = 8080;
app.set('view engine', 'ejs')
// setup static folder
app.use(express.static(__dirname + '/public/'))
// home page router
const homePageRouter = require('./routes/pages')
app.use('/', homePageRouter);
// project Router
const projectRouter = require('./routes/projectRoute')
app.use('/projects', projectRouter);

const mongodbLink = 'mongodb+srv://Mohmmad_amir:O25AXHL31XRYud0G@cluster0.shp9rwm.mongodb.net/?retryWrites=true&w=majority'

// database
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
database()


app.listen(port, () => {
    console.log('server is running......!');
})





