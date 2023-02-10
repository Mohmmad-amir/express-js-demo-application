const moviesModel = require('../models/movieModel')
const userModel = require('../models/userModel')
const Person = require('../models/personModel')



/*
* index function
* this function work for show all data from a model
* for json data
*/
exports.movieIndex = (req, res, next) => {
    moviesModel.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs)

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
}


/*
*   index function
*   this is for fetch all data from database
 */
exports.userIndex = (req, res, next) => {
    userModel.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs)

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
}