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

///////////////////////////////////////////////////////////
// When performing the belongsToMany method, methods to  //
// leading in the direction(s) of the association should //
// be listed in the same file.                           //
///////////////////////////////////////////////////////////

Playlist.belongsToMany(Song, {through: 'playistSong', foreignKey: 'playlistId'});
Song.belongsToMany(Playlist, {through: 'playistSong', foreignKey: 'songId'});

module.exports = Playlist;
