const router = require('express').Router();
const Playlist = require('../models/playlist-model');
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');

// ****************************** Callbacks ******************************


// nested inclues: inside array goes an object, first property is model that is associated with playlist
// second key is what you want to include from that is linked to the first model
function getPlaylistsWithInfo(req, res) {
	Playlist.findAll({
		include: [{
			model: Song, 
			include: [Artist, Genre]
		}]
	})
	.then(function(data) {
		res.send(data);
	})
}

function getPlaylistById(req, res) {
	Playlist.findById(req.params.id, 
	{
		include: [{
			model: Song,
			include: [Artist, Genre]
		}]
	})
	.then(function(data) {
		console.log(data);
		res.send(data);
	})
}

function deletePlaylistById(req,  res) {
	Playlist.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function() {
		res.send('Playlist deleted')
	})
}

// USE findOrCreate to check if playlist exists and then to check if song exists
// how to write code so that user can input song title and i can search db to find if id with that song title exists or if not create it
function postPlaylist(req, res) {
	Playlist.create({
		title: req.body.title
	})
	.then(function(playlist) {
		playlist.addSongs([req.body.song])
	})
	.then(function() {
		res.send("You've added a new playlist")
	})
}

// ****************************** Routes ******************************

// /api/playlists GET all playlists with song information fully populated (in other words, should say full song, artist, and genre names, instead of only having the ids)
router.route('/')
	.get(getPlaylistsWithInfo)
// /api/playlists POST (create) a new playlist
// You will also have to use a special 'accessor' method here to add in the songs
	.post(postPlaylist)

// /api/playlists/:id GET a specific playlist by id
router.route('/:id')
	.get(getPlaylistById)
// /api/playlists/:id DELETE a playlist by id
	.delete(deletePlaylistById)


module.exports = router;