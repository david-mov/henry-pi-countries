const { Router } = require('express');
const { Country, Activity, Subregion, Region } = require('../db.js');
const { Op } = require('sequelize');

const router = Router();

router.get('/', (req, res, next) => {
	let { name } = req.query;
	if (name) {
		return Country.findAll({
			where: { name: { [Op.iLike]: `%${name}%` } },
			include: {
				model: Subregion,
				attributes: ['name'],
				include: {
					model: Region,
					attributes: ['name']
				}
			}
		})
		.then((countries) => res.json(countries))
		.catch((err) => next(err));
	}
	return Country.findAll({
		include: [{
				model: Activity,
				through: {
					attributes: [],
				},
			},{
				model: Subregion,
				attributes: ['name'],
				include: {
					model: Region,
					attributes: ['name'],
				}
			}]

	})
	.then((countries) => res.json(countries))
	.catch((err) => next(err));
});

router.get('/:idCountry', (req, res, next) => {
	let { idCountry } = req.params;
	return Country.findOne({
		where: { id: { [Op.iLike]: idCountry } },
		include: [{
			model: Activity,
			through: {
				attributes: [],
			},
		},{
			model: Subregion,
			attributes: ['name'],
			include: {
				model: Region,
				attributes: ['name']
			}
		}],
	})
	.then((country) => res.json(country))
	.catch((err) => next(err));
});

module.exports = router;