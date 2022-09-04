const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require("./post-routes");
const scorePostRoutes = require('./post-score-route');

router.use('/users', userRoutes);
router.use("/posts", postRoutes);
router.use('/scores', scorePostRoutes);

router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;
