const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model');
const Genre = require('./genre-model')

var Song = sequelizeConnection.define('song', {
  title: {
  	type: Sequelize.STRING, 
  	validate: {is: /^[a-z A-Z 0-9]{1,250}$/} 
  },
  youtube_url: {
  	type: Sequelize.STRING,
  	validate: {isURL: true, is: /^[a-z A-Z 0-9 : / ? = .]{1,100}$/} 
  }
});


Song.belongsTo(Artist) //creates a column in Artist table called artistId 
//careful call them in the same model, we declare both to many to many
Song.belongsToMany(Genre, {through: 'SongGenre'})
Genre.belongsToMany(Song,{through: 'SongGenre'})


module.exports = Song;
