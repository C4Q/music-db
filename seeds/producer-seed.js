const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Producer = require('../models/producer-model');

//Artist.sync will create the artists table
Producer.sync({force: true})
//add the following three artists to the database:
.then(() => Producer.bulkCreate([
  {name: 'SBTRKT'},
  {name: '9th Wonder'},
  {name: 'Kanye West'},
  {name: 'Midi Mafia'},
  {name: 'Malay'},
  {name: 'Caleb Levan'},
  {name: 'Buddy Ross'},
  {name: 'Vegyn'}
]));