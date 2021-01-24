// Requiring our Crew model
const db = require('../models');

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
    // POST route for creating a new crew
    app.post('/api/crews', (req, res) => {
        console.log(req.body);
        db.Crew.create({
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
