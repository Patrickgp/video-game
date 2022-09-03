const seedUsers = require('./users');
const seedPost = require("./post").default;

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPost();
  
    process.exit(0);
  };
  
  seedAll();
