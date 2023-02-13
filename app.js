const express = require('express');
const database = require('./db/database');
const app = express();
const port = process.env.port || 8000;

//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json())
// setup static folder
app.use(express.static(__dirname + '/public/'))
// home page router
// const homePageRouter = require('./routes/pages')
// app.use('/', homePageRouter);
// project Router
const projectRouter = require('./routes/projectRoute')
app.use('/api/v1/projects', projectRouter);
// /*web route*/
// const webRouter = require('./routes/web')
// app.use('/web/v1.0.0/', webRouter)
/*movies route*/
const movieRouter = require('./routes/movieRouter')
app.use('/api/v1', movieRouter)
//this route for return json data
const peopleRouter = require('./routes/peopleRouter')
app.use('/api/v1', peopleRouter)


app.listen(port, () => {
    database()

    console.log(`server is running on port ${port}......!`);
})





