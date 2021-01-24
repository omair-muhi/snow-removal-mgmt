// Requiring our Job model
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
            client_name: req.body.client_name,
            location: req.body.location,
        }).then((dbPost) => res.json(dbPost));
    });
    // DELETE route for deleting jobs
    app.delete('/api/jobs/:id', (req, res) => {
        db.Jow.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
    // PUT route for updating jobs
    app.put('/api/jobs', (req, res) => {
        db.Job.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
};