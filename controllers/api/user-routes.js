const router = require('express').Router();
const { User } = require('../../models');

// get route used to get all users in the database
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


// get route used to get a single user
  router.get('/:id', async (req, res) => {
    // find a single tag by its `id`
    const { id } = req.params;
  
    const sequelizeOptions = {
      where: {
        id,
      }
    };
  
    try {
      const oneUser = await User.findOne(sequelizeOptions);
      res.status(200).send({ oneUser });
    } catch (err) {
      console.log('Error getting that user', err);
      res.status(400).send({ err });
    }
  });

  // post route used to create a new user
  router.post('/', async (req, res) => {

    try {
      const createUser = await User.create({
        id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      res.status(200).send({ createUser });
    } catch (err) {
      console.log('Error creating that user', err);
      res.status(400).send({ err });
    }
});


// put route used to update a users name, email, or password
router.put('/:id', async (req, res) => {

  try {
    const editUser = await User.update(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    res.status(200).send({ editUser });
  } catch (err) {
    console.log('Error editing that user', err);
    res.status(400).send({ err });
  }
});


// delete route to delete a single user
router.delete('/:id', async (req, res) => {

  const { id } = req.params;

  const sequelizeOptions = {
    where: {
      id,
    },
  };

  try {
    const deleteUser = await User.destroy(sequelizeOptions);
    res.status(200).send({ deleteUser });
  } catch (err) {
    console.log('Error deleting that user', err);
    res.status(400).send({ err });
  }
});


  module.exports = router;