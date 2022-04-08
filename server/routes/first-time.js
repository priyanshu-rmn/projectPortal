const express = require('express');
const router = express.Router();

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

module.exports = router;