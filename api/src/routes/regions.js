const { Router } = require('express');
const { Region, Subregion, Country } = require('../db.js')
const { Op } = require('sequelize');

const router = Router();

router.get('/', (req,res,next) => {
	let { region } = req.query;
	if (region) {
		return Region.findAll({
			where: { name: { [Op.iLike]: region } },
			include: {
				model: Subregion,
				attributes: ['name'],
				include: {
					model: Country,
				}
			},
			attributes: ['name']
		})
		.then((region) => res.json(region))
		.catch((err) => next(err));
	} else {
		return Region.findAll({ 
			include: {
				model: Subregion,
				attributes: ['name'],
				include: {
					model: Country,
				}
			},
			attributes: ['name']
		})
		.then((regions) => res.json(regions))
		.catch((err) => next(err));		
	}
})

module.exports = router;