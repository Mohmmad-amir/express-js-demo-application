const express = require('express')
const app = express();
const port = 8080;

app.set('view engine', 'ejs')
// setup static folder
app.use(express.static(__dirname + '/public'))

// home page router
const homePageRouter = require('./routes/pages')
app.use('/', homePageRouter)




app.listen(port, () => {
    console.log('server is running......!');
})





