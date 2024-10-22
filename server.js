// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
app.set('view engine', 'handlebars');

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/crew-api-routes.js")(app);
require("./routes/job-api-routes.js")(app);
require("./routes/employee-api-routes.js")(app);
require("./routes/manager-api-routes.js")(app);
require("./routes/login-api-routes.js")(app);
require("./routes/login-html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});