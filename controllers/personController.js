const mongoose = require('mongoose')
const Person = require('../models/personModel')

/*
*   index function
*   this is for fetch all data from database
 */
exports.index = (req, res, next)=>{
    Person.find()
    .exec()
    .then(docs =>{
        // if (docs) {
        //     console.log(docs);
        //     res.status(200).json(docs)
        // }else{
        //     res.status(404).json({
        //         message:"No valid entry found for provided ID"
        //     })
        // }
            console.log(docs);
            res.status(200).json(docs)

    })
    .catch(err=>{
            console.log(err)
            res.status(500).json({error:err})
        })
}


/*
*   store function
*   this is for store data in database
 */
exports.store = (req, res) => {
    const person = new Person({
        // _id: mongoose.Types.ObjectId,
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
        console.log(result);
        res.status(201).json({
            message: "Handling post request to /person ",
            createdPerson: person
        })
    }).catch(err => console.log(err));

}

/*
*   show function
*   this is for show single data from database using ID
 */
exports.show = (req, res, next)=>{
    const id = req.params.personID
    Person.findById(id)
    .exec()
    .then(doc =>{
        if (doc) {
            console.log(doc);
            res.status(200).json(doc)
        }else{
            res.status(404).json({
                message:"No valid entry found for provided ID"
            })
        }

    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:err})
    })
}

/*
*   delete function
*   this is for delete single data from database using the ID
 */

exports.delete = (req, res, next)=>{
    // const id = req.params.personID
    // Person.remove( id )
    // .exec()
    // .then(result => {
    //         res.status(200).json(result);
    //     })
    // .catch(err=>{
    //     console.log(err)
    //     res.status(500).json({error:err})
    // })

res.send("delete request")

}