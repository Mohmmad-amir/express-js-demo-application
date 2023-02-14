const Movies = require('../models/movieModel')


/*
* index function
* this function work for show all data from a model
*/
const index = (req, res) => {
    Movies.find()
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                res.status(200).json(docs)
            } else {
                res.status(200).json({
                    success: true,
                    message: "No data found in Database..!!"
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
}
/*
* store function
* this function work for store data into database
*/
const store = (req, res) => {
    const movies = new Movies({
        name: req.body.movieName,
        years: req.body.movieYear,
        directed_by: req.body.directBy,
        written_by: req.body.writtenBy,
        cinematography: req.body.cinematography,
        music_by: req.body.musicBy,
        // produced_by:[],
        // starting:[],
        // edited_by:[]
    });

    movies.save()
        .then(result => {
            res.status(201).json({

                message: "movie data added successfully",
                data: movies
            })
        })
        .catch(err => console.log(err));
}
/*
* show function
* this function work for show the single data from a model
*/
const show = (req, res) => {
    const id = req.params.moviesID
    Movies.findById(id)
        .exec()
        .then(doc => {
            if (doc) {
                console.log(doc);
                res.status(200).json(doc)
            } else {
                res.status(404).json({
                    message: `No valid entry found provided iD : ${id}`
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
}
/*
* update function
* this function work for update data
*/
const update = (req, res) => {
    const id = req.params.moviesID
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    Movies.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                success: true,
                message: "data update successfully",
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
            console.log(err)
        });
}
/*
* delete function
* this function work for delete data from a model
*/
const destroy = (req, res) => {
    const id = req.params.moviesID
    Movies.deleteOne({ _id: id })
        .exec()
        .then(
            res.status(200).json({
                success: true,
                message: "Data Delete successfully..!"
            })
        )
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })

}


module.exports = {
    index,
    show,
    store,
    destroy,
    update
}