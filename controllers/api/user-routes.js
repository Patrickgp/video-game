const router = require('express').Router();
const { User } = require('../../models');


router.get('/', async (req, res) => {
    try {
      const allUsers = await User.findAll({
      });
      res.status(200).send({ allUsers });
    } catch (err) {
      console.log('Error getting all Users', err);
      res.status(400).send({ err });
    }
  });

  module.exports = router;