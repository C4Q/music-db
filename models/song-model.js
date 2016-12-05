const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model');
const Genre = require('./genre-model');

//////////
// YOUR CODE HERE:
//////////

const Song = sequelizeConnection.define('song', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1,250]
    }
  },
  youtube_url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
      len: [1,50]
    }
  }

})

Song.belongsTo(Artist);
Song.belongsToMany(Genre, {through: 'Genre_Song'});
Genre.belongsToMany(Song, {through: 'Genre_Song'});

module.exports = Song;
