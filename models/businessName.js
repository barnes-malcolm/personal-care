const Sequelize = require("sequelize");

const sequelize = require('../config/connection');

module.exports = sequelize.define('businessname', {
    id: {
        field: 'businessId',
        type: sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        field: 'businessname',
        type: sequelize.STRING
    }
});