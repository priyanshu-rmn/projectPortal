const express = require('express');
const router = express.Router();

//middleware Funciton for checking if a user is logged in
function isLoggedIn(req, res, next) {
    // console.log(req.user);
    //req.user stores the user details if null then status 401 = unauthorised is sent
    req.user ? next() : res.sendStatus(401);
}

router
    .route("/login")
    // /s/20074026/dashboard
    .get((req, res) => {
        res.render('login.ejs');

    })
    .post((req, res) => {
        res.send('POST /login')
    })

router
    .route("/profileReg")
    .get((req, res) => {
        res.send('GET /profileReg')

    })
    .post((req, res) => {
        res.send('POST /profileReg')
    })

router
    .route("/protected")
    .get(isLoggedIn, (req, res) => {
        console.log(req.user);
        res.send('protected');
    })

router
    .route("/logout")
    .get(isLoggedIn, function (req, res) {
        req.logOut();
        res.redirect("/login");
    })


module.exports = router;