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

// project Router
const projectRouter = require('./routes/projectRoute')
app.use('/api/v1/projects', projectRouter);

/*movies route*/
const movieRouter = require('./routes/movieRouter')
app.use('/api/v1', movieRouter)

//this route for people
const peopleRouter = require('./routes/peopleRouter')
app.use('/api/v1', peopleRouter)

// this route for users
const userRouter = require('./routes/userRouter')
app.use('/api/v1', userRouter)

// this is port for running the server
app.listen(port, () => {
    database()

    console.log(`server is running on port ${port}......!`);
})





