require("dotenv").config();
const mongoose = require('mongoose');
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require('./models/db');
const User = db.User;

passport.use(User.createStrategy());

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"

  },
    function (accessToken, refreshToken, profile, cb) {
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


  