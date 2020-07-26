module.exports = sequelize.define('album', {
    id: {
        field: 'CategoryId',
        type: sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        field: 'category',
        type: sequelize.STRING
    }
});