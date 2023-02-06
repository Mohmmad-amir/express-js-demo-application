// for home page
exports.homePage = (req, res) => {
    res.render('home', { title: "Dashboard" })
}
// for about page
exports.aboutPage = (req, res) => {
    res.render('about', { title: "about" })
}
//for contact page
exports.contactPage = (req, res) => {
    res.render('contact', { title: 'contact' })
}