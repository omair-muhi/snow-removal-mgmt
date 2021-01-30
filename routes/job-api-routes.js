// Requiring our Job model
const db = require('../models');
const exphbs = require('express-handlebars');
// Routes - Job 
// =============================================================
module.exports = (app) => {
    // GET route for getting all of the jobs
    app.get('/api/jobs/', (req, res) => {
        db.Job.findAll({}).then((dbJob) => res.json(dbJob));
    });
    // GET route for retrieving a single job
    app.get('/api/jobs/:id', (req, res) => {
        db.Job.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
    // POST route for creating a new job
    app.post('/api/jobs', (req, res) => {
        console.log(req.body);
        db.Job.create({
            client_name: req.body.client_name,
            location: req.body.location,
        }).then((dbPost) => {
            refreshJobs(res);
        });
    });
    // DELETE route for deleting jobs
    app.delete('/api/jobs/:id', (req, res) => {
        db.Job.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
    // PUT route for updating jobs
    app.put('/api/jobs/:id', (req, res) => {
        console.log(req.body);
        db.Job.update({
            active: req.body.active,
            assigned: req.body.assigned
        }, {
            where: {
                id: req.params.id
            },
        }).then((dbPost) => {
            refreshJobs(res);
        });
    });
    // route for HBS    
    app.get('/jobMain', (req, res) => {
        console.log("Hit /jobMain end-point!");
        refreshJobs(res);
    });
    const refreshJobs = (res) => {
        db.Job.findAll({}).then((dbPost) => {
            console.log(dbPost);
            const hbsObject = {
                jobs: dbPost,
            };
            // console.log(hbsObject.jobs[0].dataValues);
            app.engine('handlebars', exphbs({ defaultLayout: 'jobMain' }));
            res.render('jobPartial', hbsObject);
        });
    }
};