// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {

    app.get("/signup", function(req, res) {
        // If the user already has an account send them to the managers page
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

};