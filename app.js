const express = require('express');
var bodyParser = require('body-parser');
const database = require('./db/database');
const app = express();
const port = 8080;


app.use(bodyParser.urlencoded({
    extended: true
}));
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
/*web route*/
const webRouter = require('./routes/web')
app.use('/web', webRouter)
//this route for return json data
const apiRouter = require('./routes/api_route')
app.use('/api', apiRouter)



app.listen(port, () => {
    database()

    console.log(`server is running on port ${port}......!`);
})





