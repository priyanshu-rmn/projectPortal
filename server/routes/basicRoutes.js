const express = require('express');
const router = express.Router();
const controller = require('../controller/basicControllers')

//middleware Funciton for checking if a user is logged in
function isLoggedIn(req, res, next) {
    //req.user stores the user details if null then status 401 = unauthorised is sent
    req.user ? next() : res.sendStatus(401);
}

// Method1
// router
//     .route("/login")
//     .get(controller.GETlogin)
//      .post(controller.POSTlogin)
//      .put(controller.PUTlogin)

//Method 2
router.get('/login', controller.GETlogin);
router.get('/profileReg', isLoggedIn ,controller.GETprofileReg);
router.post('/profileReg' ,controller.POSTprofileReg);
router.get("/protected",isLoggedIn, controller.GETprotected)
router.get("/logout", isLoggedIn, controller.GETlogout)


module.exports = router;