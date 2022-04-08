const express = require('express');
const router = express.Router();

router
    .route("/:proffId/dashboard")
    // /s/20074026/dashboard
    .get((req, res) => {
        res.send('GET /p/abcde-12345/dashboard')

    })
    .post((req, res) => {
        res.send('POST /p/abcde-12345/dashboard')
    })

router
    .route("/:roll/selectedStudents")
    .get((req, res) => {
        res.send('GET /p/abcde-12345/selectedStudents')

    })
    .post((req, res) => {
        res.send('POST /p/abcde-12345/selectedStudents')
    })

module.exports = router;