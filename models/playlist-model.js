const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('./song-model');

//////////
// YOUR CODE HERE:
//////////

var Playlist = sequelizeConnection.define('playlist', {
  title: {
    type: Sequelize.STRING,
    validate: {
    	len: [1,100]
    }
  }
});

Playlist.belongsToMany(Song,{through:PlaylistSong});
Song.belongsToMany(Playlist,{through:PlaylistSong});

module.exports = Playlist;
