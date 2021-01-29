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
    return Crew;
};