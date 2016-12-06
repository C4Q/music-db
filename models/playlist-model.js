const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('./song-model')
//////////
// YOUR CODE HERE:
//////////
const Playlist = sequelizeConnection.define('playlist', {
    title: {type: Sequelize.STRING,
            validate: {len:[1,100],notEmpty:true}}
});

Playlist.belongsToMany(Song, ({through: 'Song_playlist'}));
Song.belongsToMany(Playlist, ({through: 'Song_playlist'}));

module.exports = Playlist;
