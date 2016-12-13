const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

const Producer = sequelizeConnection.define('producer', {
	name: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 100]
		}
	}
})

module.exports = Producer;