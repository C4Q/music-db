const router = require('express').Router();
const Genre = require('../models/genre-model');
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');

// ****************************** Callbacks ******************************

function getAllGenres(req, res) {
	Genre.findAll()
	.then(function(data) {
		res.send(data);
	})
}

function getGenreById(req, res) {
	Genre.findById(req.params.id)
	.then(function(data) {
		res.send(data);
	})
}

function postGenre(req, res) {
	console.log('REQ BODY:', req.body)
	Genre.create({
		title: req.body.title
	})
	.then(function() {
		res.send("You've added a new genre")
	})
}

function updateGenre(req, res) {
	Genre.update({
		title: req.params.newGenre
	},
	{
		where: {
			id: req.params.id
		}
	})
	.then(function(genre) {
		res.send(genre);
	})
}

// ****************************** Routes ******************************

// /api/genres GET all genres, ordered a-z
router.route('/')
	.get(getAllGenres)
// /api/genres POST (create) a new genre
	.post(postGenre)

// /api/genres/:id GET a specific genre by id
router.route('/:id')
	.get(getGenreById)

// /api/genres/:id/:newGenre PUT (update) a specific genre's name
router.route('/:id/:newGenre')
	.put(updateGenre)

module.exports = router;