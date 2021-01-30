// Requiring our employee model
const db = require('../models');
const exphbs = require('express-handlebars');
// Routes - Manager
// =============================================================
module.exports = (app) => {
    // route for HBS    
    app.get('/managerOverviewMain', (req, res) => {
        console.log("Hit /managerOverviewMain end-point!");
        db.Employee.findAll({}).then((allEmployees) => {
            // console.log(dbPost[0].dataValues);
            // console.log(hbsObject.employees[0].dataValues);
            db.Job.findAll({}).then((allJobs) => {
                const hbsObject = {
                    employees: allEmployees,
                    jobs: allJobs
                };
                app.engine('handlebars', exphbs({ defaultLayout: 'managerOverviewMain' }));
                res.render('managerOverviewPartial', hbsObject);
            })
        });
    });
};