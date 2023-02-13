const User = require('../models/userModel')


//index function
const index = (req, res) => {
    User.find()
        .exec()
        .then(docs => {
            if (docs > 0) {
                res.status(200).json(docs)
            }
            else {
                res.status(200).json({
                    success: true,
                    message: "No data found in the database"
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
}


// store function
const store = (req, res, next) => {
    const user = new User({
        name: [
            req.body.firstName,
            req.body.lastName
        ],
        title: req.body.title,
        email: req.body.email,
        age: req.body.age,
        fathers_name: req.body.fathersName,
        mothers_name: req.body.mothersName,
        gender: req.body.gender,
        nationality: req.body.nationality,
        address: {
            village: req.body.village,
            post_code: req.body.postCode,
            post_office: req.body.postOffice,
            thana: req.body.thana,
            district: req.body.district
        }
    })
    user.save()
        .then(
            res.status(201).json({
                message: "people data added successfully",
                created_data: user
            })
        ).catch(err => console.log(err))
}

// show function
const show = (req, res) => {
    const id = req.param.userID
    User.findById(id)
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
            console.log(err);
            res.status(500).json({ error: err })
        })
}

/*
* update function
* this function work for update data from a model
*/
const update = (req, res) => {
    const id = req.params.userID
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    User.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
            console.log(err);
        })
}

/*
* delete function
* this function work for delete data from a model
*/
const destroy = (req, res) => {
    const id = req.params.userID
    User.remove({ _id: id })
        .exec()
        .then(
            res.status(200).json({
                success: true,
                message: `person Delete successfully with id: ${id}`
            })
        )
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })

}




module.exports = {
    index,
    show,
    update,
    store,
    destroy
}