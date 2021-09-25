const { Router } = require('express');
const { Region, Subregion, Country } = require('../db.js')
const { Op } = require('sequelize');

const router = Router();

router.get('/', (req,res,next) => {
	return Region.findAll({ 
		attributes: ['name'],
	})
	.then((regions) => res.json(regions))
	.catch((err) => next(err));	
})

module.exports = router;