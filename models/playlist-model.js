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
      len: [1, 100]
    }
  }
})

Playlist.belongsToMany(Song, {through: 'playlistSong'})
Song.belongsToMany(Playlist, {through: 'playistSong'})


module.exports = Playlist;
