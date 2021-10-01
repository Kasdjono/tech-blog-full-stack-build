const sequelize = require('../config/connection');

const User =  require('../models/User');
const Post = require('../models/Post');

const userSeedData = require('./userSeedData.json');
const postSeedData = require('./postSeedData.json');

const seedDatabase = async () => {

  await sequelize.sync({ force: true});
  await User.bulkCreate(userSeedData);
  await Post.bulkCreate(postSeedData);
  
  process.exit(0);

};

seedDatabase();
