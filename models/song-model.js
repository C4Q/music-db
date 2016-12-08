const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model.js')
const Genre = require('./genre-model.js');

var Song = sequelizeConnection.define('song', {
  title: {type: Sequelize.STRING,
  validate: {
    len: [1, 250]
    }
  },
  youtube_url: {type: Sequelize.STRING,
  validate: {
    isUrl: true,
    len: [1, 50],
    }
  }
});

Song.belongsTo(Artist);
Song.belongsToMany(Genre, {through: 'song_genre'});
Genre.belongsToMany(Song, {through: 'song_genre'});

module.exports = Song;
