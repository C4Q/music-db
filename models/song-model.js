const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model');
const Genre = require('./genre-model');
//////////
// YOUR CODE HERE:
//////////


const Song = sequelizeConnection.define('song', {
    title: {type: Sequelize.STRING,
            validate: {len:[1,250]}
            },
    youtube_url:{type: Sequelize.STRING,
                validate: {len:[1,100],
                            isUrl: true,
                            notEmpty:true
                        }
            }
});

Song.belongsTo(Artist);

Song.belongsToMany(Genre, ({through: 'Song_genre'}));
Genre.belongsToMany(Song, ({through: 'Song_genre'}));

module.exports = Song;
