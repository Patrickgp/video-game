const router = require("express").Router();
const apiRoutes = require("./post-routes");

router.use("/post", apiRoutes);
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
