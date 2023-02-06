const { userModel } = require('../models/userModel')
//index function
exports.index = (req, res) => {
    userModel.find((err, docs) => {
        if (!err) {
            res.render('usersList', { userData: docs, title: "user List" })
        } else {
            console.log(err);
        }
    })
}
// create function
exports.create = (req, res, next) => {
    res.render('userCreate', { title: 'add user' });

}

// store function
exports.store = (req, res, next) => {
    //if not get any error
    const errors = validationResult(req);
    if (!errors) {
        var userDetails = new userModel({
            name: req.body.userName,
            email: req.body.userEmail,
        });

        // save userDetails
        userDetails.save((err, doc) => {
            if (!err) {
                req.flash('success', 'user added successfully')
                req.redirect('/')
            } else {
                console.log('Error during record insertion : ' + err);
            }
        })
    } else {
        var error_msg = ''
        errors.forEach(error => {
            error_msg += error.msg + '<br>'
        });
        req.flash('error', error_msg)
        res.render('/create', {
            title: 'Add New User',
            name: req.body.userName,
            email: req.body.userEmail
        })
    }
}

// show function
exports.show = (req, res) => {
    userModel.findById(req.params.userID, (err, docs) => {
        if (!err) {
            res.render('userShow', { showUserData: docs, title: "show user details" })
        } else {
            console.log(err);
        }
    })
}