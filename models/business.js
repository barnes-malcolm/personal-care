const Sequelize = require("sequelize");

const sequelize = require('../config/connection');

const Business = sequelize.define('business', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    imageUrl: Sequelize.STRING,
    category: Sequelize.STRING,
    website: Sequelize.STRING
});

module.exports = Business;