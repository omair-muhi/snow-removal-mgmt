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
        }, {
        freezeTableName: true
    });

    Crew.associate = model => {
        Crew.hasMany(model.Employee, {

        })
    }

    Crew.associate = model => {
        Crew.hasMany(model.Job, {
            
        })
    }

    return Crew;
};