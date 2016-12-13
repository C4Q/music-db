const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

var Genre = sequelizeConnection.define('genre', {
  title: {
    type: Sequelize.STRING,
    validate: {is: /^[a-z A-Z &]{1,100}$/} // validate input
  }
});

module.exports = Genre;
