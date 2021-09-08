const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('activity', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			set(value) {
				this.setDataValue('name', value.toLowerCase());
			},
			get() {
				const rawValue = this.getDataValue('name');
				return rawValue[0].toUpperCase() + rawValue.slice(1);
			}
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