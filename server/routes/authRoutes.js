const express = require("express");
const router = express.Router();
const passport = require("passport"); // require passport for authentication and authorization

const db = require("../models/db");

function isStudent(email) {
  const decidingChar = email[email.indexOf("@") - 1];
  let flag = false;
  if (decidingChar >= "0" && decidingChar <= "9") {
    flag = true;
  }
  return flag;
}

//this will open the oauth Consent Screen
//provider = google and data retrieveing = profile and email
// console.log(authControllers.openConsentScreen);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//After selection of a google account in Consent Screen
router.route("/google/callback").get(
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
    // req.session.messages
    failureMessage: "Couldn't Sign In :( Try Again :)",
  }),
  async function (req, res) {
    // Successful authentication, redirect secrets.
    //if email of student or proff is present in  models then redirect to student-rollNo or proff-id dashboard
    console.log("/callback:  ",req.user);
    if (req.user.email === "priyanshurmn1702@gmail.com") {
      const docNo = await db.Admin.estimatedDocumentCount();
      if (docNo === 0) {
        console.log(docNo);
        const defaultData = new db.Admin();
        await defaultData.save();
      }
      res.redirect(`http://localhost:3000/a/dashboard`);
    }
    else if (isStudent(req.user.email)) {
        try {
            const user = await db.Student.findOne({ email: req.user.email });
            if (user) res.redirect(`http://localhost:3000/s/dashboard`);
            else res.redirect('http://localhost:3000/s/profileReg');
        } catch (e) {
            console.log("ERROR @ line 43", e.message);
        }
    }
    else {
        try {
            const user = await db.Proff.findOne({ email: req.user.email });
            if(user) res.redirect(`http://localhost:3000/p/dashboard`);
            else res.redirect('http://localhost:3000/p/profileReg')
        } catch (e) {
            console.log("ERROR @ line 43", e.message);
        }
    }
    // let token = req.user.token;
    // res.redirect("http://localhost:3000/");
  }
);

module.exports = router;
