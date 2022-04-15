const express = require('express');
const { GETdashboard, POSTdashboard, GETprofileData, POSTprofileData,GETselectedStudents } = require('../controller/pControllers');
const router = express.Router();

router
    .route("/:id/dashboard")
    .get(GETdashboard)
    .post(POSTdashboard)

router
    .route("/:id/profile")
    .get(GETprofileData)
    .post(POSTprofileData)

router.get('/:id/selectedStudents', GETselectedStudents);

module.exports = router;