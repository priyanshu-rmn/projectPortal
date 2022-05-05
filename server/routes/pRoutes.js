const express = require('express');
const { GETdashboard, POSTdashboard, GETprofileData, POSTprofileData, GETselectedStudents } = require('../controller/pControllers');
const router = express.Router();

function isLoggedIn(req, res, next) {
    console.log("pRoutes.js", req.user);
    next();
}

// /s/20074026/dashboard
router
    .route("/:id/dashboard")
    .get(isLoggedIn,GETdashboard)
    .post( POSTdashboard)// dynamically updates applied proff


router.get("/:id/selectedStudents", GETselectedStudents)

router
    .route("/:id/profile")
    .get(isLoggedIn, GETprofileData)
    .post(isLoggedIn,POSTprofileData)




module.exports = router;