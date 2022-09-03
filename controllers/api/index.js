const router = require('express').Router();

const scorePostRoutes = require('./post-score-route');

router.use('/scores', scorePostRoutes);

module.exports = router;