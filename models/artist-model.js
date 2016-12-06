const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

var Artist = sequelizeConnection.define('artist', {
  name: {
    type: Sequelize.STRING,
    validate: {is: /^[a-zA-Z 0-9]{1,100}$/} // validate input
  }
});

module.exports = Artist;
