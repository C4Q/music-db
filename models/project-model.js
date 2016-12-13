const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// ********** Import models **********
const Artist = require('./artist-model');
const Genre = require('./genre-model');

const Project = sequelizeConnection.define('project', {
	name: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 100]
		}
	},
	releaseDate: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 20]
		}

	}
});

// Joins
// adds artistId to Project model, gives Artist methods 'getProjects' and 'setProjects'
Artist.hasMany(Project, {as: 'Projects'});


Genre.belongsToMany(Project, {through: 'projectGenre'});
Project.belongsToMany(Genre, {through: 'projectGenre'});


// Joins
// adds artistId to Project model, gives Artist methods 'getProjects' and 'setProjects'
Artist.hasMany(Project, {as: 'Projects'});

Genre.belongsToMany(Project, {through: 'projectGenre'});
Project.belongsToMany(Genre, {through: 'projectGenre'});

module.exports = Project;
