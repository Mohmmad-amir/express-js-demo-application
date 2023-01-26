// this is for routing the all pages.....
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', { title: "Dashboard" })
})
router.get('/about', (req, res) => {
    res.render('about', { title: "about" })
})
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'contact' })
})





module.exports = router