const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('activity', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		difficult: {
			type: DataTypes.STRING,
		},
		duration: {
			type: DataTypes.STRING,
		},
		season: {
			type: DataTypes.STRING,
		},
	}, {
		timestamps: false,
	});
};