const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('./song-model.js');

var Playlist = sequelizeConnection.define('playlist', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 100]
    }
  }
});

Playlist.belongsToMany(Song, {through: 'song_playlist'})
Song.belongsToMany(Playlist, {through: 'song_playlist'})

module.exports = Playlist;
