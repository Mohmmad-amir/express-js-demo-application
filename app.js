const express = require('express');
var bodyParser = require('body-parser');
const database = require('./db/database');
const app = express();
const port = 8080;



app.use(bodyParser.json())
app.set('view engine', 'ejs')
// setup static folder
app.use(express.static(__dirname + '/public/'))
// home page router
const homePageRouter = require('./routes/pages')
app.use('/', homePageRouter);
// project Router
const projectRouter = require('./routes/projectRoute')
app.use('/api/projects', projectRouter);
// user router
const userRouter = require('./routes/userRouter')
app.use('/api/users', userRouter);
/*movie route*/
const movieRouter = require('./routes/movieRoute')
app.use('/api/movies', movieRouter)
/*person route*/
const personRouter = require('./routes/personRoute')
app.use('/api/person', personRouter)
//this route for return json data
const apiRouter = require('./routes/apiRoutes')
app.use('/api/json/data/v1', apiRouter)



app.listen(port, () => {
    database()

    console.log(`server is running on port ${port}......!`);
})





