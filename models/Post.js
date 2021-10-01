// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Post extends Model {}

// set up fields and rules for Product model
Post.init(
{
    // define columns
  
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  
  post: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  create_date: {
    type: DataTypes.DATE,
    allowNull: false
  },

  user_id: {
    type: DataTypes.INTEGER,
    references: {
    model: 'User',
    key: 'id',
    }
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product',
  }
);

module.exports = Post;
