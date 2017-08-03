const Controllers = require('./../App/Controllers/');

module.exports = (app) => {
	app.use('/', (req, res) => {
		return res.render('index');
	})
}