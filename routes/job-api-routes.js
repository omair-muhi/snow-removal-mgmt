// Requiring our Todo model
const db = require('../models');

// Routes - Job 
// =============================================================
module.exports = (app) => {
    // GET route for getting all of the jobs
    app.get('/api/jobs/', (req, res) => {
        db.Job.findAll({}).then((dbPost) => res.json(dbPost));
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
            employee_id: req.body.employee_id,
            job_id: req.body.job_id,
        }).then((dbPost) => res.json(dbPost));
    });
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
};