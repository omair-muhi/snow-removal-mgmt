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
        db.employee.create({
            employee_id: req.body.employee_id,
            name: req.body.name,
            title: req.body.title,
            contact: req.body.contact,
        }).then((dbPost) => res.json(dbPost));
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
    app.put('/api/employees', (req, res) => {
        db.employee.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
    // route for HBS    
    app.get('/employeeMain', (req, res) => {
        console.log("Hit /employeeMain end-point!");
        db.Employee.findAll({}).then((dbPost) => {
            // console.log(dbPost[0].dataValues);
            const hbsObject = {
                employees: dbPost,
            };
            console.log(hbsObject.employees[0].dataValues);
            app.engine('handlebars', exphbs({ defaultLayout: 'employeeMain' }));
            res.render('employeePartial', hbsObject);
        });
    });
};