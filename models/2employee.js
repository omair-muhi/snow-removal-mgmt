<<<<<<< HEAD
=======
  
>>>>>>> stable-f548df9
const model = require('../models/');
const Sequelize = require("sequelize");

// Creating our Employee Model
module.exports = function (sequelize, DataTypes) {
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
<<<<<<< HEAD
=======

>>>>>>> stable-f548df9
    },
    Admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
<<<<<<< HEAD
=======
      defaultValue:false

>>>>>>> stable-f548df9
    },
    assigned: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
<<<<<<< HEAD
      default:false
=======
      defaultValue:false

>>>>>>> stable-f548df9
    },

  }, {
    freezeTableName: true
  });

<<<<<<< HEAD
  Employee.associate = model => {
    Employee.belongsTo(model.Crew, {
      foreignKey: {
        allowNull:true
      }
    });
  };

  return Employee;
};
=======
  // Employee.associate = model => {
  //   Employee.belongsTo(model.Crew, {
  //     foreignKey: {
  //       allowNull:true
  //     }
  //   });
  // };

  return Employee;
};
>>>>>>> stable-f548df9
