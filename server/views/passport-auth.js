const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '987377636013-95fqbq6i4dppbnoscf9vslt5ue7e4ueb.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));