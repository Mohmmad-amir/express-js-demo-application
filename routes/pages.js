// this is for routing the all pages.....
const express = require('express')
const router = express.Router()
// page controller
const page_controller = require('../controllers/pageController')
// home page route and using page controller
router.get('/', page_controller.homePage)
// about page route and using page controller
router.get('/about', page_controller.aboutPage)
// contact page route and using page controller
router.get('/contact', page_controller.contactPage)



module.exports = router