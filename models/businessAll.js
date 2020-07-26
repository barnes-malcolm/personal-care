const Sequelize = require("sequelize");

const sequelize = require('../config/connection');

module.exports = sequelize.define('business', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    business_name: Sequelize.STRING,
    description: Sequelize.TEXT,
    imageUrl: Sequelize.STRING,
    phone: Sequelize.STRING,
    address: Sequelize.STRING,
    website: Sequelize.STRING,
    category: {
        type: Sequelize.STRING,
        defaultValue: 'Beauty Salons'
    }

});