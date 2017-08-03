const Sequelize = require('sequelize')
const stringConnectDB = new Sequelize('mysql://root:@localhost:3306/schedule');
module.exports = stringConnectDB;