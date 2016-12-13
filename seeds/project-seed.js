const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Project = require('../models/project-model');

//Artist.sync will create the artists table
Project.sync({force: true})
//add the following three artists to the database:
.then(() => Project.bulkCreate([
  {name: 'Nostalgia, Ultra', releaseDate: '16 Feb 2011', artistId: 1},
  {name: 'Channel Orange', releaseDate: '10 July 2012', artistId: 1},
  {name: 'Blonde', releaseDate: '20 Aug 2016', artistId: 1}
]));

