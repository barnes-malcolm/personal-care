const Sequelize = require("sequelize");

const sequelize = require('../config/connection');

module.exports = function (sequelize, DataTypes) {
    const Business = sequelize.define("Business", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        // imageUrl: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        // website: DataTypes.STRING,
        category: {
            type: DataTypes.STRING,
            defaultValue: 'Beauty Salons'
        }

    });
    return Business;
};