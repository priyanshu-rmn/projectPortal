const express = require('express');
const router = express.Router();
const sControllers = require('../controller/sControllers');

// /s/20074026/dashboard
router
    .route("/:roll/dashboard")
    .get(sControllers.dashboardData)


router
    .route("/:roll/profile")
    .get(sControllers.GETprofileData)
    .post(sControllers.POSTprofileData)


module.exports = router;