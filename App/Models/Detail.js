module.exports = (db, Sequelize) => {
	const Detail = db.define('Detail', {
		time_start: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		time_finish: {
			type: Sequelize.DATE,
			allowNull: false,
		}
	})
	return Detail;
}