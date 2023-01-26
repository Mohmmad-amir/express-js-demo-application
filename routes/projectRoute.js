// this route for projects activity
const express = require('express')
const router = express.Router()

// project page routing
router.get('/', (req, res) => {
    res.render('project', { title: "All Projects" })
})
router.get('/create', (req, res) => {
    res.render('projectCreate', { title: 'Create Project' })
})



module.exports = router