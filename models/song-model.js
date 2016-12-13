const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// ********** Import models **********
const Artist = require('./artist-model');
const Genre = require('./genre-model');
const Project = require('./project-model');
const Producer = require('./producer-model');

// Creating a model
const Song = sequelizeConnection.define('song', {
	title: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 100]
		}
	},
	youtube_url: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 200],
			isUrl: true
		}
	}
})


// Joins
Song.belongsTo(Artist);

// adds attribute 'projectId' to Song model, instances of Project will get methods getTracks and setTracks
// should this be a seperate table
Project.hasMany(Song, {as: 'Tracks'});

// SongGenre table (gives Song and 'addGenres' method, gives Genre an 'addSongs' method??)
Song.belongsToMany(Genre, {through: 'songGenre'});
Genre.belongsToMany(Song, {through: 'songGenre'});

// songFeature table
Artist.belongsToMany(Song, {through: 'songFeatures'});
Song.belongsToMany(Artist, {through: 'songFeatures'});

// songProducer table
Song.belongsToMany(Producer, {through: 'songProducer'});
Producer.belongsToMany(Song, {through: 'songProducer'});

module.exports = Song;
