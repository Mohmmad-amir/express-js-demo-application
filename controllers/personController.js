const mongoose = require('mongoose')
const Person = require('../models/personModel')

/*
*   index function
*   this is for fetch all data from database
 */
const index = (req, res, next) => {
    Person.find()
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
*   store function
*   this is for store data in database
 */
const store = (req, res) => {
    const person = new Person({
        name: req.body.personName,
        email: req.body.personEmail,
        address: {
            village: req.body.village,
            thana: req.body.thana,
            post_code: req.body.postCode
        },
        hobby: [req.body.hobbyOne, req.body.hobbyTwo]
    });

    person.save().then(result => {
        res.status(201).json({
            message: "people data added successfully",
            createdPerson: person
        })
        console.log(req.body);
    }).catch(err => console.log(err));

}

/*
*   show function
*   this is for show single data from database using ID
 */
const show = (req, res, next) => {
    const id = req.params.personID
    Person.findById(id)
        .exec()
        .then(doc => {
            if (doc) {
                console.log(doc);
                res.status(200).json(doc)
            } else {
                res.status(404).json({
                    message: `No valid entry found for provided ID:${id}`
                })
            }

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
}

/*
*   delete function
*   this is for delete single data from database using the ID
 */

const destroy = (req, res,) => {
    const id = req.params.personID
    Person.remove({ _id: id })
        .exec()
        .then(
            res.status(200).json({
                success:true,
                message:`person Delete successfully with id: ${id}`
            })
        )
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })

}





module.exports = {
    index,
    store,
    show,
    destroy
}