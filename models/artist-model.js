const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////
const Artist = sequelizeConnection.define('artist', {
  name: {type: Sequelize.STRING,
        validate: {
          len: [1, 100]
        }
  }
  // years_active: {type: Sequelize.INTEGAR},
  // age: {type: Sequelize.INTEGAR},
})

module.exports = Artist;
