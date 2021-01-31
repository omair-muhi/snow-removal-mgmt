// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {

    app.get("/signup", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/managerOverviewMain");
        }
        res.sendFile(path.join(__dirname, "../public/loginSignup.html"));
    });

    app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/managerOverviewMain");
        }
        res.sendFile(path.join(__dirname, "../public/loginManager.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/members", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    // });

};