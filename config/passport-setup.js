const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model')

passport.use(
    new GoogleStrategy({
        // options for the google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in DB
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if (currentUser) {
                // user already exists
                console.log('uesr is: ', currentUser);
            }
            else if (profile._json.hd == 'edmonds15.org') {
                // if not, create new user
                console.log(profile);
                new User({
                    fullName: profile.displayName,
                    firstName: profile.name.givenName,
                    googleId: profile.id,
                    email: profile.emails[0].value
                }).save().then((newUser) => {
                    console.log('new user created' + newUser);
                });        
            }
            else {
                console.log('not in ESD domain');
            }
        });
    })
);
