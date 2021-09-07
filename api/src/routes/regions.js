const { Router } = require('express');
const { Region, Subregion, Country } = require('../db.js')

const router = Router();

router.get('/', (req,res,next) => {
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
})

module.exports = router;