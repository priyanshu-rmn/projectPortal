const express = require('express');
const router = express.Router();
const aControllers = require('../controller/aControllers')

router
    .route("/dashboard")
    // /s/20074026/dashboard
    .get((req, res) => {
        res.send('GET /a/dashboard')

    })
    .post((req, res) => {
        res.send('POST /a/dashboard')
    })

router
    .route("/faculties")
    .get((req, res) => {
        res.send('GET /a/faculties')

    })
    .post((req, res) => {
        res.send('POST /a/faculties')
    })

module.exports = router;