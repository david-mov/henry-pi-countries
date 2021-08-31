const { Router } = require('express');
const countriesRouter = require('./countries');
const activityRouter = require('./activity');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRouter);
router.use('/activity', activityRouter);

module.exports = router;
