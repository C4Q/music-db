const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('./song-model');

//////////
// YOUR CODE HERE:
//////////

const Playlist = sequelizeConnection.define('playlist', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1,100]
    }
  }
})

Playlist.belongsToMany(Song, {through: 'Playlist_Song'});
Song.belongsToMany(Playlist, {through: 'Playlist_Song'});

module.exports = Playlist;
