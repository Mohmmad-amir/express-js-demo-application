// this is for routing the all pages.....
const express = require('express')
const router = express.Router()
// page controller
const { homePage, aboutPage, contactPage, peoplePage } = require('../controllers/pageController')
// home page route and using page controller
router.get('/', homePage)
// about page route and using page controller
router.get('/about', aboutPage)
// contact page route and using page controller
router.get('/contact', contactPage)
// contact page route and using page controller
router.get('/people-list', peoplePage)



module.exports = router