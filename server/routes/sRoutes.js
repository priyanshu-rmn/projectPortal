const express = require('express');
const router = express.Router();
const controllers = require('../controller/sControllers');


// /s/20074026/dashboard
router
    .route("/:id/dashboard")
    .get(controllers.GETdashboard)
    .post(controllers.POSTdashboard)// dynamically updates applied proff

    // .get((req, res) => {
    //     const { rollNo } = req.params;
    //     res.send(`GET /s/${rollNo}/dashboard`)
    // })


router
    .route("/:id/profile")
    .get(controllers.GETprofileData)
    .post(controllers.POSTprofileData)


module.exports = router;