const Sequelize = require("sequelize");
// Creating our Employee Model
module.exports = function(sequelize, DataTypes) {
  const Employee = sequelize.define("Employee", {
    // Name cannot be null
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    
    Title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    Contact: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    Admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    }
  },{
    freezeTableName: true
  });
  return Employee;
};
