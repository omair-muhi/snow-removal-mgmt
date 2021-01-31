// Requiring our employee model
const db = require('../models');
const exphbs = require('express-handlebars');
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes - Manager
// =============================================================
module.exports = (app) => {
    // route for HBS    
    app.get('/managerOverviewMain', isAuthenticated, (req, res) => {
        console.log("Hit /managerOverviewMain end-point!");
        db.Employee.findAll({
            where: {
                Admin: false,
                assigned: false
            }
        }).then((allEmployees) => {
            db.Job.findAll({
                where: {
                    active: true,
                    assigned: false
                }
            }).then((allJobs) => {
                const hbsObject = {
                    employees: allEmployees,
                    jobs: allJobs,
                    keyMap: createEmployeeJobMap(allEmployees, allJobs)
                };
                app.engine('handlebars', exphbs({ defaultLayout: 'managerOverviewMain' }));
                res.render('managerOverviewPartial', hbsObject);
            })
        });
    });
    const createEmployeeJobMap = (employees, jobs) => {
        let keyMap = [];
        if (employees.length < jobs.length) {
            // iterate over employees
            for (let i = 0; i < employees.length; i++) {
                let obj = {}
                obj.employee_id = employees[i].dataValues.id;
                obj.job_id = jobs[i].dataValues.id;
                keyMap.push(obj);
            }
        } else {
            // iterate over jobs
            for (let i = 0; i < jobs.length; i++) {
                let obj = {}
                obj.employee_id = employees[i].dataValues.id;
                obj.job_id = jobs[i].dataValues.id;
                keyMap.push(obj);
            }
        }
        return keyMap;
    }
};