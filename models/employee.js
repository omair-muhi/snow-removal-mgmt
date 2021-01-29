'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Employee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Employee.init({
        Name: DataTypes.STRING,
        Title: DataTypes.STRING,
        Contact: DataTypes.STRING,
        Admin: DataTypes.BOOLEAN,
        assigned: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Employee',
    });
    return Employee;
};