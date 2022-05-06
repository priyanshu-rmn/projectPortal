const express = require('express');
const router = express.Router();
const { GETdashboard, POSTdashboard, GETfaculties} = require('../controller/aControllers')

router
    .route("/dashboard")
    .get(GETdashboard)
    .post(POSTdashboard)

router
    .route("/faculties")
    .get(GETfaculties)


module.exports = router;