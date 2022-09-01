const seedUsers = require('./users');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
  
    process.exit(0);
  };
  
  seedAll();