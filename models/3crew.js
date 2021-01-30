  
const model = require('../models');
const Sequelize = require("sequelize");
// Creating our Crew Model
module.exports = (sequelize, DataTypes) => {
    const Crew = sequelize.define("Crew", {
        // primary key
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        // a foreign key from Employee table
        employee_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Employee",
                key: 'id',
                allowNull: true
            }
        },
        // a foreign key from Job table
        job_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Job",
                key: 'id',
                allowNull: true
            }
        }
        }, {
        freezeTableName: true
    });

    // Crew.associate = model => {
    //     Crew.hasMany(model.Employee, {

    //     })
    // }

    // Crew.associate = model => {
    //     Crew.hasMany(model.Job, {
            
    //     })
    // }

    return Crew;
};