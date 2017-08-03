const Sequelize = require('sequelize');
const db = require('./../../Config/database.js');

const Models = {};

Models.User = require('./User')(db, Sequelize);
Models.Schedule = require('./Schedule')(db, Sequelize);
Models.Detail = require('./Detail')(db, Sequelize);

Models.Schedule.belongsTo(Models.User, {as: 'User'});
Models.Detail.belongsTo(Models.Schedule, {as: 'Schedule'});

module.exports = Models;