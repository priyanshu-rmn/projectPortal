const express = require('express');
const router = express.Router();
const controllers = require('../controller/sControllers');


// /s/20074026/dashboard
router
    .route("/:rollNo/dashboard")
    .get(controllers.GETdashboard)
    .post(controllers.POSTdashboard)// dynamically updates applied proff

    // .get((req, res) => {
    //     const { rollNo } = req.params;
    //     res.send(`GET /s/${rollNo}/dashboard`)
    // })


router
    .route("/:rollNo/profile")
    .get(controllers.GETprofileData)
    .post(controllers.POSTprofileData)


module.exports = router;