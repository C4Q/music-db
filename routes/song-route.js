const router = require('express').Router();
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');

// ****************************** Callbacks ******************************

function getSongsWithInfo(req, res) {
	Song.findAll({
		include: [Artist, Genre]
	})
	.then(function(data) {
		res.send(data);
	})
}

function getSongsById(req, res) {
  Song.findById(req.params.id, {include: [Artist, Genre]})
  	.then(function(data) {
  		console.log(data);
  		res.send(data);
  	})
}

// make this findOrCreate() also how can i do this so that the user can enter in the genre name and it finds the genreId based on this
function postNewSong(req, res) {
	Song.create({
		title: req.body.title,
		youtube_url: req.body.youtube_url,
		artistId: req.body.artistId,
		projectId: req.body.projectId
	})
	.then(function(song) {
		console.log('REQ BODY:', req.body);
		song.addGenres([req.body.genre])
	})
	.then(function() {
		res.send("You've added a new song")
	})
}

function updateSongTitle(req, res) {
	console.log(req.params)
	Song.update({
		title: req.params.newTitle
	},
	{
		where: {
			id: req.params.id
		}
	})
	.then(function(song) {
		res.send(song)
	})
}

function deleteSongById(req, res) {
	Song.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function() {
		res.send('Song deleted')
	})
}

// ****************************** Routes ******************************

// /api/songs/:id GET specific song by id
router.route('/:id')
	.get(getSongsById)
// /api/songs/:id DELETE a specific song by id
	.delete(deleteSongById)

// /api/songs GET all songs with genre and artist information fully populated (in other words, should say full artist name and genre names, instead of only having the ids)
router.route('/')
	.get(getSongsWithInfo)
// /api/songs POST (create) a new song
	.post(postNewSong)

// /api/songs/:id/:newTitle PUT (update) a specific song's title
router.route('/:id/:newTitle')
	.put(updateSongTitle)




module.exports =  router;
