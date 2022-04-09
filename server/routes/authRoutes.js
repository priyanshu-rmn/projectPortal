const express = require('express');
const router = express.Router();
const passport = require("passport"); // require passport for authentication and authorization


//this will open the oauth Consent Screen
//provider = google and data retrieveing = profile and email
// console.log(authControllers.openConsentScreen);
router
    .route("/google")
    .get(passport.authenticate("google", { scope: ["profile", "email"] }))


//After selection of a google account in Consent Screen
router
    .route("/google/callback")
    .get(passport.authenticate("google", {
        failureRedirect: "http://localhost:8000/login",
        // req.session.messages
        failureMessage : "Couldn't Sign In :( Try Again :)",
    }),
    function (req, res) {
        // Successful authentication, redirect secrets.
        res.redirect("/protected"); 
    })

module.exports = router;