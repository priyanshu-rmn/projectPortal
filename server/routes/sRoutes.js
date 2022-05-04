const express = require('express');
const router = express.Router();
const controllers = require('../controller/sControllers');

function isLoggedIn(req, res, next) {
    console.log("sRoutes.js", req.user);
    next();
}

// /s/20074026/dashboard
router
    .route("/:id/dashboard")
    .get(isLoggedIn,controllers.GETdashboard)
    .post(controllers.POSTdashboard)// dynamically updates applied proff

    // .get((req, res) => {
    //     const { rollNo } = req.params;
    //     res.send(`GET /s/${rollNo}/dashboard`)
    // })

router.post("/:id/lock", controllers.POSTlock)

router
    .route("/:id/profile",isLoggedIn)
    .get(controllers.GETprofileData)
    .post(controllers.POSTprofileData)



module.exports = router;