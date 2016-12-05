const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Album = require('../models/album-model');

//Album.sync will create the artists table
Album.sync({force: true})
.then(() => sequelizeConnection.sync())

//add the following three artists to the database:
.then(() => Album.create({albumName: 'A Seat at the Table', artistId: 4}))
.then((album)=>{
  album.addSongs([4, 5, 6, 7, 8])
})

// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));