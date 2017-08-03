module.exports = (db, Sequelize) => {
	const User = db.define('User', {
		username: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		type: {
			type: Sequelize.INTEGER,
			allowNull: false,
			validate: {
				min: 1,
				max: 3
			},
		},
		avatar: {
			type: Sequelize.STRING,
			allowNull: true,
		}
	})
	return User;
}