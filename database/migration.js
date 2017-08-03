const Models = require('./../App/Models/');

Models.User.sync({force: true})
.then(() => Models.Schedule.sync({force: true}))
.then(() => Models.Detail.sync({force: true}))