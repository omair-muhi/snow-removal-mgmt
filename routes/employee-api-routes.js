// Requiring our employee model
const db = require('../models');
const exphbs = require('express-handlebars');
// Routes - Employees
// =============================================================
module.exports = (app) => {
    // GET route for getting all employees
    app.get('/api/employees/', (req, res) => {
        db.employee.findAll({}).then((dbPost) => res.json(dbPost));
    });
    // GET route for retrieving a single employee
    app.get('/api/employees/:id', (req, res) => {
        db.employee.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
    // POST route for creating a new employee
    app.post('/api/employees', (req, res) => {
        console.log(req.body);
        db.Employee.create({
            Name: req.body.name,
            Title: req.body.title,
            Contact: req.body.contact,
            Admin: req.body.admin
        }).then((dbPost) => {
            refreshEmployees(res);
        });
    });
    // DELETE route for deleting employee
    app.delete('/api/employees/:id', (req, res) => {
        db.employee.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
    // PUT route for updating employee
    app.put('/api/employees/:id', (req, res) => {
        console.log("Hit /api/employees/:id end-point!");
        db.Employee.update({ assigned: req.body.assigned }, {
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
    // route for HBS    
    app.get('/employeeMain', (req, res) => {
        console.log("Hit /employeeMain end-point!");
        refreshEmployees(res);
    });
    // utility function
    const refreshEmployees = (res) => {
        db.Employee.findAll({}).then((dbPost) => {
            // console.log(dbPost[0].dataValues);
            const hbsObject = {
                employees: dbPost,
            };
            // console.log(hbsObject.employees[0].dataValues);
            app.engine('handlebars', exphbs({ defaultLayout: 'employeeMain' }));
            res.render('employeePartial', hbsObject);
        });
    }
};