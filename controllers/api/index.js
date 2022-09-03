const router = require('express').Router();

const userRoutes = require('./user-routes');
const apiRoutes = require("./post-routes");

router.use('/users', userRoutes);
router.use("/post", apiRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
