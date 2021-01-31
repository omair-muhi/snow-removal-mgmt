// Requiring our Crew model
const db = require('../models');
const exphbs = require('express-handlebars');
// Routes - Crews - code adapted from Week #14 Activity #12 Blog CRUD
// =============================================================
module.exports = (app) => {
    // GET route for getting all of the crews
    app.get('/api/crews/', (req, res) => {
        db.Crew.findAll({}).then((dbPost) => res.json(dbPost));
    });
    // GET route for retrieving a single crew
    app.get('/api/crews/:id', (req, res) => {
        db.Crew.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });

    // app.post("/api/login", (req, res) => {
    //     db.Employee.findOne({
    //         where: {
    //             id: req.body.id,
    //             Name: req.body.Name,
    //         },
    //     }).then((dbPost) => res.json(dbPost));
    // });

    // POST route for creating a new crew
    // app.post('/api/crews', (req, res) => {
    //     console.log(req.body);
    //     db.Crew.create({
    //         employee_id: req.body.employee_id,
    //         job_id: req.body.job_id,
    //     }).then((dbPost) => res.json(dbPost));
    // });
    // DELETE route for deleting crews
    app.delete('/api/crews/:id', (req, res) => {
        db.Crew.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
    // PUT route for updating crews
    app.put('/api/crews', (req, res) => {
        db.Crew.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
    // PUT route for freeing employee
    app.put('/api/crews/freeEmployee/:jobId', (req, res) => {
        db.Crew.findOne({
            where: {
                job_id: req.params.jobId,
            },
        }).then((doneCrewEntry) => {
            console.log(doneCrewEntry);
            // free employee
            db.Employee.update({ assigned: req.body.assigned }, {
                where: {
                    id: doneCrewEntry.dataValues.employee_id,
                },
            }).then((dbPost) => {
                // remove this crew entry
                db.Crew.destroy({
                    where: {
                        id: doneCrewEntry.dataValues.id,
                    },
                }).then((dbPost) => res.json(dbPost));
            });
        });
    });

    // route for HBS    
    app.get('/crewMain', (req, res) => {
        console.log("---------------Hit /crewMain end-point!");
        refreshCrews(res);
    });
    const refreshCrews = (res) => {
        db.Crew.findAll({}).then((allCrews) => {
            // TEST
            console.log("-----Logging all crews...");
            // extract all employee IDs
            let allEmpIds = [];
            allCrews.forEach((item) => {
                allEmpIds.push(item.dataValues.employee_id);
            });
            // extract all job IDs
            let allJobIds = [];
            allCrews.forEach((item) => {
                allJobIds.push(item.dataValues.job_id);
            });
            console.log(allEmpIds);
            console.log("-----Logging all crews...");
            db.Employee.findAll({
                    where: {
                        id: allEmpIds
                    }
                }).then((allEmployees) => {
                    // console.log("Logging all employees...")
                    // console.log(allEmployees[0].dataValues.Name);
                    db.Job.findAll({
                        where: {
                            id: allJobIds
                        }
                    }).then((allJobs) => {
                        const hbsObject = {
                            employees: allEmployees,
                            jobs: allJobs
                        };
                        // console.log(hbsObject.jobs[0].dataValues);
                        app.engine('handlebars', exphbs({ defaultLayout: 'crewMain' }));
                        res.render('crewPartial', hbsObject);
                    })
                })
                // TEST
                // console.log(allCrews);
        });
    }
};