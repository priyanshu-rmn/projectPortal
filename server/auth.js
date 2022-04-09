require("dotenv").config();
// const express = require('express')
// const app = express()
const mongoose = require('mongoose');

// const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");



// app.use(session({
//     secret: "Our little secret.",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());



const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    googleId: String,
    secret: String,
    email: String,
    profileURL : String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"

  },
    function (accessToken, refreshToken, profile, cb) {
        console.log("--------------------------------------------")
        // console.dir(profile);
        console.log("--------------------------------------------")
        User.findOrCreate({
            username: profile._json.name,
            googleId: profile._json.sub, 
            email: profile._json.email,
            profileURL: profile._json.picture,
        }, function (err, user) {
          return cb(err, user);
          });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
