const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const Crew = sequelize.define("Crew", {
        // a foreign key from Employee table
        employee_id: {
            type: Sequelize.STRING,
            references: {
                model: Employee,
                key: 'id',
            }
        },
        // a foreign key from Job table
        job_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Job,
                key: 'id',
            }
        }
    });
};