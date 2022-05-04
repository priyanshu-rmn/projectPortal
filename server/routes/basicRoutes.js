const express = require('express');
const router = express.Router();
const controller = require('../controller/basicControllers')

//middleware Funciton for checking if a user is logged in
function isLoggedIn(req, res, next) {
    console.log("basicRoutes.js" , req.user);
    //req.user stores the user details if null then status 401 = unauthorised is sent
    req.user ? next() : res.sendStatus(401);
    // next()
}

// Method1
// router
//     .route("/login")
//     .get(controller.GETlogin)
//      .post(controller.POSTlogin)
//      .put(controller.PUTlogin)

//Method 2
router.get('/profileReg', isLoggedIn ,controller.GETprofileReg);
router.post('/profileReg' ,isLoggedIn, controller.POSTprofileReg);
router.get("/protected",isLoggedIn, controller.GETprotected)
router.post("/logout",  isLoggedIn, controller.POSTlogout)


module.exports = router;