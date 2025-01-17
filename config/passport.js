var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username and password
passport.use(new LocalStrategy(
    function(username, password, done) {
        // When a user tries to sign in this code runs
        console.log("User is trying to login...");
        db.User.findOne({
            where: {
                username: username
            }
        }).then(function(dbUser) {
            // If there's no user with the given username
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect Username."
                });
            }
            // If there is a user with the given username, but the password the user gives us is incorrect
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            // If none of the above, return the user
            return done(null, dbUser);
        });
    }
));

// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;