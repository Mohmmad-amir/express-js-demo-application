const { moviesModel } = require('../models/movieModel')


/*
* index function
* this function work for show all data from a model
*/
exports.index = (req, res) => {
    moviesModel.find((err, docs) => {
        if (!err) {
            res.render('movies', { data: docs, title: "all movies" })
        } else {
            console.log(err);
        }
    })
}
/*
* show function
* this function work for show the single data from a model
*/
exports.show = (req, res) => {
    moviesModel.findOne(req.params.moviesID, (err, doc) => {
        if (!err) {
            res.render('movieShow', { showData: doc, title: 'show movie details' })
        } else {
            console.log(err);
        }
    })
}

/*
* delete function
* this function work for delete data from a model
*/
exports.delete = (req, res) => {
    moviesModel.findByIdAndRemove(req.params.moviesID, (err, doc) => {
        if (!err) {
            res.redirect('/api/users/all')
        } else {
            console.log(err);
        }
    })
}