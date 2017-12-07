var Sequelize = require('sequelize');

// Initiate sequelize
var connection = new Sequelize('database', 'username', 'password', {
    "username": "root",
    "password": "",
    "database": "burger_db",
    "host": "localhost",
    "dialect": "mysql",

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = connection;