module.exports = (db, Sequelize) => {
	const Schedule = db.define('Schedule', {
		day: {
			type: Sequelize.DATE,
			allowNull: false,
		}
	})
	return Schedule;
}