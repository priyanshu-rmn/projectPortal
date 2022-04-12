const express = require('express');
const router = express.Router();
const passport = require("passport"); // require passport for authentication and authorization


const db = require("../models/db");

function isStudent(email) {
    const decidingChar = email[email.indexOf('@') - 1];
    let flag = false;
    if (decidingChar >= '0' && decidingChar <= '9') {
        flag = true;
    }
    return flag;
}

//this will open the oauth Consent Screen
//provider = google and data retrieveing = profile and email
// console.log(authControllers.openConsentScreen);
router.get("/google",passport.authenticate("google", { scope: ["profile", "email"] }))


//After selection of a google account in Consent Screen
router
    .route("/google/callback")
    .get(passport.authenticate("google", {
        failureRedirect: "http://localhost:8000/login",
        // req.session.messages
        failureMessage: "Couldn't Sign In :( Try Again :)",
    }),
        async function (req, res) {
            // Successful authentication, redirect secrets.
            //if email of student or proff is present in  models then redirect to student-rollNo or proff-id dashboard
            console.log(req.user);
            if (isStudent(req.user.email)) {
                try {
                    const user = await db.Student.findOne({ email: req.user.email });
                    if (user) res.redirect(`/s/${user.rollNo}/dashboard`);
                    else res.redirect('/profileReg');       
                } catch (e) {
                    console.log("ERROR @ line 43", e.message);
                }
            }
            else {
                const user = await db.Proff.findOne({ email: req.user.email });
                if(!user) res.redirect(`/p/${user.id}/dashboard`);          
                else res.redirect('/profileReg')
            }
        })

module.exports = router;