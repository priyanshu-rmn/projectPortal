const express = require('express');
const router = express.Router();
const { GETdashboard, POSTdashboard, GETfaculties, POSTstartProcess } = require('../controller/aControllers')

function isLoggedIn(req, res, next) {
    console.log("/aroutes", req.user);
    req.user ? next() : res.status(401);
}

router
    .route("/dashboard")
    .get(GETdashboard)
    .post(isLoggedIn, POSTdashboard)

router
    .route("/faculties")
    .get(GETfaculties)


router.post("/startProcess",isLoggedIn, POSTstartProcess)


module.exports = router;