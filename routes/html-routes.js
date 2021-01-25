// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // Home Page User Selects Manager or Crews to proceed
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/crews", (req, res) => {
    // When User Selects Crews they are sent to the crew html page
    res.sendFile(path.join(__dirname, "../public/crew.html"));
  });

  app.get("/manager", (req, res) => {
    // When User Selects Manager they are sent to the manager.html
    res.sendFile(path.join(__dirname, "../public/manager.html"));
  });
};
